import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.honeypot) {
      return NextResponse.json(
        { error: "Bot detected" },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const rateLimitOk = await checkRateLimit(ip);

    if (!rateLimitOk) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const validated = contactSchema.parse(body);

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_INBOX) {
      console.error("Missing Resend configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${validated.name}</p>
      <p><strong>Email:</strong> ${validated.email}</p>
      ${validated.company ? `<p><strong>Company:</strong> ${validated.company}</p>` : ""}
      ${validated.budget ? `<p><strong>Budget:</strong> ${validated.budget}</p>` : ""}
      ${validated.timeline ? `<p><strong>Timeline:</strong> ${validated.timeline}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${validated.message}</p>
    `;

    const emailData = await resend.emails.send({
      from: "Vaultic AI <onboarding@resend.dev>",
      to: [process.env.CONTACT_INBOX],
      replyTo: validated.email,
      subject: `New Contact: ${validated.name}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully", id: emailData.id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

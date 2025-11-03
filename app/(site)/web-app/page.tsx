import { Metadata } from "next";
import { getPageSEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Code, Database, Users, Lock } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/cta";

export const metadata: Metadata = getPageSEO(
  "Web App Development",
  "Scalable, production-ready web applications with modern architecture"
);

export default function WebAppPage() {
  const features = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Maintainable, scalable codebases following industry best practices",
    },
    {
      icon: Database,
      title: "Real-time Updates",
      description: "Live data synchronization with WebSockets and edge technologies",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Complete authentication, authorization, and user dashboards",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "End-to-end encryption, API security, and compliance-ready",
    },
  ];

  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "We primarily use Next.js, React, TypeScript, and deploy on Vercel for optimal performance.",
    },
    {
      question: "How do you handle scalability?",
      answer: "All apps are built with scalability in mind using edge deployment, CDN caching, and auto-scaling infrastructure.",
    },
    {
      question: "Do you provide backend services?",
      answer: "Yes, we build complete full-stack applications with APIs, databases, and serverless functions.",
    },
    {
      question: "What about ongoing maintenance?",
      answer: "We offer maintenance plans with regular updates, security patches, and performance monitoring.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Web App Development</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Scalable Web Apps with Gorgeous UI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production-ready applications with clean architecture and modern tech stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center">What&apos;s Included</h2>
            <div className="space-y-4">
              {[
                "Custom UI/UX design",
                "Full-stack development",
                "Real-time features & WebSockets",
                "User authentication & authorization",
                "Database design & optimization",
                "API development & integration",
                "Testing & quality assurance",
                "Deployment & CI/CD",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $50K - $100K
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Core features</li>
                    <li>✓ User management</li>
                    <li>✓ Basic integrations</li>
                    <li>✓ 3 months support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Enterprise</Badge>
                  <CardTitle>Custom</CardTitle>
                  <CardDescription>Tailored solutions</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $100K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ All features</li>
                    <li>✓ Custom architecture</li>
                    <li>✓ Advanced integrations</li>
                    <li>✓ 12 months support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}


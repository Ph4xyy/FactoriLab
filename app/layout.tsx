import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vaultic.ai"),
  title: {
    default: "Vaultic AI - Build Lightning-Fast AI Experiences & Elite Web Apps",
    template: "%s | Vaultic AI",
  },
  description: "Vaultic AI crafts conversion-focused websites, robust web apps, and production AI systems—deployed on Vercel for speed at global scale.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://vaultic.ai",
    siteName: "Vaultic AI",
    title: "Vaultic AI - Build Lightning-Fast AI Experiences & Elite Web Apps",
    description: "Vaultic AI crafts conversion-focused websites, robust web apps, and production AI systems—deployed on Vercel for speed at global scale.",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "Vaultic AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaultic AI - Build Lightning-Fast AI Experiences & Elite Web Apps",
    description: "Vaultic AI crafts conversion-focused websites, robust web apps, and production AI systems—deployed on Vercel for speed at global scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}


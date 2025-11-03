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
import { ArrowRight, CheckCircle2, Globe, Zap, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/cta";

export const metadata: Metadata = getPageSEO(
  "Website Development",
  "Pixel-perfect, conversion-optimized websites with world-class SEO and performance"
);

export default function WebsitePage() {
  const features = [
    {
      icon: Globe,
      title: "Pixel-Perfect Design",
      description: "Custom designs that match your brand and convert visitors into customers",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "95+ Lighthouse scores with edge deployment for global speed",
    },
    {
      icon: BarChart3,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to rank higher in search results",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
    },
  ];

  const faqs = [
    {
      question: "How long does website development take?",
      answer: "Typically 6-12 weeks depending on complexity and features required.",
    },
    {
      question: "Do you provide hosting?",
      answer: "We deploy on Vercel for optimal performance, or your preferred hosting provider.",
    },
    {
      question: "Will my site be mobile responsive?",
      answer: "Absolutely. All our websites are designed mobile-first for perfect display on any device.",
    },
    {
      question: "Do you provide content management?",
      answer: "We can integrate your preferred CMS or build custom admin panels as needed.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Website Development</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Pixel-Perfect Websites That Convert
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Craft stunning websites with world-class performance, SEO, and conversion optimization
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
                "Custom design & branding",
                "Responsive development (mobile, tablet, desktop)",
                "SEO optimization & metadata",
                "Performance optimization (95+ Lighthouse)",
                "Analytics integration",
                "Contact forms & CTAs",
                "Content management integration",
                "Ongoing support & updates",
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
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $10K - $25K
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Up to 5 pages</li>
                    <li>✓ Basic SEO</li>
                    <li>✓ Contact form</li>
                    <li>✓ Mobile responsive</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For growing companies</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $25K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Unlimited pages</li>
                    <li>✓ Advanced SEO</li>
                    <li>✓ Custom integrations</li>
                    <li>✓ Dedicated support</li>
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


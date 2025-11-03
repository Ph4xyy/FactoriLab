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
import { ArrowRight, CheckCircle2, Zap, Workflow, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/cta";

export const metadata: Metadata = getPageSEO(
  "AI Automation Services",
  "Automate operations end-to-end with resilient, intelligent workflows"
);

export default function AIAutomationPage() {
  const features = [
    {
      icon: Workflow,
      title: "End-to-End Automation",
      description: "Streamline entire business processes with intelligent workflow automation",
    },
    {
      icon: Zap,
      title: "Zero Downtime",
      description: "Reliable, fault-tolerant systems that scale automatically with demand",
    },
    {
      icon: TrendingUp,
      title: "80% Time Saved",
      description: "Automate repetitive tasks and focus on what matters most",
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Enterprise-grade reliability with monitoring and alerting built-in",
    },
  ];

  const faqs = [
    {
      question: "What can be automated?",
      answer: "Virtually anything: data entry, email workflows, report generation, customer onboarding, inventory management, and more.",
    },
    {
      question: "How long does implementation take?",
      answer: "Simple automations: 1-2 weeks. Complex enterprise workflows: 6-12 weeks depending on scope.",
    },
    {
      question: "What platforms do you integrate with?",
      answer: "We integrate with Slack, Salesforce, HubSpot, Shopify, Google Workspace, and thousands of other platforms via API.",
    },
    {
      question: "Do you provide maintenance?",
      answer: "Yes, all automations include monitoring and ongoing support to ensure they continue running smoothly.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">AI Automation</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Automate Ops with Resilient Workflows
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deploy intelligent automation that saves time, reduces errors, and scales effortlessly
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
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
            <div className="space-y-4">
              {[
                "Process analysis & mapping",
                "Custom workflow design",
                "AI-powered decision making",
                "Multi-platform integrations",
                "Real-time monitoring & alerts",
                "Error handling & recovery",
                "Scalable infrastructure",
                "Comprehensive documentation",
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
                  <CardDescription>Single workflows</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $50K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Process automation</li>
                    <li>✓ Basic integrations</li>
                    <li>✓ Monitoring included</li>
                    <li>✓ 6 months support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Enterprise</Badge>
                  <CardTitle>Custom</CardTitle>
                  <CardDescription>Complex automation</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $100K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Full ecosystem</li>
                    <li>✓ Advanced AI/ML</li>
                    <li>✓ Enterprise integrations</li>
                    <li>✓ 24/7 support</li>
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


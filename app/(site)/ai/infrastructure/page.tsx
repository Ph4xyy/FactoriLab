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
import { ArrowRight, CheckCircle2, Server, Activity, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/cta";

export const metadata: Metadata = getPageSEO(
  "AI Infrastructure",
  "Production-grade AI pipelines, evaluations, and observability platforms"
);

export default function AIInfrastructurePage() {
  const features = [
    {
      icon: Server,
      title: "Edge Deployed",
      description: "Global infrastructure for low-latency AI inference at scale",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Comprehensive observability with alerts and performance dashboards",
    },
    {
      icon: Shield,
      title: "99.9% Uptime",
      description: "Enterprise-grade reliability with automatic failover and redundancy",
    },
    {
      icon: Zap,
      title: "10x Throughput",
      description: "Optimized pipelines that handle massive scale efficiently",
    },
  ];

  const faqs = [
    {
      question: "What infrastructure components are included?",
      answer: "Model serving, vector databases, evaluation frameworks, monitoring systems, load balancing, and auto-scaling.",
    },
    {
      question: "Which cloud providers do you support?",
      answer: "AWS, GCP, Azure, and Vercel. We'll design for multi-cloud or hybrid deployments.",
    },
    {
      question: "How do you handle model versioning?",
      answer: "We implement proper MLops pipelines with version control, A/B testing, and gradual rollouts.",
    },
    {
      question: "What about compliance and security?",
      answer: "All infrastructure is built with SOC2, GDPR, and HIPAA compliance in mind with encryption at rest and in transit.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">AI Infrastructure</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Production-Grade AI Pipelines
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scalable infrastructure for deploying, monitoring, and optimizing AI at scale
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
                "Infrastructure architecture design",
                "Model serving & deployment",
                "Vector database setup",
                "Monitoring & alerting systems",
                "Evaluation frameworks",
                "Load balancing & auto-scaling",
                "Disaster recovery plans",
                "24/7 operational support",
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
                  <CardTitle>Standard Platform</CardTitle>
                  <CardDescription>Single-region deployment</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $100K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Core infrastructure</li>
                    <li>✓ Monitoring included</li>
                    <li>✓ Basic scaling</li>
                    <li>✓ 6 months support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Enterprise</Badge>
                  <CardTitle>Global Platform</CardTitle>
                  <CardDescription>Multi-region deployment</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $250K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Full ecosystem</li>
                    <li>✓ Advanced monitoring</li>
                    <li>✓ Global edge deployment</li>
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


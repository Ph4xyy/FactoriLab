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
import { ArrowRight, CheckCircle2, Brain, Target, BarChart3, Rocket } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/cta";

export const metadata: Metadata = getPageSEO(
  "AI Agent Development",
  "Deploy custom AI agents that actually move metrics and drive business results"
);

export default function AIAgentPage() {
  const features = [
    {
      icon: Brain,
      title: "Goal-Driven Agents",
      description: "Intelligent agents that understand business objectives and act autonomously",
    },
    {
      icon: Target,
      title: "Context-Aware",
      description: "Agents that understand context and make intelligent decisions",
    },
    {
      icon: BarChart3,
      title: "Metrics-Focused",
      description: "Track and optimize for real business KPIs, not just AI metrics",
    },
    {
      icon: Rocket,
      title: "Production Ready",
      description: "Deploy agents that scale, learn, and improve over time",
    },
  ];

  const faqs = [
    {
      question: "What types of agents can you build?",
      answer: "Customer support bots, sales assistants, content generators, data analysts, automation orchestrators, and custom agents for any use case.",
    },
    {
      question: "How do you ensure agents are accurate?",
      answer: "We implement rigorous testing, human-in-the-loop validation, and continuous monitoring to ensure high accuracy and safety.",
    },
    {
      question: "Can agents integrate with our systems?",
      answer: "Absolutely. Our agents can integrate with CRM, databases, APIs, and any business system through secure connections.",
    },
    {
      question: "How are agents trained?",
      answer: "We use prompt engineering, fine-tuning, and RAG techniques with your specific data to create domain-expert agents.",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">AI Agent Development</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Deploy Agents That Move Metrics
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Intelligent agents that understand your business and drive measurable results
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
                "Custom agent architecture design",
                "Advanced prompt engineering",
                "RAG system development",
                "Real-time monitoring & analytics",
                "Multi-platform deployment",
                "Human-in-the-loop workflows",
                "Continuous improvement pipeline",
                "Complete documentation",
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
                  <CardTitle>Standard Agent</CardTitle>
                  <CardDescription>Single-use case</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $75K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Custom agent design</li>
                    <li>✓ Training & fine-tuning</li>
                    <li>✓ Basic integrations</li>
                    <li>✓ 6 months support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Enterprise</Badge>
                  <CardTitle>Agent Ecosystem</CardTitle>
                  <CardDescription>Multiple agents</CardDescription>
                  <div className="text-4xl font-bold mt-4">
                    $150K+
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Multi-agent orchestration</li>
                    <li>✓ Advanced RAG system</li>
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


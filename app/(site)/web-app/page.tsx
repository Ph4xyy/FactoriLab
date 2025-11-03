"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Code, Database, Users, Lock, Rocket, Zap, Shield, Layers } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/cta";

export default function WebAppPage() {
  const features = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Maintainable, scalable codebases following industry best practices",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Database,
      title: "Real-time Updates",
      description: "Live data synchronization with WebSockets and edge technologies",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Complete authentication, authorization, and user dashboards",
      gradient: "from-pink-500/20 to-purple-500/20",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "End-to-end encryption, API security, and compliance-ready",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  const techStack = [
    { name: "Next.js", description: "React framework" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Tailwind CSS", description: "Modern styling" },
    { name: "Prisma", description: "Database ORM" },
    { name: "tRPC", description: "Type-safe APIs" },
    { name: "Vercel", description: "Edge deployment" },
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
    {
      question: "What&apos;s the typical timeline?",
      answer: "Standard apps take 2-4 months, while enterprise solutions can take 4-8 months depending on complexity.",
    },
    {
      question: "Do you offer hosting?",
      answer: "Yes, we handle deployment and hosting on Vercel or your preferred cloud provider.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <Badge className="mb-6 glass border-primary/30 text-primary hover:bg-primary/10 transition-colors">
                <Rocket className="w-3 h-3 mr-2" />
                Web App Development
              </Badge>
            </motion.div>
            
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight"
              variants={itemVariants}
            >
              Build{" "}
              <span className="gradient-text">Scalable Web Apps</span>
              <br />
              That Your Users Love
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-12 text-balance"
              variants={itemVariants}
            >
              Production-ready applications with{" "}
              <span className="text-primary">clean architecture</span>,{" "}
              <span className="text-accent">modern tech stack</span>, and{" "}
              <span className="text-purple-400">gorgeous UI/UX</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="group text-lg px-8 py-6 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 glow hover:scale-105 transition-transform"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group text-lg px-8 py-6 h-auto glass border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:scale-105 transition-transform"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="relative mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              Everything You Need
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <Card className="h-full glass border-white/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardHeader className="relative z-10">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl glass border border-white/10 mb-4 group-hover:border-primary/50 transition-colors">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-white/60 group-hover:text-white/80 transition-colors">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              What&apos;s Included
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Custom UI/UX design",
                "Full-stack development",
                "Real-time features & WebSockets",
                "User authentication & authorization",
                "Database design & optimization",
                "API development & integration",
                "Testing & quality assurance",
                "Deployment & CI/CD",
                "Performance optimization",
                "Security auditing",
                "Documentation & training",
                "Ongoing support",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 10 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              Built With Modern Tools
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl glass border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mb-3 group-hover:scale-110 transition-transform">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                  <p className="text-sm text-white/60">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              Pricing That Scales
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full glass border-white/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">Standard</CardTitle>
                    <CardDescription className="text-white/70">
                      For growing businesses
                    </CardDescription>
                    <div className="mt-6">
                      <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        $50K-$100K
                      </div>
                      <p className="text-sm text-white/60 mt-2">One-time payment</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Core features & UI",
                        "User management",
                        "Basic integrations",
                        "API development",
                        "Database setup",
                        "3 months support",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full glass border-primary/50 shadow-[0_0_30px_rgba(108,92,231,0.3)] relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 border-0">
                      Popular
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                    <CardDescription className="text-white/70">
                      Tailored solutions
                    </CardDescription>
                    <div className="mt-6">
                      <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        $100K+
                      </div>
                      <p className="text-sm text-white/60 mt-2">Custom pricing</p>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {[
                        "All premium features",
                        "Custom architecture",
                        "Advanced integrations",
                        "Dedicated team",
                        "Scalable infrastructure",
                        "12 months support",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-white/60 mb-6">
                Need a custom solution?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Let&apos;s talk
                </Link>
              </p>
              <Button
                asChild
                size="lg"
                className="group text-lg px-8 py-6 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 glow hover:scale-105 transition-transform"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass border-white/10 rounded-xl px-4 hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left py-6">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

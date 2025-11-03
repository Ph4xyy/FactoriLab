"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Globe, Zap, BarChart3, Shield, Sparkles, Check, Code2, Smartphone, Rocket } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/cta";

export default function WebsitePage() {
  const features = [
    {
      icon: Globe,
      title: "Pixel-Perfect Design",
      description: "Custom designs that match your brand and convert visitors into customers",
      gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "95+ Lighthouse scores with edge deployment for global speed",
      gradient: "from-cyan-600/20 to-blue-600/20",
    },
    {
      icon: BarChart3,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to rank higher in search results",
      gradient: "from-green-600/20 to-emerald-600/20",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      gradient: "from-red-600/20 to-orange-600/20",
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

  const benefits = [
    { icon: Code2, text: "Modern tech stack (Next.js, React, TypeScript)" },
    { icon: Smartphone, text: "Fully responsive across all devices" },
    { icon: BarChart3, text: "Built-in analytics & conversion tracking" },
    { icon: Rocket, text: "Global edge deployment with CDN" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-white/80">Website Development</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Pixel-Perfect{" "}
              <span className="gradient-text">Websites</span>
              <br />That Convert
            </h1>

            <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-12">
              Craft stunning websites with{" "}
              <span className="text-purple-400">world-class performance</span>,{" "}
              <span className="text-cyan-400">SEO optimization</span>, and{" "}
              <span className="text-pink-400">conversion-focused design</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 glow hover:scale-105 transition-transform"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 h-auto glass border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:scale-105 transition-transform"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full glass border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="p-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="glass rounded-3xl p-12 border border-white/10">
              <h2 className="text-4xl font-bold mb-12 text-center">
                What&apos;s <span className="gradient-text">Included</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
                {[
                  "Performance optimization (95+ Lighthouse)",
                  "SEO optimization & metadata",
                  "Contact forms & CTAs",
                  "Ongoing support & updates",
                ].map((item, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass border-white/10 hover:border-primary/50 transition-all">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <p className="text-white/60 mb-6">Perfect for small businesses</p>
                  <div className="text-5xl font-bold gradient-text mb-8">
                    $10K - $25K
                  </div>
                  <ul className="space-y-3 mb-8">
                    {["Up to 5 pages", "Basic SEO", "Contact form", "Mobile responsive"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full glass border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </Card>

              <Card className="glass border-primary/50 hover:border-primary transition-all relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
                    Popular
                  </Badge>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-white/60 mb-6">For growing companies</p>
                  <div className="text-5xl font-bold gradient-text mb-8">
                    $25K+
                  </div>
                  <ul className="space-y-3 mb-8">
                    {["Unlimited pages", "Advanced SEO", "Custom integrations", "Dedicated support"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 glow"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-2xl border-white/10 hover:border-primary/50 transition-colors px-6"
                >
                  <AccordionTrigger className="text-white hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      <CTA />
    </div>
  );
}

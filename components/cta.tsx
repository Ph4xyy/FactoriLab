"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-white/80">Ready to Transform Your Business?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Ready to build something{" "}
            <span className="gradient-text">legendary?</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help bring your vision to life with{" "}
            <span className="text-primary">cutting-edge technology</span> and{" "}
            <span className="text-accent">exceptional design</span>
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            whileHover={{ scale: 1.02 }}
          >
            <Button
              asChild
              size="lg"
              className="group text-lg px-10 py-7 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 glow hover:scale-105 transition-transform"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
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
          </motion.div>

          {/* Stats below CTA */}
          <div className="grid grid-cols-3 gap-8 pt-20">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "24/7", label: "Support" },
              { value: "5★", label: "Client Rating" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

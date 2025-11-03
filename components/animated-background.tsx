"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  if (prefersReducedMotion) {
    return (
      <div
        className={cn(
          "fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0a0f] to-[#0a0a0f]",
          className
        )}
      />
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a0a0f] to-[#0a0a0f]" />
      
      {/* Large floating orbs with glow */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-[200px] float" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-[200px] float" style={{ animationDelay: '3s', animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/15 to-cyan-600/15 rounded-full blur-[250px] float animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '10s' }} />
      
      {/* Animated gradient waves */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(108, 92, 231, 0.15), transparent 60%)",
            "radial-gradient(circle at 60% 40%, rgba(0, 229, 255, 0.12), transparent 60%)",
            "radial-gradient(circle at 40% 70%, rgba(236, 72, 153, 0.15), transparent 60%)",
            "radial-gradient(circle at 20% 30%, rgba(108, 92, 231, 0.15), transparent 60%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.12), transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(108, 92, 231, 0.15), transparent 60%)",
            "radial-gradient(circle at 70% 20%, rgba(236, 72, 153, 0.12), transparent 60%)",
            "radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.12), transparent 60%)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.3))",
        }}
      />

      {/* Soft grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

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
          "fixed inset-0 bg-black",
          className
        )}
      />
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-black">
      {/* Floating particles with logo color */}
      {[...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 60 + 40, // 40-100 seconds for very slow movement
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 3 + 2 + "px", // 2-5px
            height: Math.random() * 3 + 2 + "px", // 2-5px
            backgroundColor: "#6C5CE7", // Logo color
            boxShadow: "0 0 6px rgba(108, 92, 231, 0.8), 0 0 12px rgba(108, 92, 231, 0.4)",
          }}
        />
      ))}
    </div>
  );
}

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
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 60 + 40, // 40-100 seconds for very slow movement
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            backgroundColor: "#6C5CE7", // Logo color
            boxShadow: "0 0 10px rgba(108, 92, 231, 0.5), 0 0 20px rgba(108, 92, 231, 0.3)",
          }}
        />
      ))}
    </div>
  );
}

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
      {[...Array(120)].map((_, i) => {
        const randomX1 = Math.random() * 100;
        const randomY1 = Math.random() * 100;
        const randomX2 = Math.random() * 100;
        const randomY2 = Math.random() * 100;
        const randomX3 = Math.random() * 100;
        const randomY3 = Math.random() * 100;
        const randomSize = Math.random() * 3 + 2;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              x: randomX1 + "%",
              y: randomY1 + "%",
              opacity: 0,
            }}
            animate={{
              x: [randomX1 + "%", randomX2 + "%", randomX3 + "%"],
              y: [randomY1 + "%", randomY2 + "%", randomY3 + "%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 60 + 40, // 40-100 seconds for very slow movement
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            style={{
              width: randomSize + "px", // 2-5px
              height: randomSize + "px", // 2-5px
              backgroundColor: "#6C5CE7", // Logo color
              boxShadow: "0 0 6px rgba(108, 92, 231, 0.8), 0 0 12px rgba(108, 92, 231, 0.4)",
            }}
          />
        );
      })}
    </div>
  );
}

"use client";

import * as React from "react";
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
    <div className={cn("fixed inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {/* Video background covering entire site */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/19289-300877402.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability across all sections */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

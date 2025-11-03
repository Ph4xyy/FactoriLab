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
          "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20",
          className
        )}
      />
    );
  }

  return (
    <>
      {/* Main animated gradient with mesh effect */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(147, 51, 234, 0.4), transparent 50%),
            radial-gradient(at 100% 0%, rgba(219, 39, 119, 0.4), transparent 50%),
            radial-gradient(at 50% 50%, rgba(14, 165, 233, 0.3), transparent 50%),
            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.4), transparent 50%)
          `,
        }}
      />
      
      {/* Animated mesh gradient overlay */}
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          backgroundImage: "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(219, 39, 119, 0.3), rgba(14, 165, 233, 0.3), rgba(59, 130, 246, 0.3))",
          backgroundSize: "400% 400%",
        }}
      />
      
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large floating orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl float animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl float animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/15 to-cyan-600/15 rounded-full blur-3xl float animate-pulse" style={{ animationDelay: '4s' }} />
    </>
  );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  React.useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

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
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none bg-black">
      {/* Gradient background layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(108, 92, 231, 0.4), transparent 70%),
            radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.3), transparent 70%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3), transparent 70%)
          `,
        }}
      />
      
      {/* Black overlay with flashlights */
      <div
        className="absolute inset-0 bg-black"
        style={{
          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, transparent 20%, black 60%)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, transparent 20%, black 60%)`,
        }}
      />
    </div>
  );
}

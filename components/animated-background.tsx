"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  React.useEffect(() => {
    if (videoRef.current && !prefersReducedMotion) {
      // Force video to load and play
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video autoplay prevented:", error);
        });
      }
    }
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
    <>
      {/* Video background covering entire site - fixed position directly */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
        onLoadedData={() => {
          console.log("Video loaded successfully");
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
          }
        }}
        onError={(e) => {
          console.error("Video loading error:", e);
        }}
        onCanPlay={() => {
          console.log("Video can play");
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
          }
        }}
      >
        <source src="/19289-300877402.mp4" type="video/mp4" />
        <source src="/14081587_1920_1080_60fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability across all sections */}
      <div className="fixed inset-0 bg-black/30 pointer-events-none" style={{ zIndex: -1 }} />
    </>
  );
}

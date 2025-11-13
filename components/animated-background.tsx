"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
    }
  }, []);

  React.useEffect(() => {
    if (mounted && videoRef.current && !prefersReducedMotion) {
      // Force video to load and play
      console.log("Attempting to load video...");
      videoRef.current.load();
      
      // Wait a bit then try to play
      setTimeout(() => {
        if (videoRef.current) {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("Video is playing!");
              })
              .catch((error) => {
                console.error("Video autoplay prevented:", error);
              });
          }
        }
      }, 100);
    }
  }, [mounted, prefersReducedMotion]);

  // Return a single div wrapper to avoid hydration issues
  if (!mounted) {
    return <div className={cn("fixed inset-0 bg-black -z-10", className)} />;
  }

  return (
    <div 
      className={cn("fixed inset-0", className)}
      style={{ zIndex: -1, pointerEvents: 'none' }}
    >
      {!prefersReducedMotion ? (
        <>
          {/* Video background covering entire site */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-screen h-screen object-cover"
            style={{ 
              width: '100vw',
              height: '100vh',
              objectFit: 'cover'
            }}
            onLoadedData={() => {
              console.log("✅ Video loaded successfully");
              if (videoRef.current) {
                videoRef.current.play().catch(console.error);
              }
            }}
            onError={(e) => {
              console.error("❌ Video loading error:", e);
              console.error("Video src:", videoRef.current?.src);
              console.error("Video currentSrc:", videoRef.current?.currentSrc);
            }}
            onCanPlay={() => {
              console.log("✅ Video can play");
              if (videoRef.current) {
                videoRef.current.play().catch(console.error);
              }
            }}
            onPlay={() => {
              console.log("▶️ Video is playing!");
            }}
          >
            <source src="/19289-300877402.mp4" type="video/mp4" />
            <source src="/14081587_1920_1080_60fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text readability across all sections - reduced opacity */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </>
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}
    </div>
  );
}

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
    console.log("🎬 AnimatedBackground component mounted");
    setMounted(true);
    // Always allow video background, even with reduced motion preference
    // The video is muted and non-intrusive, so it's acceptable
    setPrefersReducedMotion(false);
  }, []);

  React.useEffect(() => {
    console.log("🎬 Video effect triggered - mounted:", mounted, "prefersReducedMotion:", prefersReducedMotion);
    if (mounted && !prefersReducedMotion) {
      console.log("🎬 Video ref current:", videoRef.current);
      if (videoRef.current) {
        // Force video to load and play
        console.log("🎬 Attempting to load video...");
        videoRef.current.load();
        
        // Wait a bit then try to play
        setTimeout(() => {
          if (videoRef.current) {
            console.log("🎬 Attempting to play video...");
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log("✅ Video is playing!");
                })
                .catch((error) => {
                  console.error("❌ Video autoplay prevented:", error);
                });
            }
          } else {
            console.error("❌ Video ref is null after timeout");
          }
        }, 100);
      } else {
        console.error("❌ Video ref is null");
      }
    } else {
      console.log("🎬 Video not loading - mounted:", mounted, "prefersReducedMotion:", prefersReducedMotion);
    }
  }, [mounted, prefersReducedMotion]);

  // Return a single div wrapper to avoid hydration issues
  console.log("🎬 Rendering AnimatedBackground - mounted:", mounted, "prefersReducedMotion:", prefersReducedMotion);
  
  if (!mounted) {
    console.log("🎬 Returning black background (not mounted yet)");
    return <div className={cn("fixed inset-0 bg-black -z-10", className)} />;
  }

  return (
    <div 
      className={cn("fixed inset-0", className)}
      style={{ zIndex: -1, pointerEvents: 'none' }}
    >
      {/* Video background covering entire site - always render */}
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
              objectFit: 'cover',
              backgroundColor: '#000'
            }}
            onLoadStart={() => {
              console.log("🎬 Video load started");
            }}
            onLoadedMetadata={() => {
              console.log("✅ Video metadata loaded");
            }}
            onLoadedData={() => {
              console.log("✅ Video loaded successfully");
              if (videoRef.current) {
                videoRef.current.play().catch(console.error);
              }
            }}
            onError={(e) => {
              console.error("❌ Video loading error:", e);
              console.error("Video element:", videoRef.current);
              console.error("Video src:", videoRef.current?.src);
              console.error("Video currentSrc:", videoRef.current?.currentSrc);
              console.error("Video networkState:", videoRef.current?.networkState);
              console.error("Video readyState:", videoRef.current?.readyState);
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
            onPause={() => {
              console.log("⏸️ Video paused");
            }}
          >
            <source src="/19289-300877402.mp4" type="video/mp4" />
            <source src="/14081587_1920_1080_60fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text readability across all sections - reduced opacity */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
}

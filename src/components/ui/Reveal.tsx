"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface RevealProps {
  children: React.ReactNode;
  width?: "w-fit" | "w-full";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Reveal({
  children,
  width = "w-full",
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const yOffset = direction === "up" ? 60 : direction === "down" ? -60 : 0;
      const xOffset = direction === "left" ? 60 : direction === "right" ? -60 : 0;

      // Set initial state immediately to avoid FOUC
      gsap.set(containerRef.current, { autoAlpha: 0, y: yOffset, x: xOffset });

      gsap.to(containerRef.current, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Trigger when top of element hits 85% of viewport height
          toggleActions: "play none none none", // Play once, don't reverse
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`${width} ${className} invisible`}>
      {children}
    </div>
  );
}

"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Hook that stagger-animates all children matching `[data-reveal]`
 * inside a container when it scrolls into view.
 *
 * Best-practice highlights:
 * - Uses `autoAlpha` instead of `opacity` for GPU-composited layer
 * - Uses `will-change: transform` via GSAP internally
 * - Single ScrollTrigger per section (not per element)
 * - Stagger keeps frame budget low even with many elements
 */
export function useScrollReveal(stagger = 0.1, start = "top 80%") {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll("[data-reveal]");
      if (!elements.length) return;

      // Set initial hidden state immediately
      gsap.set(elements, { autoAlpha: 0, y: 40 });

      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: start,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}

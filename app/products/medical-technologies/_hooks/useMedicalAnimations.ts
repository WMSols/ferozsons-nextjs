"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export function useMedicalAnimations() {
  useEffect(() => {
    // Respect user preferences for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- Initialize Lenis ---
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    if (prefersReducedMotion) {
      return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    // --- GSAP Animations ---
    const ctx = gsap.context(() => {
      // --- Hero Animations ---
      const heroTl = gsap.timeline();
      
      heroTl.from(".hero-title span span", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      })
      .from(".hero-subtext", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.6");

      // Scroll-driven sphere movement/zoom
      gsap.to(".hero-sphere", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        scale: 1.2,
        y: "20%",
        opacity: 0.8,
      });

      // --- Section Reveals ---
      const sections = document.querySelectorAll(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power2.out",
        });
      });

      // --- Staggered Reveals (Cards/Features) ---
      const staggerContainers = document.querySelectorAll(".stagger-container");
      staggerContainers.forEach((container) => {
        const items = container.children;
        gsap.from(items, {
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        });
      });
    });

    return () => {
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}

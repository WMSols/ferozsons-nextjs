"use client";

import type { RefObject } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { FadeInSection } from "./helpers/FadeInSection";

export interface ClosingCtaSectionProps {
  ctaRef: RefObject<HTMLElement | null>;
  ctaBgY: MotionValue<string>;
}

export function ClosingCtaSection({ ctaRef, ctaBgY }: ClosingCtaSectionProps) {
  return (
    <section
      id="contact"
      ref={ctaRef}
      className="relative py-32 overflow-hidden text-center"
      style={{ background: "#0a1628" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff18 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <motion.div
        style={{ y: ctaBgY }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#4a90d9] mb-6">
            Ready to Collaborate?
          </p>
          <h2
            className="font-display text-white mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Partner with <span style={{ color: "#4a90d9" }}>Ferozsons</span>
          </h2>
          <p
            className="font-body text-[#a8c4e0] mb-10 leading-relaxed mx-auto max-w-xl"
            style={{ fontSize: "1.05rem", fontWeight: 300 }}
          >
            Leverage our decades of pharmaceutical manufacturing expertise,
            state-of-the-art cGMP facilities, and global quality frameworks for
            your contract manufacturing needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="mailto:info@ferozsons.com.pk"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(74,144,217,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="font-body px-10 py-4 rounded-full text-white text-base cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                border: "1px solid #3b82f6",
                fontWeight: 400,
              }}
            >
              Contact Us →
            </motion.a>
          </div>
        </FadeInSection>
      </div>

      <div className="relative z-10 mt-24 pt-8 border-t border-white/10 max-w-7xl mx-auto px-6">
        <p
          className="font-body text-[#4a6b8a] text-xs"
          style={{ fontWeight: 300 }}
        >
          © {new Date().getFullYear()} Ferozsons Laboratories Limited. All
          rights reserved.
        </p>
      </div>
    </section>
  );
}

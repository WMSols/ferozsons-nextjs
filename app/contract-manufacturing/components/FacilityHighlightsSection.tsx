"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./helpers/FadeInSection";
import type { FacilityCard } from "../data/types";

export interface FacilityHighlightsSectionProps {
  cards: FacilityCard[];
}

export function FacilityHighlightsSection({
  cards,
}: FacilityHighlightsSectionProps) {
  return (
    <section
      id="capabilities"
      className="relative py-28 overflow-hidden"
      style={{ background: "#050d1a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,155,220,0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(56,115,210,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#4a90d9] mb-4 text-center">
            Infrastructure &amp; Capability
          </p>
          <h2
            className="font-display text-white text-center mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Facility Highlights
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.5)" }}
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(99,155,220,0.15)",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 20,
                  background:
                    "linear-gradient(135deg, rgba(56,130,246,0.07) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {card.icon}
              </div>
              <h3
                className="font-display text-white mb-3"
                style={{ fontSize: "1.1rem", fontWeight: 700 }}
              >
                {card.title}
              </h3>
              <p
                className="font-body leading-relaxed text-sm"
                style={{ color: "#94a3b8", fontWeight: 300 }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

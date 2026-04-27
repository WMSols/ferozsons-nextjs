"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./helpers/FadeInSection";
import { AnimatedCounter } from "./helpers/AnimatedCounter";
import type { StatCard } from "../data/types";

export interface ManufacturingStatsSectionProps {
  stats: StatCard[];
}

export function ManufacturingStatsSection({
  stats,
}: ManufacturingStatsSectionProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "#071020",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 18px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -180,
          right: -100,
          width: 500,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#60a5fa" }}
            >
              By The Numbers
            </p>
            <h2
              className="font-display mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "#ffffff",
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Manufacturing{" "}
              <span style={{ color: "#60a5fa" }}>excellence,</span>
              <br />
              measured in milestones.
            </h2>
            <p
              className="font-body text-xs mt-8"
              style={{ color: "#64748b", fontWeight: 300 }}
            >
              Data reflects operational milestones as of 2025.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  position: "relative",
                  borderRadius: 16,
                  padding: "24px 22px",
                  overflow: "hidden",
                  background: stat.accent
                    ? "rgba(59,130,246,0.13)"
                    : "rgba(255,255,255,0.04)",
                  border: stat.accent
                    ? "1px solid rgba(59,130,246,0.3)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div style={{ position: "absolute", right: 14, top: 14 }}>
                  {stat.icon}
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 800,
                    color: stat.accent ? "#60a5fa" : "#ffffff",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  className="font-body text-xs leading-snug"
                  style={{ color: "#94a3b8", fontWeight: 400 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

export default function YearHeader({
  year,
  compact = false,
}: {
  year: number;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: compact ? 14 : 22,
        padding: compact ? "32px 0 20px" : "56px 0 0",
      }}
    >
      <h2
        style={{
          fontSize: compact ? 40 : "clamp(44px, 6.5vw, 72px)",
          fontWeight: 700,
          color: "#0057b8",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          margin: 0,
          lineHeight: 1,
          letterSpacing: "-0.025em",
          flexShrink: 0,
        }}
      >
        {year}
      </h2>
      <div style={{ flex: 1, height: 2, background: "#0057b8" }} />
    </motion.div>
  );
}

"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { CATEGORY_META } from "../data/categories";
import type { Milestone } from "../data/history";

import CategoryIcon from "./CategoryIcon";
import MilestoneImage from "./MilestoneImage";
import TimelineLink from "./TimelineLink";

export default function MobileMilestoneCard({
  milestone,
  isLast,
}: {
  milestone: Milestone;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const cfg = CATEGORY_META[milestone.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        paddingBottom: 36,
        borderBottom: isLast ? "none" : "1px solid #ebe8e2",
        marginBottom: isLast ? 0 : 4,
      }}
    >
      {milestone.image && (
        <div style={{ marginBottom: 18 }}>
          <MilestoneImage
            src={milestone.image}
            alt={milestone.imageAlt ?? milestone.title}
            catColor={cfg.color}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: cfg.bg,
            color: cfg.color,
            flexShrink: 0,
          }}
        >
          <CategoryIcon category={milestone.category} />
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#666360",
          }}
        >
          {milestone.date}&nbsp;|&nbsp;{cfg.label}
        </span>
      </div>

      <h3
        style={{
          fontSize: 19,
          fontWeight: 400,
          lineHeight: 1.3,
          color: "#071d49",
          margin: "0 0 12px",
          fontFamily: "'Georgia', serif",
        }}
      >
        {milestone.title}
      </h3>

      {milestone.body && (
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.68,
            color: "#454240",
            margin: "0 0 14px",
          }}
        >
          {milestone.body}
        </p>
      )}

      {milestone.link && (
        <TimelineLink
          href={milestone.link.href}
          label={milestone.link.label}
          compact
        />
      )}

      {milestone.disclaimer && (
        <p
          style={{
            fontSize: 11,
            color: "#9a9896",
            margin: milestone.link ? "10px 0 0" : "0",
            fontStyle: "italic",
          }}
        >
          *For Investor and Media Use Only – Not For Promotional Use
        </p>
      )}
    </motion.div>
  );
}

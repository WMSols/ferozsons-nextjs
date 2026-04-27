"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { CATEGORY_META } from "../data/categories";
import type { Milestone } from "../data/history";

import CategoryIcon from "./CategoryIcon";
import MilestoneImage from "./MilestoneImage";
import TimelineLink from "./TimelineLink";

export default function MilestoneRow({
  milestone,
  isLast,
}: {
  milestone: Milestone;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const cfg = CATEGORY_META[milestone.category];
  const imgLeft = milestone.imagePosition === "left";
  console.log(milestone.image);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "clamp(40px, 5.5vw, 88px)",
        alignItems: "center",
        padding: "52px 0",
        borderBottom: isLast ? "none" : "1px solid #ebe8e2",
      }}
    >
      {imgLeft && (
        <motion.div
          initial={{ opacity: 0, x: -52 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <MilestoneImage
            src={milestone.image}
            alt={milestone.imageAlt ?? milestone.title}
            catColor={cfg.color}
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, x: imgLeft ? 52 : -52 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
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
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#666360",
            }}
          >
            {milestone.date}&nbsp;&nbsp;|&nbsp;&nbsp;{cfg.label}
          </span>
        </div>

        <h3
          style={{
            fontSize: "clamp(20px, 2.4vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.28,
            color: "#071d49",
            margin: "0 0 18px",
            fontFamily: "'Georgia', 'Times New Roman', serif",
          }}
        >
          {milestone.title}
        </h3>

        {milestone.body && (
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.72,
              color: "#454240",
              margin: "0 0 20px",
            }}
          >
            {milestone.body}
          </p>
        )}

        {milestone.link && (
          <TimelineLink
            href={milestone.link.href}
            label={milestone.link.label}
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

      {!imgLeft && (
        <motion.div
          initial={{ opacity: 0, x: 52 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <MilestoneImage
            src={milestone.image}
            alt={milestone.imageAlt ?? milestone.title}
            catColor={cfg.color}
          />
        </motion.div>
      )}
    </div>
  );
}

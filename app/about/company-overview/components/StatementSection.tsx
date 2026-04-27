"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AccentWord: React.FC<{ text: string; delay: number }> = ({
  text,
  delay,
}) => (
  <motion.span
    className="inline-block mx-1 my-0.5"
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-15% 0px" }}
    transition={{ duration: 0.5, delay }}
    style={{
      background: "#ffffff",
      borderRadius: "10px",
      padding: "1px 12px 3px 12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.13)",
      whiteSpace: "nowrap", // prevents the word itself from breaking
      verticalAlign: "middle", // aligns badge nicely with surrounding text
    }}
  >
    <span
      style={{
        background: "linear-gradient(90deg, #1a7fc1 0%, #7ec8e3 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: 700,
      }}
    >
      {text}
    </span>
  </motion.span>
);

const StatementSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <motion.div
        style={{ y }}
        className="max-w-4xl mx-auto px-8 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-[#1a56db]/30" />
          <span className="text-[#1a56db] text-xs tracking-[0.4em] uppercase font-semibold">
            Our Mission
          </span>
          <div className="h-px w-12 bg-[#1a56db]/30" />
        </div>

        <p
          className="font-kaisei font-bold text-center text-gray-900 px-4 sm:px-8 md:px-0"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 2.15rem)",
            lineHeight: 2, // slightly more room for badges on small screens
            maxWidth: "72ch",
            margin: "0 auto",
          }}
        >
          Our legacy is grounded in
          <AccentWord text="integrity" delay={0.1} />
          and reflected in the high standards we uphold across our work. We
          deliver
          <AccentWord text="quality" delay={0.2} />
          healthcare solutions that improve lives, guided by a
          <AccentWord text="patient-first" delay={0.3} />
          approach and a strong sense of responsibility to the communities we
          serve.
        </p>
      </motion.div>
    </section>
  );
};

export default StatementSection;

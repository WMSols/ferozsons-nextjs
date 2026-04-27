"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

export default function FooterCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#071d49",
        color: "#fff",
        padding: "80px 40px",
        textAlign: "center",
        marginTop: 48,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700,
          fontFamily: "'Georgia', serif",
          margin: "0 0 14px",
          letterSpacing: "-0.01em",
        }}
      >
        Our Commitment.
      </h2>
      <p
        style={{
          fontSize: 17,
          color: "#a4c0e0",
          maxWidth: 460,
          margin: "0 auto 40px",
          lineHeight: 1.65,
        }}
      >
        Learn more about our commitment to advancing patient care and supporting
        the communities we serve.
      </p>
      <div
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            label: "Our Partnerships",
            href: "/partnerships",
          },
          {
            label: "Our Purpose",
            href: "/about/purpose",
          },
          {
            label: "Our Responsibility",
            href: "/csr",
          },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: 3,
              color: "#fff",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.1)";
              el.style.borderColor = "rgba(255,255,255,0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.22)";
            }}
          >
            {link.label}
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

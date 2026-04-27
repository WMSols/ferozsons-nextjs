"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "./helpers/FadeInSection";

export function StatementSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#f5f3ef" }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(circle, #1d4ed8, transparent)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeInSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#4a90d9] mb-6">
              Our Commitment
            </p>
            <h2
              className="font-display leading-tight"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                color: "#0a1628",
                fontWeight: 700,
              }}
            >
              Contract
              <br />
              <span style={{ color: "#1d4ed8", fontStyle: "italic" }}>
                Manufacturing
              </span>
            </h2>
          
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div
              className="rounded-3xl p-10 shadow-2xl"
              style={{
                background:
                  "linear-gradient(140deg, #2563eb 0%, #1a3a8f 60%, #0f2460 100%)",
              }}
            >
              <p
                className="font-body text-white leading-[1.75] text-center"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  fontWeight: 300,
                }}
              >
                Our facility integrates{" "}
                <strong className="font-bold">
                  advanced manufacturing systems
                </strong>
                ,{" "}
                <span style={{ color: "#93c5fd" }}>modern quality control</span>{" "}
                laboratories, and{" "}
                <strong className="font-bold">
                  internationally aligned operational standards
                </strong>
                , enabling the production of{" "}
                <strong className="font-bold">
                  high-quality pharmaceutical formulations
                </strong>{" "}
                for both domestic and international markets.
              </p>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p
                  className="font-body text-[#a8c4e0] text-sm leading-relaxed text-center"
                  style={{ fontWeight: 300 }}
                >
                  Ferozsons Laboratories Limited operates a fully cGMP-compliant
                  manufacturing facility, equipped with modern production and
                  analytical technologies and certified under quality standards.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

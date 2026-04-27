"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { BioCard } from "./types";

const BiopharmaSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const bioCards: BioCard[] = [
    { label: "Founded", value: "2006", sub: "Established with Bagó Group" },
    { label: "Listed on PSX", value: "2024", sub: "Public Market Debut" },
    {
      label: "First in Pakistan",
      value: "cGMP",
      sub: "Biopharma Manufacturing",
    },
    {
      label: "Improving Patient Outcomes",
      value: "Patient Impact",
      sub: "Therapeutic Range",
    },
  ];

  return (
    <section
      id="biopharma"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d2d6b 0%, #1a4db8 50%, #0d3d80 100%)",
      }}
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "35px 35px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, #60a5fa, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, #93c5fd, transparent 60%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-blue-300 text-xs tracking-[0.45em] uppercase font-semibold">
              Biopharmaceuticals
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight mt-4 mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Pioneering Biotech Manufacturing and Expanding Pakistan's
              Pharmaceutical Capabilities
            </h2>
            <p className="text-blue-100/80 leading-relaxed text-lg mb-5">
              In partnership with the{" "}
              <strong className="text-white">Bagó Group of Argentina</strong>,
              in 2006 we established{" "}
              <a
                href="https://bfbio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline underline-offset-2 hover:text-white transition-colors"
              >
                BF Biosciences Limited
              </a>
              , a cGMP-compliant biotechnology facility dedicated exclusively to
              the manufacture of biological products.
            </p>
            <p className="text-blue-100/70 leading-relaxed mb-8">
              In 2024,{" "}
              <a
                href="https://bfbio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline underline-offset-2 hover:text-white transition-colors"
              >
                BF Biosciences Limited
              </a>{" "}
              was successfully listed on the Pakistan Stock Exchange following a
              highly successful IPO. As the{" "}
              <strong className="text-white">
                first and only company in Pakistan
              </strong>{" "}
              to operate a biotech manufacturing facility of this kind, we
              continue to strengthen the country's capabilities in advanced
              biopharmaceutical production.
            </p>
            <motion.a
              href="https://bfbio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#0d2d6b] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-blue-100 transition-colors duration-300 shadow-xl shadow-blue-900/30"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              A Breakthrough in Biotech ↗
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {bioCards.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-blue-300/50 transition-all duration-300 group cursor-default"
                style={{ background: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  scale: 1.03,
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="text-blue-300 text-xs tracking-widest uppercase mb-2">
                  {item.label}
                </div>
                <div
                  className="text-white text-3xl font-black"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {item.value}
                </div>
                <div className="text-blue-200/50 text-xs mt-1">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60 C480 10 960 10 1440 60 L1440 60 L0 60Z"
            fill="#f0f5ff"
          />
        </svg>
      </div>
    </section>
  );
};

export default BiopharmaSection;

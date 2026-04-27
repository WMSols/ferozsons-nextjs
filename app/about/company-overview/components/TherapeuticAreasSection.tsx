"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import type { TherapeuticArea } from "./types";

const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    id: "antiviral",
    title: "Antiviral",
    desc: "Pioneering antiviral treatments, including breakthrough hepatitis C therapies.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <circle
          cx="40"
          cy="40"
          r="16"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="6"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="40"
          y1="20"
          x2="40"
          y2="28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="52"
          x2="40"
          y2="60"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="40"
          x2="28"
          y2="40"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="52"
          y1="40"
          x2="60"
          y2="40"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="40"
          cy="18"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="40"
          cy="62"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="18"
          cy="40"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="62"
          cy="40"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="55"
          cy="55"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="55"
          cy="25"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="25"
          cy="55"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "antibiotics",
    title: "Antibiotics",
    desc: "Broad and targeted antibiotic therapies combating bacterial infections effectively.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <rect
          x="33"
          y="14"
          width="14"
          height="30"
          rx="7"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="40"
          y1="44"
          x2="40"
          y2="62"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="54"
          x2="50"
          y2="54"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="33"
          y1="29"
          x2="47"
          y2="29"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="40" cy="22" r="3" fill="white" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "cough",
    title: "Cough Syrup & Lozenges",
    desc: "Effective respiratory relief formulations for cough, throat, and airway comfort.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M30 18 L28 42 C28 50 34 56 40 56 C46 56 52 50 52 42 L50 18Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="28"
          y1="30"
          x2="52"
          y2="30"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M34 16 C34 13 46 13 46 16"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="56"
          cy="58"
          r="6"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="53"
          y1="58"
          x2="59"
          y2="58"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="56"
          y1="55"
          x2="56"
          y2="61"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "cardiology",
    title: "Cardiology",
    desc: "Heart health solutions built on decades of trusted clinical excellence.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M40 62 C40 62 16 48 16 32 C16 24 22 18 30 18 C35 18 39 21 40 24 C41 21 45 18 50 18 C58 18 64 24 64 32 C64 48 40 62 40 62Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M24 38 L30 32 L36 42 L42 28 L48 38 L54 34"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    desc: "Comprehensive digestive health solutions spanning prevention to advanced care.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M30 20 C20 20 18 30 22 36 C26 42 26 46 24 50 C22 54 24 60 30 62 C36 64 40 60 40 56"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 56 C40 52 44 50 46 46 C48 42 46 36 42 32 C38 28 38 22 44 20 C50 18 56 22 56 28 C56 36 50 38 48 44"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="30"
          cy="19"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="44"
          cy="19"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "urology",
    title: "Urology",
    desc: "Targeted urological therapies addressing kidney, bladder, and urinary tract health.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M28 18 C20 18 16 26 18 34 C20 42 28 44 30 50 L30 62"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M52 18 C60 18 64 26 62 34 C60 42 52 44 50 50 L50 62"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 58 C34 62 46 62 50 58"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M24 28 C26 24 30 22 34 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M56 28 C54 24 50 22 46 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "weight-management",
    title: "Weight Management",
    desc: "Evidence-based metabolic and weight management solutions for long-term wellness.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M20 56 C20 56 24 36 40 36 C56 36 60 56 60 56Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="40"
          y1="36"
          x2="40"
          y2="24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="40"
          cy="21"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="20"
          y1="56"
          x2="60"
          y2="56"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="56"
          x2="27"
          y2="62"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="56"
          x2="53"
          y2="62"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="56"
          x2="40"
          y2="63"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "dermatology",
    title: "Dermatology",
    desc: "Advanced skin care therapeutics for a wide range of dermatological conditions.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M20 50 C20 36 28 22 40 20 C52 22 60 36 60 50 C60 58 52 64 40 64 C28 64 20 58 20 50Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 38 C34 34 38 32 40 32 C42 32 46 34 48 38"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="32"
          cy="46"
          r="2.5"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="48"
          cy="46"
          r="2.5"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="40"
          cy="52"
          r="2.5"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M40 20 L40 14"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M52 24 L56 20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M28 24 L24 20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "psychiatry",
    title: "Psychiatry",
    desc: "Mental health therapeutics supporting neurological and psychological well-being.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M22 40 C22 26 30 18 40 18 C50 18 58 26 58 38 C58 46 54 52 48 56 L48 64 L32 64 L32 56 C26 52 22 47 22 40Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="32"
          y1="60"
          x2="48"
          y2="60"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M34 36 C34 32 38 30 40 30 C44 30 46 33 46 36 C46 40 42 42 40 44"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="40" cy="48" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    id: "oncology",
    title: "Oncology",
    desc: "Advanced cancer therapies delivering targeted, evidence-based treatment solutions.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <circle
          cx="40"
          cy="40"
          r="14"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="22"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="40"
          cy="58"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="22"
          cy="40"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="58"
          cy="40"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="27.5"
          cy="27.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="52.5"
          cy="52.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="52.5"
          cy="27.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="27.5"
          cy="52.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="40"
          y1="26"
          x2="40"
          y2="34"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="40"
          y1="46"
          x2="40"
          y2="54"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="26"
          y1="40"
          x2="34"
          y2="40"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="46"
          y1="40"
          x2="54"
          y2="40"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "hepatology",
    title: "Hepatology",
    desc: "Liver disease management with international-standard therapeutics and education.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M18 35 C18 25 26 18 36 18 C46 18 58 22 60 34 C62 44 56 56 46 58 C38 60 28 56 24 50 C20 44 18 42 18 35Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M36 18 C36 24 32 30 30 36"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M46 20 C44 26 46 32 44 38"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 38 C26 36 32 38 38 38 C44 38 50 36 58 38"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 46 C28 44 36 46 44 44 C50 42 54 46 58 48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "pain-relief",
    title: "Pain Relief",
    desc: "Analgesic and anti-inflammatory solutions for acute and chronic pain management.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M40 18 L44 32 L58 32 L47 41 L51 55 L40 46 L29 55 L33 41 L22 32 L36 32Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="8"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
];

const TherapeuticAreasSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#1a56db]/30" />
            <span className="text-[#1a56db] text-xs tracking-[0.45em] uppercase font-semibold">
              What We Treat
            </span>
            <div className="h-px w-12 bg-[#1a56db]/30" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0d2d6b] mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            A broad range of
            <br />
            <span className="text-[#1a56db]">pharmaceutical solutions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Through continuous development and strategic partnerships, we offer
            medicines across several therapeutic areas to support modern
            healthcare.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {THERAPEUTIC_AREAS.map((area, i) => (
            <Link key={area.id} href="/products" className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(area.id)}
              onHoverEnd={() => setHovered(null)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: "linear-gradient(145deg, #1a4db8 0%, #0d2d6b 100%)",
              }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="p-7 relative z-10">
                <div
                  className="mb-5 flex items-center justify-center w-20 h-20 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  {area.svg}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                  {area.title}
                </h3>
                <AnimatePresence>
                  {hovered === area.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-blue-200/80 text-sm leading-relaxed"
                    >
                      {area.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-0.75 bg-blue-300 rounded-full"
                initial={{ width: "25%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35 }}
              />

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(96,165,250,0.15), transparent 65%)",
                }}
              />

              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity">
                <div className="w-5 h-5 border-t-2 border-r-2 border-blue-300 rounded-tr-md" />
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreasSection;

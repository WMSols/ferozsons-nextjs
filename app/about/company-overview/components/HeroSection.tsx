"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "./Counter";
import type { Blob, Stat } from "./types";

const STATS: Stat[] = [
  { value: "1500+", label: "Employees" },
  { value: "30+", label: "Countries We Export To." },
  { value: "70+", label: "Years of Trusted Service" },
  // { value: "250K+", label: "Hepatitis C Patients Cured" },
];

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);

  const blobs: Blob[] = [
    { w: 300, h: 300, x: "10%", y: "20%", color: "#3b82f6" },
    { w: 200, h: 200, x: "75%", y: "10%", color: "#93c5fd" },
    { w: 400, h: 400, x: "70%", y: "55%", color: "#1d4ed8" },
    { w: 150, h: 150, x: "20%", y: "70%", color: "#60a5fa" },
  ];

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden flex items-center justify-center "
      style={{
        background:
          "linear-gradient(135deg, #0d2d6b 0%, #1a4db8 40%, #1e6fa8 70%, #12547a 100%)",
      }}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[800px] h-[800px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #60a5fa 0%, transparent 65%)",
            }}
          />
        </div>
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: blob.w,
              height: blob.h,
              left: blob.x,
              top: blob.y,
              background: `radial-gradient(circle, ${blob.color}30, transparent 70%)`,
            }}
            animate={{ y: [0, -18, 0], scale: [1, 1.05, 1] }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.svg
          viewBox="0 0 500 500"
          className="w-[700px] h-[700px] opacity-15"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <path
              id="circle-path"
              d="M 250,250 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
            />
          </defs>
          <text
            fill="white"
            fontSize="16"
            letterSpacing="10"
            fontFamily="Georgia, serif"
          >
            <textPath href="#circle-path">
              FEROZSONS LABORATORIES · ADVANCING HEALTHCARE · SINCE 1954 ·
              PAKISTAN ·{" "}
            </textPath>
          </text>
        </motion.svg>
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-200 text-xs tracking-[0.45em] uppercase font-semibold mb-6"
        >
          Established 1954
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black leading-[0.95] mb-10"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            fontFamily: "'Georgia', serif",
          }}
        >
          Advancing
          <br />
          <span className="text-blue-200">Healthcare</span>
          <br />
          Through Science
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-wrap justify-center gap-10 mt-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-white leading-none">
                <Counter target={s.value} />
              </div>
              <div className="text-blue-200/80 text-xs tracking-[0.25em] uppercase mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="w-px h-14 bg-gradient-to-b from-blue-200/80 to-transparent" />
        <span className="text-white/40 text-[10px] tracking-[0.35em] uppercase">
          Scroll
        </span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-40 translate-y-[2px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80 C360 30 1080 30 1440 80 L1440 80 L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

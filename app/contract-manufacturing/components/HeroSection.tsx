"use client";

import type { RefObject } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";

export interface HeroSectionProps {
  heroRef: RefObject<HTMLElement | null>;
  heroY: MotionValue<string>;
}

export function HeroSection({ heroRef, heroY }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      className=" pt-10  relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0e2044 50%, #0d1c3d 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff22 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a1628)",
        }}
      />

      <motion.div
        style={{ y: heroY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="font-body text-[#7ab8f5] text-sm tracking-[0.3em] uppercase mb-6"
            >
              Ferozsons Laboratories Limited
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="font-display text-white leading-[1.05]"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 900,
              }}
            >
              Precision
              <br />
              <span style={{ color: "#4a90d9" }}>Manufacturing.</span>
              <br />
              Global Standards.
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="font-body text-[#a8c4e0] mt-6 text-lg leading-relaxed max-w-lg"
              style={{ fontWeight: 300 }}
            >
              A fully cGMP-compliant pharmaceutical manufacturing facility
              delivering world-class formulations for domestic and global
              markets since 1954.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 },
                },
              }}
              className="mt-10 flex gap-4 flex-wrap"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(74,144,217,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="font-body px-8 py-3.5 rounded-full text-white text-base tracking-wide cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  border: "1px solid #3b82f6",
                  fontWeight: 400,
                }}
              >
                Partner with Us →
              </motion.a>
              <motion.a
                href="#capabilities"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="font-body px-8 py-3.5 rounded-full text-[#93c5fd] text-base tracking-wide cursor-pointer"
                style={{ border: "1px solid #3b82f688", fontWeight: 400 }}
              >
                View Capabilities
              </motion.a>
            </motion.div>
          </motion.div>


        </div>
      </motion.div>
    </section>
  );
}

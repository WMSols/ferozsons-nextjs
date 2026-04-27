"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 bg-[#f0f5ff]">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            style={{
              background:
                "linear-gradient(135deg, #0d2d6b 0%, #1a4db8 50%, #1e6fa8 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
              <div
                className="text-white/20 text-9xl font-black"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                FLL
              </div>
              <div className="text-blue-200/60 text-sm tracking-[0.3em] uppercase mt-3">
                Pakistan Stock Exchange · 1960
              </div>
            </div>
            {[
              "top-5 left-5",
              "top-5 right-5",
              "bottom-5 left-5",
              "bottom-5 right-5",
            ].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-7 h-7 border-2 border-blue-300/50 rounded-md`}
              />
            ))}
          </div>

          <motion.div
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl shadow-blue-900/10 border border-blue-100"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-3xl font-black text-[#0d2d6b]">70+</div>
            <div className="text-blue-900/50 text-xs tracking-widest uppercase mt-1">
              Years of Innovation
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-5 -left-5 bg-white rounded-xl px-4 py-3 shadow-xl shadow-blue-900/10 border border-blue-100 flex items-center gap-3"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="w-8 h-8 bg-[#0d2d6b] rounded-lg flex items-center justify-center text-white text-xs font-bold">
              PSX
            </div>
            <div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                Listed Since
              </div>
              <div className="font-bold text-[#0d2d6b] text-sm">1960</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <span className="text-[#1a56db] text-xs tracking-[0.45em] uppercase font-semibold">
            Our Story
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0d2d6b] leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            A Story of Growth and Purpose.
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Established in <strong className="text-[#0d2d6b]">1954</strong>,
            Ferozsons Laboratories Limited is a public limited company listed on
            the Pakistan Stock Exchange since{" "}
            <strong className="text-[#0d2d6b]">1960</strong>. Over the past 70
            years, the company has grown to become one of Pakistan's
            fastest-growing pharmaceutical companies, building a strong
            reputation for delivering high-quality healthcare solutions and
            developing leadership brands across key therapeutic areas.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Our expertise spans gastroenterology, hepatology, cardiology, and
            oncology — with a growing focus on endocrinology, diabetes care, and
            mother and child health.
          </p>

          <div className="grid grid-cols-3 gap-4 py-4">
            {[
              { num: "1500+", lbl: "Employees" },
              { num: "30+", lbl: "Countries" },
              // { num: "250K+", lbl: "Cured" },
            ].map((s) => (
              <div
                key={s.lbl}
                className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100"
              >
                <div className="text-2xl font-black text-[#0d2d6b]">
                  {s.num}
                </div>
                <div className="text-blue-900/50 text-xs mt-1 uppercase tracking-wider">
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>

          <motion.button
            onClick={() => {
              const target = document.getElementById("biopharma");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-3 bg-[#1a56db] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#0d2d6b] transition-colors duration-300 shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Our Story
            <span className="text-lg">→</span>
          </motion.button>        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

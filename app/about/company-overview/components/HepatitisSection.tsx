"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";

const HepatitisSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-28 bg-[#f0f5ff]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-12 bg-[#1a56db]/30" />
            <span className="text-[#1a56db] text-xs tracking-[0.45em] uppercase font-semibold">
              Hepatology
            </span>
            <div className="h-px w-12 bg-[#1a56db]/30" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0d2d6b] leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            A Breakthrough in
            <br />
            Hepatitis Treatment Access
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl shadow-blue-900/8 border border-blue-100 text-center overflow-hidden">
              <div
                className="text-[8rem] font-black text-[#1a56db]/6 leading-none select-none absolute inset-0 flex items-center justify-center"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                250K
              </div>
              <div className="relative z-10">
                <div
                  className="text-[#0d2d6b] text-4xl md:text-7xl font-black"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  <Counter target="250000" />+
                </div>
                <div className="text-[#1a56db] font-bold text-xl mt-2">
                  Patients Cured
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  Hepatitis C · Nationwide
                </div>
              </div>

              <motion.div
                className="mt-8 inline-flex items-center gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 bg-[#0d2d6b] rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  GS
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">
                    In partnership with
                  </div>
                  <div className="font-bold text-[#0d2d6b] text-sm">
                    Gilead Sciences
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              Through our partnership with{" "}
              <strong className="text-[#0d2d6b]">Gilead Sciences</strong>,
              Ferozsons Laboratories Limited introduced{" "}
              <strong className="text-[#0d2d6b]">Sovaldi® (sofosbuvir)</strong>{" "}
              in 2014 — the first direct-acting antiviral therapy for hepatitis
              C in Pakistan — under a dedicated patient access program.
            </p>
            <p className="text-gray-500 leading-relaxed">
              This collaboration significantly expanded access to breakthrough
              treatment, helping deliver life-changing care and contributing to
              the cure of over{" "}
              <strong className="text-[#0d2d6b]">
                250,000 hepatitis C patients
              </strong>{" "}
              nationwide.
            </p>

            <motion.a
              href="/products/pharmaceuticals"
              className="inline-flex items-center gap-2 bg-[#1a56db] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#0d2d6b] transition-colors shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More About Ferozsons Hepatology →
            </motion.a>

            <div className="h-px bg-blue-100 my-6" />

            <p className="text-gray-500 leading-relaxed text-sm">
              Alongside expanding treatment availability, we continue to work
              closely with healthcare providers and medical societies to
              strengthen awareness of hepatic diseases, support education
              initiatives, and facilitate screening programs that promote early
              diagnosis and improved patient outcomes.
            </p>

            <motion.a
              href="/csr"
              className="inline-flex items-center gap-2 border-2 border-[#1a56db] text-[#1a56db] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1a56db] hover:text-white transition-all"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Social Responsibility Initiatives ↗
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HepatitisSection;

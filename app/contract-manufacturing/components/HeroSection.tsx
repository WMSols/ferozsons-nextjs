"use client";


import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[95vh] flex items-center overflow-hidden rounded-b-[3.1rem]"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/contract-manufacturing/Hero.webp"
          alt="Manufacturing Facility"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-20 mt-16"
      >
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            {/* Heading - strictly font-bold with no specific font family */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold text-white leading-none mb-6 tracking-tight"
            >
              Manufacturing
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="text-white/90 text-lg md:text-xl font-sans  lg:text-2xl leading-relaxed max-w-5xl mb-10"
            >
              A fully cGMP-compliant pharmaceutical manufacturing facility
              delivering world-class formulations for domestic and global
              markets since 1956.
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
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              {/* Primary Button */}
              <motion.a
                href="#capabilities"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-[#3B73AC] text-white font-medium text-base h-12 px-8 rounded-full transition-colors hover:bg-[#294e74]"
              >
                View Our Capabilities
              </motion.a>
              
              {/* Secondary Transparent Button */}
              <motion.a
                href="#partner"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-transparent border border-white/50 text-white font-medium text-sm md:text-base px-8 py-3.5 rounded-full transition-colors hover:bg-white/10 hover:border-white"
              >
                Partner With Us &rarr;
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
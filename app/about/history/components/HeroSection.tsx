"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the hero image
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  // Subtle fade out for the text container as you scroll
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div

      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* 1. Hero Image Container */}
      <div
      
        style={{
          position: "relative",
          width: "100%",
          height: "55vh",
          minHeight: "400px",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            y: yImage,
            position: "absolute",
            inset: -50, // Expanded slightly to hide edges during parallax movement
            backgroundImage: "url('/images/about-history/banner-history.png')", // Replace with your actual image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* 2. The Sweeping Curve Shape Divider */}
        <div
          style={{
            position: "absolute",
            bottom: -1, // -1px prevents sub-pixel gaps
            left: 0,
            width: "100%",
            height: "12vw", // Scales curve based on viewport width
            minHeight: "80px",
            maxHeight: "160px",
            overflow: "hidden",
            zIndex: 5,
          }}
        >
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            {/* This path creates the white block on the left that smoothly tapers flat to the right */}
            <path
              d="M0,0 C200,150 500,150 1440,150 L1440,150 L0,150 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* 3. Text Content Area */}
      <motion.div
        style={{
          opacity: opacityText,
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 40px 100px", // Top padding bridges the gap from the curve
          textAlign: "center", // Center-aligned to match design
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#0a1c3e", // Deep navy blue
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            margin: "0 0 32px",
            letterSpacing: "-0.01em",
          }}
        >
          Generations of Care, Built on Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            fontSize: "clamp(16px, 2vw, 20px)", // Responsive text sizing
            lineHeight: 1.6,
            color: "#4a5568", // Dark slate gray
            margin: "0 0 24px",
            maxWidth: "1400px", // Prevents lines from getting uncomfortably wide
          }}
        >
          Founded in 1894 by Maulvi Ferozuddin Khan, the Ferozsons business
          group began with the establishment of its publishing house, guided
          from the outset by a commitment to advancing education and healthcare
          for underserved communities across the subcontinent. Built on decades
          of responsible healthcare leadership, ‘People Trust Us’ as we continue
          advancing patient care.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.6,
            color: "#4a5568",
            margin: 0,
            maxWidth: "1400px",
          }}
        >
          The company has emerged as one of Pakistan’s fastest-growing
          pharmaceutical firms, recognized for delivering high-quality
          healthcare solutions and building leading brands across key
          therapeutic areas, including gastroenterology, hepatology, cardiology,
          and oncology.
        </motion.p>
      </motion.div>
    </div>
  );
}

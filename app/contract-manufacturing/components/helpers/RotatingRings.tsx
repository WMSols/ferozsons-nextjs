"use client";

import { motion } from "framer-motion";

export function RotatingRings() {
  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff44 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.svg
        className="absolute"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="210"
          cy="210"
          r="190"
          fill="none"
          stroke="#4a90d9"
          strokeWidth="1.2"
          strokeDasharray="6 10"
          opacity="0.5"
        />
        {[0, 120, 240].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 210 + 190 * Math.cos(rad);
          const y = 210 + 190 * Math.sin(rad);
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="10"
                fill="#1a3a6e"
                stroke="#4a90d9"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#7ab8f5"
                fontSize="10"
                fontStyle="italic"
                fontFamily="Georgia, serif"
              >
                f
              </text>
            </g>
          );
        })}
      </motion.svg>

      <motion.svg
        className="absolute"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="210"
          cy="210"
          r="130"
          fill="none"
          stroke="#7ab8f5"
          strokeWidth="1.2"
          strokeDasharray="5 8"
          opacity="0.6"
        />
        {[60, 180, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 210 + 130 * Math.cos(rad);
          const y = 210 + 130 * Math.sin(rad);
          const isBlue = i % 2 === 0;
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="10"
                fill={isBlue ? "#2563eb" : "#b0c8e8"}
                stroke={isBlue ? "#60a5fa" : "#d4e4f7"}
                strokeWidth="1.5"
              />
              {isBlue && (
                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontStyle="italic"
                  fontFamily="Georgia, serif"
                >
                  f
                </text>
              )}
            </g>
          );
        })}
      </motion.svg>

      <motion.svg
        className="absolute"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="210"
          cy="210"
          r="70"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.7"
        />
        {[30, 210].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 210 + 70 * Math.cos(rad);
          const y = 210 + 70 * Math.sin(rad);
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="9"
                fill="#1d4ed8"
                stroke="#93c5fd"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="white"
                fontSize="9"
                fontStyle="italic"
                fontFamily="Georgia, serif"
              >
                f
              </text>
            </g>
          );
        })}
      </motion.svg>

      <div className="relative z-10 w-14 h-14 rounded-full bg-[#1d4ed8] border-2 border-[#60a5fa] flex items-center justify-center shadow-[0_0_30px_rgba(96,165,250,0.5)]">
        <span
          className="text-white text-xl font-bold italic"
          style={{ fontFamily: "Georgia, serif" }}
        >
          f
        </span>
      </div>
    </div>
  );
}

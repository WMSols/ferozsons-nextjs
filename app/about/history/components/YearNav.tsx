"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function YearNav({
  years,
  activeYear,
}: {
  years: number[];
  activeYear: number;
}) {
  const scrollTo = (year: number) => {
    document
      .getElementById(`year-${year}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        zIndex: 100,
      }}
    >
      {years.map((year) => (
        <button
          key={year}
          onClick={() => scrollTo(year)}
          title={String(year)}
          type="button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "1px 0",
          }}
        >
          <AnimatePresence>
            {activeYear === year && (
              <motion.span
                key="label"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#0057b8",
                  letterSpacing: "0.04em",
                }}
              >
                {year}
              </motion.span>
            )}
          </AnimatePresence>
          <div
            style={{
              width: activeYear === year ? 10 : 6,
              height: activeYear === year ? 10 : 6,
              borderRadius: "50%",
              background: activeYear === year ? "#0057b8" : "#c8c5bf",
              transition: "all 0.25s ease",
              flexShrink: 0,
            }}
          />
        </button>
      ))}
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";

export function ButtonMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      style={{ display: "inline-block" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function QuoteReveal({ className, children }: Props) {
  return (
    <motion.blockquote
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.blockquote>
  );
}

"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  fromLeft: boolean;
  children: React.ReactNode;
};

export function TimelineItemSlide({ className, fromLeft, children }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

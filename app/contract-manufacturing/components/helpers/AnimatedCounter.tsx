"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

export interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.floor(v).toString()),
      });
      return controls.stop;
    }
  }, [inView, count, target]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

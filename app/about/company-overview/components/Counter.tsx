"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { CounterProps } from "./types";

const Counter: React.FC<CounterProps> = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = num / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {target.includes("+") ? "+" : ""}
    </span>
  );
};

export default Counter;

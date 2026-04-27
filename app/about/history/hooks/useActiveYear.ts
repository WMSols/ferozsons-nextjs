"use client";

import { useEffect, useState } from "react";

export function useActiveYear(years: number[]) {
  const [activeYear, setActiveYear] = useState(years[0] ?? 0);
  const yearsKey = years.join(",");

  useEffect(() => {
    const onScroll = () => {
      for (const year of years) {
        const element = document.getElementById(`year-${year}`);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.38 && rect.bottom > 0) {
          setActiveYear(year);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [yearsKey]);

  return activeYear;
}

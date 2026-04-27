"use client";

import HeroSection from "./components/HeroSection";
import FooterCTA from "./components/FooterCTA";
import MobileYearSection from "./components/MobileYearSection";
import YearNav from "./components/YearNav";
import YearSection from "./components/YearSection";
import { YEARS } from "./data/history";
import { useActiveYear } from "./hooks/useActiveYear";
import { useIsMobile } from "./hooks/useIsMobile";

export default function HistoryOfImpactPage() {
  const isMobile = useIsMobile();
  const allYears = YEARS.map((group) => group.year);
  const activeYear = useActiveYear(allYears);

  return (
    <>
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        *{box-sizing:border-box}
      `}</style>
      <main
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          background: "#fff",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <HeroSection />

        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: isMobile ? "40px 18px 40px" : "0 80px 60px",
          }}
        >
          {YEARS.map((group) =>
            isMobile ? (
              <MobileYearSection key={group.year} group={group} />
            ) : (
              <YearSection key={group.year} group={group} />
            ),
          )}
        </div>

        {!isMobile && <YearNav years={allYears} activeYear={activeYear} />}
        <FooterCTA />
      </main>
    </>
  );
}

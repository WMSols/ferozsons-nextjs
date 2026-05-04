"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { HeroSection } from "./components/HeroSection";
import { StatementSection } from "./components/StatementSection";
import { FacilityHighlightsSection } from "./components/FacilityHighlightsSection";
import { ProductionCapacitiesSection } from "./components/ProductionCapacitiesSection";
import { FacilityVideoSection } from "./components/FacilityVideoSection";
import { ClientsSection } from "./components/ClientsSection";
import { ClosingCtaSection } from "./components/ClosingCtaSection";
import { facilityCards } from "./data/facilityCards";
import { currentClients, legacyClients } from "./data/clients";
import { injectableCapacities, productionCapacities } from "./data/capacities";
import EgmpSlideshowSection from "./components/EgmpSlideshowSection";

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ContractManufacturing() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const ctaRef = useRef<HTMLElement | null>(null);
  const ctaScroll = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const ctaBgY = useTransform(
    ctaScroll.scrollYProgress,
    [0, 1],
    ["-15%", "15%"],
  );

  return (
    <div
      className="w-full overflow-x-hidden -mt-[6.6rem] "
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'Source Serif 4', Georgia, serif; }
      `}</style>

      <HeroSection heroRef={heroRef} heroY={heroY} />
      <StatementSection />
      <FacilityHighlightsSection cards={facilityCards} />
      <EgmpSlideshowSection/>
        <ClientsSection
        currentClients={currentClients}
        legacyClients={legacyClients}
      />
      <ProductionCapacitiesSection
        productionRows={productionCapacities}
        injectableRows={injectableCapacities}
      />
      <FacilityVideoSection />

      <ClosingCtaSection ctaRef={ctaRef} ctaBgY={ctaBgY} />
    </div>
  );
}

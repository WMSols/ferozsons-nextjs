"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import {
  csrInitiatives,
  type CSRCategory,
} from "@/data/csrData";
import CSRClosingCTA from "./components/CSRClosingCTA";
import CSRFilterBar from "./components/CSRFilterBar";
import CSRInitiativeGrid from "./components/CSRInitiativeGrid";
import CSRPillarOverview from "./components/CSRPillarOverview";
import CSRVisionSection from "./components/CSRVisionSection";
import CSRSlidesshow from "./components/CSRSlidesshow";

// ─── Page ───────────────────────────────────────────────────────────────────
const metadata = {
  title: "Creating Impact",
  description:
    "Ferozsons Laboratories' Creating Impact initiatives in education, healthcare, arts, and community development.",
};

export default function CreatingImpactPage() {
  const [activeCategory, setActiveCategory] = useState<CSRCategory | "all">(
    "all",
  );

  const filtered =
    activeCategory === "all"
      ? csrInitiatives
      : csrInitiatives.filter((i) => i.category === activeCategory);

  const countFor = (cat: CSRCategory) =>
    csrInitiatives.filter((i) => i.category === cat).length;

  return (
    <>
      <PageHero
        title="Creating Impact"
        subtitle="At Ferozsons, giving back is not a programme — it is our purpose. From classrooms to clinical wards, we invest in the communities that define Pakistan."
        backgroundImage="/images/CSR/1_banner creating impact.jpg"
      />


      <CSRSlidesshow/>
      <CSRVisionSection />

      <CSRPillarOverview
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        countFor={countFor}
      />

      <section className="pb-20">
        <div className="container">
          <CSRFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            countFor={countFor}
          />

          <CSRInitiativeGrid filtered={filtered} />
        </div>
      </section>

      <CSRClosingCTA />
    </>
  );
}

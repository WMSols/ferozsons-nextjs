
import { timelineEvents } from "@/data/partnerships";
import {
  heroSlides,
  missionData,
  productSearchData,
  legacyData,
  quoteText,
} from "@/data/homepage";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import CTABanner from "@/components/layout/CTABanner";
import HeroCarousel from "@/components/sections/HeroCarousel";
import MissionSection from "@/components/sections/MissionSection";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import ProductSearchSection from "@/components/sections/ProductSearchSection";
import TimelineSection from "@/components/sections/TimelineSection";
import LegacyBanner from "@/components/sections/LegacyBanner";
import QuoteSection from "@/components/sections/QuoteSection";
import TherapeuticsGrid from "@/components/sections/TherapeuticsGrid";
import ArticlesGridClient from "@/components/sections/ArticlesGridClient";
;

export default function HomePage() {

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <Suspense fallback={<div className="text-muted-foreground text-sm">Therapeutic Areas Loading...</div>}>
        <TherapeuticsGrid />
      </Suspense>
      <MissionSection {...missionData} />
      <Suspense fallback={<div className="text-muted-foreground text-sm">Articles Loading...</div>}>
        <ArticlesGridClient />
      </Suspense>
      <ProductSearchSection {...productSearchData} />
      <TimelineSection
        title="Our Journey"
        events={timelineEvents}
        animated
        className="bg-secondary py-20 overflow-x-hidden"
      />
      <LegacyBanner {...legacyData} />
      <QuoteSection quote={quoteText} />
      <CTABanner />
    </>
  );
}

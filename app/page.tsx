
import { timelineEvents } from "@/data/partnerships";
import {
  heroSlides,
  missionData,
  productSearchData,
  legacyData,
  quoteText,
} from "@/data/homepage";
import { Suspense } from "react";
import CTABanner from "@/components/layout/CTABanner";
import HeroCarousel from "@/components/sections/HeroCarousel";
import MissionSection from "@/components/sections/MissionSection";
import ProductSearchSection from "@/components/sections/ProductSearchSection";
import LegacyBanner from "@/components/sections/LegacyBanner";
import QuoteSection from "@/components/sections/QuoteSection";
import TherapeuticsGrid from "@/components/sections/TherapeuticsGrid";
import ArticlesGridClient from "@/components/sections/ArticlesGridClient";
import CEOMessageCard from "@/components/sections/CeoMessageCard";
;

export default function HomePage() {

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <Suspense fallback={<div className="text-muted-foreground text-sm">Therapeutic Areas Loading...</div>}>
        <TherapeuticsGrid />
      </Suspense>
      <MissionSection {...missionData} />
        <LegacyBanner {...legacyData} />
        <CEOMessageCard/>
      <ProductSearchSection {...productSearchData} />
      <Suspense fallback={<div className="text-muted-foreground text-sm">Articles Loading...</div>}>
        <ArticlesGridClient />
      </Suspense>
      <CTABanner />
    </>
  );
}

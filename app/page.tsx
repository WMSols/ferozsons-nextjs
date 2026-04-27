"use client";

import { timelineEvents } from "@/data/partnerships";
import {
  heroSlides,
  missionData,
  productSearchData,
  legacyData,
  quoteText,
} from "@/data/homepage";
import CTABanner from "@/components/layout/CTABanner";
import HeroCarousel from "@/components/sections/HeroCarousel";
import MissionSection from "@/components/sections/MissionSection";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import ProductSearchSection from "@/components/sections/ProductSearchSection";
import TimelineSection from "@/components/sections/TimelineSection";
import LegacyBanner from "@/components/sections/LegacyBanner";
import QuoteSection from "@/components/sections/QuoteSection";
import TherapeuticsGrid from "../components/sections/TherapeuticsGrid";
import { therapeuticsData } from "@/data/company-overview";
import { useLatestNewsroomArticles } from "@/app/newsroom/hooks/useLatestNewsroomArticles";

export default function HomePage() {
  const { latestArticles, isLoading } = useLatestNewsroomArticles();

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <TherapeuticsGrid items={therapeuticsData} />
      <MissionSection {...missionData} />
      {!isLoading && latestArticles.length > 0 && (
        <ArticlesGrid
          articles={latestArticles}
          title="Latest Articles"
          viewAllLink="/newsroom"
          viewAllText="View All"
        />
      )}
      <ProductSearchSection {...productSearchData} />
      <TimelineSection
        title="Our Journey"
        events={timelineEvents}
        animated
        className="bg-secondary py-20"
      />
      <LegacyBanner {...legacyData} />
      <QuoteSection quote={quoteText} />
      <CTABanner />
    </>
  );
}

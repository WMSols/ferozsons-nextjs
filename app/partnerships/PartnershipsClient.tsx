import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import PartnersGrid from "./components/PartnersGrid";
import TimelineSection from "@/components/sections/TimelineSection";
import CTABanner from "@/components/layout/CTABanner";
import { partnerships, timelineEvents } from "@/data/partnerships";

export default function PartnershipsClient() {
  return (
    <>
      <div className="-mt-[6.6rem]">
        <HeroSection />
        <IntroSection />
        <PartnersGrid partners={partnerships} />
        <TimelineSection
          title="Advancing Healthcare Through Purpose-Driven Partnerships"
          events={timelineEvents}
          animated
          className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-20"
        />
        <CTABanner />
      </div>
    </>
  );
}

"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import PatientsFirstIntroduction from "./components/PatientsFirstIntroduction";
import SeventyYearsBanner from "./components/SeventyYearsBanner";
import BiotechManufacturingSection from "./components/BiotechManufacturingSection";
import HealthcareScienceSection from "./components/HealthcareScienceSection";
import HepatitisBreakthrough from "./components/HepatitisBreakthrough";
import CareersCTA from "./components/CareersCTA";
import TherapeuticsGrid from "@/components/sections/TherapeuticsGrid";
import ArticlesGridClient from "@/components/sections/ArticlesGridClient";

const FerozsonAbout: React.FC = () => {
  return (
    <div
      className="min-h-screen  "
      style={{ fontFamily: "'system-ui', sans-serif" }}
    >
      <HeroSection
       title="We Put Patients First"
       backgroundImage="/images/company-overview/Hero.webp"
        />
      {/* <StatementSection /> */}
      <PatientsFirstIntroduction />
      {/* <AboutSection /> */}
      <SeventyYearsBanner />
      {/* <BiopharmaSection /> */}
      <BiotechManufacturingSection />
      <HealthcareScienceSection/>
      <HepatitisBreakthrough/>
      <CareersCTA />
      {/* <TherapeuticAreasSection /> */}
      {/* <CtaSection /> */}
      <TherapeuticsGrid/>
      <ArticlesGridClient/>
    </div>
  );
};

export default FerozsonAbout;

"use client";

import React from "react";
import AboutSection from "./components/AboutSection";
import BiopharmaSection from "./components/BiopharmaSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import HepatitisSection from "./components/HepatitisSection";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import StatementSection from "./components/StatementSection";
import TherapeuticAreasSection from "./components/TherapeuticAreasSection";

const FerozsonAbout: React.FC = () => {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'system-ui', sans-serif" }}
    >
      <HeroSection />
      <StatementSection />
      <AboutSection />
      <BiopharmaSection />
      <HepatitisSection />
      <TherapeuticAreasSection />
      <CtaSection />
    </div>
  );
};

export default FerozsonAbout;

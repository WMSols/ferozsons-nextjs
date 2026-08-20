import type { Metadata } from "next";

import Hero from "./_components/Hero";
import TherapeuticAreas from "./_components/TherapeuticAreas";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Pharmaceuticals",
  description:
    "Advancing healthcare through innovative medicines across multiple therapeutic areas.",
};

export default function PharmaceuticalsPage() {
  return (
    <>
    <PageHero
    title="Pharmaceuticals"
    isPharmaceuticals={true}
    backgroundImage="/images/Pharmaceuticals-Hero.webp"/>
    {/* Hero containing slider images */}
      <Hero />
      <TherapeuticAreas />
    </>
  );
}

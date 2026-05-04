import type { Metadata } from "next";

import Hero from "./_components/Hero";
import TreatmentOptions from "./_components/TreatmentOptions";
import ProductSearch from "./_components/ProductSearch";
import CareSection from "./_components/CareSection";

export const metadata: Metadata = {
  title: "Weight Management",
  description: "Modern solutions for weight management.",
};

export default function WeightManagementPage() {
  return (
    <div className="mt-[-6rem]">
      <Hero />
      <TreatmentOptions />
      <ProductSearch />
      <CareSection />
    </div>
  );
}

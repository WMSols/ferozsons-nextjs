import type { Metadata } from "next";

import Hero from "./_components/Hero";
import TherapeuticAreas from "./_components/TherapeuticAreas";

export const metadata: Metadata = {
  title: "Pharmaceuticals",
  description:
    "Advancing healthcare through innovative medicines across multiple therapeutic areas.",
};

export default function PharmaceuticalsPage() {
  return (
    <>
      <Hero />
      <TherapeuticAreas />
    </>
  );
}

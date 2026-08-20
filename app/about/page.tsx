import PageHero from "@/components/layout/PageHero";
import Story from "./components/Story";
import Medicine from "./components/Medicine";
import Guide from "./components/Guide";
import CTA from "./components/CTA";

export const metadata = {
  title: "About Us",
  description:
    "We advance health and improve lives by placing patients at the center of everything we do.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F7F7]">
      <PageHero
        title="We put patients first"
        subtitle="We advance health and improve lives by placing patients at the center of everything we do."
        backgroundImage="/images/about-hero.webp"
      />
      <Story />
      <Medicine />
      <Guide />
      <CTA />
    </div>
  );
}

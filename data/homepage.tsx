import type { HeroSlide } from "@/components/sections/HeroCarousel";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/hero.avif",
    title: "Putting Patients First Since 1956",
    description:
      "A patient-centric pharmaceutical company committed to advancing care by addressing critical unmet medical needs in Pakistan and internationally.",
    ctaText: "Learn more",
    ctaLink: "/about/company-overview",
    align: "center",

  },
  {
    id: 2,
    image: "/legacy-bg.avif",
    title: (
      <>
        Advancing Healthcare
        <br className="hidden sm:block" /> Through Science
      </>
    ),
    description:
      "A patient-centric healthcare organization focused on addressing critical unmet medical needs in Pakistan and international markets.",
    ctaText: "Learn more",
    ctaLink: "/about/ceo-message",
    align: "center",
  },
  {
    id: 3,
    image: "/hero-3.avif",
    title: (
      <>
        Innovation Through
        <br className="hidden md:block" />
        Global Partnerships
      </>
    ),
    description: (
      <span className="">
        Our collaborations with internationally recognized partners such as
        Gilead Sciences, Boston Scientific, Bagó Group, and BioGaia strengthen
        our ability to deliver advanced healthcare solutions.
      </span>
    ),
    ctaText: "Explore Our Partnerships",
    ctaLink: "/partnerships",
    align: "left",
  },
];

export const missionData = {
  label: "Our Mission",
  headline:
    "We are a leading healthcare company driven by a commitment to patients, quality, and progress. Through innovation, global collaborations, and responsible growth, we strive to improve health outcomes, address unmet medical needs, and strengthen healthcare systems in the markets we serve.",
  description:
    "Our Medical Technologies division operates through alliances with our globally renowned partners, delivering advanced medical devices across key specialties.",
  ctaText: "Missions, Strategy & Values",
  ctaLink: "/about/purpose",
  secondaryLink: {
    text: "Why invest in Ferozsons?",
    href: "/about/history",
  },
  backgroundImage: "/mission-bg.avif",
};

export const productSearchData = {
  label: "Products",
  description:
    "Across a portfolio of over 140 products, every medicine reflects our commitment to quality and patient care, supported by over 1,000 professionals.",
  searchPlaceholder: "Searching for a product?",
  ctaText: "Explore Our Complete Portfolio",
  ctaLink: "/products",
};

export const legacyData = {
  backgroundImage: "/legacy-bg.avif",
  title: (
    <>
      Our legacy is built on <span className="text-hero-accent">integrity</span>
      <span className="text-white">,</span>
      {""}
      <span className="text-hero-accent">quality</span>
      <span className="text-white">,</span> and{" "}
      <span className="text-hero-accent">patient-first</span> care.
    </>
  ),
  description:
    "Ferozsons Laboratories Limited invests in medical and public education to advance disease awareness, prevention, and equitable access to healthcare for underserved communities.",
  ctaText: "View Our Social Responsibility Initiatives",
  ctaLink: "/csr",
};

export const quoteText =
  "Our social investments in education and health also help create access for patients who are unable to afford treatment.";

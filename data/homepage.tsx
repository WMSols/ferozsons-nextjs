import type { HeroSlide } from "@/components/sections/HeroCarousel";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/hero.jpg",
    title: "Putting Patients First",
    description:
      "A patient-centric pharmaceutical company committed to advancing care by addressing critical unmet medical needs in Pakistan and internationally.",
    ctaText: "Learn more",
    ctaLink: "/about/company-overview",
    align: "center",
    footer: (
      <p className="mt-20 max-w-2xl text-lg font-normal text-hero-heading md:text-xl">
        Reach New Peaks With{" "}
        <span className="font-semibold text-[#89bdf2]">Ferozsons</span>
      </p>
    ),
  },
  {
    id: 2,
    image: "/legacy-bg.png",
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
    footer: (
      <p className="mt-20 max-w-4xl text-sm font-bold tracking-wide text-hero-heading md:text-base uppercase">
        <span className="text-[#89bdf2]">People</span> depend on reliable
        healthcare, <span className="text-[#89bdf2]">trust</span> is built
        through consistency, and accountability guides{" "}
        <span className="text-[#89bdf2]">us</span> forward.
      </p>
    ),
  },
  {
    id: 3,
    image: "/hero-3.png",
    title: (
      <>
        Partnering with World-
        <br className="hidden md:block" />
        Leading Innovators to
        <br className="hidden md:block" /> Advance Healthcare
      </>
    ),
    description: (
      <span className="text-black">
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
    "Our Medical Technologies division operates through alliances with five globally renowned partners, delivering advanced medical devices across key specialties.",
  ctaText: "Missions, Strategy & Values",
  ctaLink: "/about/purpose",
  secondaryLink: {
    text: "Why invest in Ferozsons?",
    href: "/about/history",
  },
  backgroundImage: "/mission-bg.png",
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
  backgroundImage: "/legacy-bg.png",
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

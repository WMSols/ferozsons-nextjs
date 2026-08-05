import type { HeroSlide } from "@/components/sections/HeroCarousel";

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/Hero-1.png",
    title: (
      <>
        Putting Patients First
        <br className="hidden sm:block" /> Since 1956
      </>
    ),
    description:
      "A patient-centric pharmaceutical company committed to advancing care by addressing critical unmet medical needs in Pakistan and internationally.",
    ctaText: "Learn more",
    ctaLink: "/about/company-overview",
    align: "center",

  },
  {
    id: 2,
    image: "/Hero-2.png",
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
    image: "/Hero-3.png",
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
    "Committed to advancing health through science, innovation, and patient care.",
  description:
    "Our Medical Technologies division operates through alliances with our globally renowned partners, delivering advanced medical devices across key specialties.",
  ctaText: "Missions, Strategy & Values",
  ctaLink: "/about/purpose",
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
  backgroundImage: "/home-legacy.png",
  title: (
    <>
      Our legacy is built on
      integrity,
      quality, and {" "}
    <br className="hidden sm:block" />
      patient-first care.
    </>
  ),
  description:
    "Ferozsons Laboratories Limited invests in medical and public education to advance disease awareness, prevention, and equitable access to healthcare for underserved communities.",
  ctaText: "View Our Social Responsibility Initiatives",
  ctaLink: "/csr",
};

export const quoteText =
  "Our social investments in education and health also help create access for patients who are unable to afford treatment.";

  export const ceoMessageData = [
  {
    id: 1,
    quote: "“Ferozsons invests significantly in medical and public education programs aimed at patient awareness and disease prevention.”",
    authorName: "Osman Khalid Waheed",
    authorTitle: "CEO Ferozsons Laboratories Limited",
    buttonText: "Message From The CEO",
    buttonLink: "/about/ceo-message",
    // Placeholder image resembling a public health/education program
    backgroundImage: "/home-subimage-2.png",
  }
];
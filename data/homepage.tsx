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
      (<span>A patient-centric pharmaceutical company committed<br className="hidden sm:block" /> to advancing care by addressing critical unmet medical<br className="hidden sm:block" /> needs in Pakistan and internationally.</span>),
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
      (<span>A patient-centric healthcare organization focused on <br className="hidden sm:block" /> addressing critical unmet medical needs in Pakistan and <br className="hidden sm:block" /> international markets.</span>),
    ctaText: "Learn more",
    ctaLink: "/about/history",
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
        Gilead <br className="hidden sm:block" /> Sciences, Boston Scientific, Bagó Group, and BioGaia strengthen
        our ability <br className="hidden sm:block" /> to deliver advanced healthcare solutions.
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
    (<span>Committed to advancing health<br className="hidden md:block"/> through science, innovation,<br className="hidden md:block"/> and patient care.</span>),
  description:
    (<span>Our Medical Technologies division operates through alliances with our globally<br className="hidden md:block"/> renowned partners, delivering advanced medical devices across key specialties.</span>),
  ctaText: "Missions, Strategy & Values",
  ctaLink: "/about/purpose",
  backgroundImage: "/mission-bg.avif",
};

export const productSearchData = {
  label: "Products",
  description:
    (<span>Our portfolio of more than 140 products reflects<br className="hidden sm:block" /> our unwavering commitment to putting patients<br className="hidden sm:block" /> first through quality and innovation.</span>),
  searchPlaceholder: "Searching for a product?",
  ctaText: "Explore our complete portfolio",
  ctaLink: "/products",
};

export const legacyData = {
  backgroundImage: "/home-legacy.png",
  title: (
    <>
      Our legacy is built on<br className="hidden sm:block" />
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
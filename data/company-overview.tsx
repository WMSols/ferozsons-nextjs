import type { StatItem } from "@/components/sections/StatsSection";
import type { ContentSplitItem } from "@/components/sections/ContentSplitSection";

export const statsData: StatItem[] = [
  { number: "1500+", label: "EMPLOYEES" },
  { number: "30+", label: "COUNTRIES WE EXPORT TO" },
  { number: "70", label: "YEARS OF TRUSTED SERVICE" },
];

export const therapeuticsData = [
  { label: "Cardiology", image: "/images/Icons-Therapeutic-Areas/cardiology.png" },
  { label: "Oncology", image: "/images/Icons-Therapeutic-Areas/oncology.png" },
  {
    label: "Hepatology",
    image: "/images/Icons-Therapeutic-Areas/hepatology.png",
    portfolioLink: "/products",
    description:
      "Ferozsons Laboratories Limited has played a pivotal role in advancing the treatment of liver diseases in Pakistan. In partnership with Gilead Sciences, we introduced Sovaldi® (sofosbuvir) in 2014 the first direct-acting antiviral therapy for hepatitis C in the country through a dedicated patient access program. This collaboration significantly expanded access to breakthrough treatment and has contributed to the cure of over 250,000 hepatitis C patients nationwide.Beyond treatment, we work closely with healthcare providers and medical societies to strengthen awareness of hepatic diseases, support medical education initiatives, and facilitate screening programs that promote early diagnosis and improved patient outcomes.",
  },
  { label: "Pulmonology", image: "/images/Icons-Therapeutic-Areas/pulmonology.png" },

  //Note: Pictures are missing from clients end
  { label: "Antiviral", image: "/images/Icons-Therapeutic-Areas/antiviral.png" },
  { label: "Antibiotics", image: "/images/Icons-Therapeutic-Areas/antibiotics.png" },
  {
    label: "Cough Syrup & Lozenges",
    image: "/images/Icons-Therapeutic-Areas/cough-syrup.png",
  },
  { label: "Gastroenterology", image: "/images/Icons-Therapeutic-Areas/gastroenterology.png" },
  { label: "Urology", image: "/images/Icons-Therapeutic-Areas/urology.png" },
  {
    label: "Weight-Management",
    image: "/images/Icons-Therapeutic-Areas/weight-management.png",
  },
  { label: "Dermatology", image: "/images/Icons-Therapeutic-Areas/dermatology.png" },
  { label: "Psychiatry", image: "/images/Icons-Therapeutic-Areas/psychiatry.png" },
  // { label: "Pain Relief", image: "/images/Icons-Therapeutic-Areas/pulmonology.png" },
];

export const introText =
  "Established in 1954, Ferozsons Laboratories Limited is a public limited company that was listed on the Pakistan Stock Exchange (formerly the Karachi Stock Exchange) in 1960. Over the past 70 years, the company has grown to become one of Pakistan's fastest-growing pharmaceutical companies, building a strong reputation for delivering high-quality healthcare solutions and developing leadership brands across key therapeutic areas, including gastroenterology, hepatology, cardiology, and oncology. Ferozsons continues to expand its presence in endocrinology and in mother and child health, with a growing focus on diabetes care.";

export const coreValuesText =
  "Our legacy is grounded in {Integrity} and reflected in the high standards we uphold across our work. We deliver {Quality} healthcare solutions that improve lives, guided by a {Patient-First} approach and a strong sense of responsibility to the communities we serve.";

export const biotechSection = {
  title:
    "Pioneering Biotech Manufacturing and Expanding Pakistan's Pharmaceutical Capabilities",
  description:
    "Through strategic partnerships and sustained investment in research and manufacturing, we are expanding Pakistan's capacity to produce advanced biopharmaceuticals and deliver world-class treatments to patients at home and abroad.",
  ctaText: "Learn more",
  ctaLink: "/about",
};

export const hepatitisSections: ContentSplitItem[] = [
  {
    title: "A Breakthrough in Hepatitis Treatment Access",
    description:
      "Our partnership with Gilead Sciences has enabled thousands of patients to access breakthrough hepatitis C treatments, with Pakistan among the first countries to implement the access program.",
    image: "/images/Icons-Therapeutic-Arease/black-right.jpg",
    ctaText: "Explore products",
    ctaLink: "/products",
    ctaVariant: "filled",
  },
  {
    description:
      "We continue to strengthen our portfolio and manufacturing capabilities to meet evolving patient needs and support healthcare systems with reliable, high-quality medicines.",
    image: "/images/Icons-Therapeutic-Arease/black-left.png",
    ctaText: "Our story",
    ctaLink: "/about",
    ctaVariant: "outline",
  },
];

export const legacyData = {
  backgroundImage: "/legacy-bg.png",
  title: (
    <>
      <span className="whitespace-nowrap">
        Our legacy is built on&nbsp;
        <span className="text-hero-accent">integrity</span>
        <span className="text-white">,</span>
      </span>
      <br />
      <span className="text-hero-accent">quality</span>
      and <span className="text-hero-accent">patient-first</span> care.
    </>
  ),
  description:
    "Ferozsons Laboratories Limited invests in medical and public education to advance disease awareness, prevention, and equitable access to healthcare for underserved communities.",
  ctaText: "View Our Social Responsibility Initiatives",
  ctaLink: "/about",
};

export const bottomCtaData = {
  title: "Care That Goes Beyond Medicine.",
  description:
    "At Ferozsons, we believe healthcare is more than just prescriptions. It's about compassion, innovation, and a deep commitment to improving lives across Pakistan.",
  ctaText: "Learn More",
  ctaLink: "/about",
  image: "/care-beyond.jpg",
};

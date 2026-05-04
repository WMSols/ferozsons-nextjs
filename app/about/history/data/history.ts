import type { Category } from "./categories";

export interface Milestone {
  date: string;
  category: Category;
  title: string;
  body?: string;
  link?: { label: string; href: string };
  disclaimer?: boolean;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

export interface YearGroup {
  year: number;
  milestones: Milestone[];
}

export const YEARS: YearGroup[] = [
  {
    year: 2024,
    milestones: [
      {
        date: "2024",
        category: "product",
        title:
          "Ferozsons launches Sematide, Pakistan’s first locally manufactured GLP-1 medicine",
        body: "Ferozsons Laboratories launched Sematide (Semaglutide), Pakistan’s first locally manufactured GLP-1 medicine, representing a landmark achievement in bringing advanced biopharmaceutical innovation to the local healthcare market.",
        
        image: "/images/about-history/2024.png",
        imageAlt: "Pharmaceutical product representing Semaglutide.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 2022,
    milestones: [
      {
        date: "2022",
        category: "collaboration",
        title: "Partnership with Nihon Kohden for medical electronic devices",
        body: "Ferozsons Laboratories established a partnership with Nihon Kohden for the distribution of medical electronic devices, expanding its medical technology portfolio.",

        image: "/images/about-history/2022.jpg",
        imageAlt: "Medical electronic devices in a clinical setting.",
        imagePosition: "left",
      },
    ],
  },
  {
    year: 2020,
    milestones: [
      {
        date: "2020",
        category: "product",
        title: "Launch of Remedia (Remdesivir) for COVID-19 treatment",
        body: "Under its voluntary licensing partnership with Gilead, Ferozsons Laboratories Limited launched Remedia (Remdesivir) in Pakistan for the treatment of severe COVID-19 in hospitalized patients, with the product also exported internationally and used to treat over 100,000 patients worldwide.",

        image: "/images/about-history/2020.png",
        imageAlt: "Medical professional handling COVID-19 treatment.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 2017,
    milestones: [
      {
        date: "2017",
        category: "collaboration",
        title: "Partnership with PanTheryx for DiaresQ",
        body: "Ferozsons Laboratories partnered with PanTheryx Inc., USA, to exclusively market DiaresQ, an innovative nutritional product for childhood diarrhea recognized in the Innovations 2030 Countdown Report by PATH, USAID, and NORAD.",

        image: "/images/about-history/2017.png",
        imageAlt: "Child healthcare product packaging.",
        imagePosition: "left",
      },
    ],
  },
  {
    year: 2016,
    milestones: [
      {
        date: "2016",
        category: "collaboration",
        title: "Agreement with GE Healthcare",
        body: "Ferozsons Laboratories signed an agreement with GE Healthcare to become a channel partner for the marketing and sale of value-segment medical devices in Pakistan.",

        image: "/images/about-history/2016.png",
        imageAlt: "Medical imaging or healthcare equipment.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 2014,
    milestones: [
      {
        date: "2014",
        category: "product",
        title: "Partnership with Gilead for Hepatitis C treatment",
        body: "Ferozsons Laboratories Limited entered into a partnership with Gilead Sciences Inc. to introduce Sovaldi, a breakthrough treatment for Hepatitis C. Pakistan became the first country to implement the access program, enabling thousands of patients to receive the therapy.",

        image: "/images/about-history/2014.png",
        imageAlt: "Hepatitis C treatment representation.",
        imagePosition: "left",
      },
    ],
  },
  {
    year: 2012,
    milestones: [
      {
        date: "2012",
        category: "collaboration",
        title: "Partnership with BioGaia",
        body: "Ferozsons Laboratories entered into a partnership with BioGaia to introduce the world’s leading premium Swedish probiotics in Pakistan.",

        image: "/images/about-history/2012.png",
        imageAlt: "Probiotic supplement product.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 2008,
    milestones: [
      {
        date: "2008",
        category: "acquisition",
        title: "Distribution rights for Boston Scientific devices",
        body: "Ferozsons Laboratories acquired distribution rights for the medical devices of Boston Scientific Inc., USA, a world-leading manufacturer of interventional medical devices.",

        image: "/images/about-history/2008.jpg",
        imageAlt: "Medical device equipment.",
        imagePosition: "left",
      },
    ],
  },
  {
    year: 2006,
    milestones: [
      {
        date: "2006",
        category: "collaboration",
        title: "Joint venture to establish BF Biosciences",
        body: "Ferozsons Laboratories signed a joint venture agreement with Bagó Group of Argentina to establish BF Biosciences, marking the creation of Pakistan’s first biopharmaceutical company.",

        image: "/images/about-history/2006.jpg",
        imageAlt: "Biopharmaceutical lab facility.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 2002,
    milestones: [
      {
        date: "2002",
        category: "collaboration",
        title: "Strategic partnerships for oncology and liver disease",
        body: "Ferozsons Laboratories entered into strategic partnerships with leading international companies, Curatis Pharma GmbH (Germany) and Bagó Group S.A. (Argentina), for the import and marketing of a range of biological products in oncology and liver disease.",

        image: "/images/about-history/2002.png",
        imageAlt: "Oncology research lab.",
        imagePosition: "left",
      },
    ],
  },
  {
    year: 1991,
    milestones: [
      {
        date: "1991",
        category: "manufacturing",
        title: "Manufacturing agreement with Procter & Gamble",
        body: "Entered into a manufacturing agreement with Procter & Gamble Pakistan to produce its flagship brand, Vicks VapoRub®.",

        image: "/images/about-history/1991.png",
        imageAlt: "Vicks VapoRub product.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 1964,
    milestones: [
      {
        date: "1964-1969",
        category: "collaboration",
        title:
          "Preferred pharmaceutical supplier to international organizations",
        body: "Recognized as a preferred pharmaceutical supplier to foreign missions and major international organizations, including the United Nations, the U.S. Government, and British Crown Agents.",
        image: "/images/about-history/1964-1969_.jpg",
        imageAlt: "International organization representation.",
        imagePosition: "left",
      },
      {
        date: "1964-1969",
        category: "collaboration",
        title: "Global collaborations with leading organizations",
        body: "The Company further strengthened its global presence by establishing collaborations with leading pharmaceutical organizations, including Chemie Grünenthal GmbH of Germany, The Boots Pure Drug Company of the United Kingdom, and Lakeside Laboratories Inc. (Colgate-Palmolive) of the United States.",
        image: "/images/about-history/1964-1969.jpg",
        imageAlt: "Global collaboration representation.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 1961,
    milestones: [
      {
        date: "1961",
        category: "expansion",
        title: "Expansion into international markets",
        body: "Expanded exports of high-quality pharmaceutical and chemical products to international markets, including Australia, Hong Kong, Jordan, Singapore, Turkey, and the United Kingdom.",

        image: "/images/about-history/1961.jpg",
        imageAlt: "Global export representation map.",
        imagePosition: "left",
      },
    ],
  },
  {
    year: 1960,
    milestones: [
      {
        date: "1960",
        category: "recognition",
        title: "Listed on Karachi Stock Exchange",
        body: "In 1960, we became the first Pakistani pharmaceutical company to be listed on the Karachi Stock Exchange (KSE) Limited, and have a consistent track record of delivering on our financial objectives. The company is a multiple-time recipient of the KSE Top 25 Companies Award.",

        image: "/images/about-history/1960.jpg",
        imageAlt: "Stock exchange building.",
        imagePosition: "right",
      },
    ],
  },
  {
    year: 1954,
    milestones: [
      {
        date: "1954",
        category: "foundation",
        title: "Ferozsons Laboratories established",
        body: "Ferozsons Laboratories Limited was thus established in 1954 as one of the first Pharmaceutical manufacturing companies in Pakistan, and has now entered its seventh decade of serving the cause of health and well-being in Pakistan and a growing number of international markets.",

        image: "/images/about-history/1954.jpg",
        imageAlt: "Historic pharmaceutical facility.",
        imagePosition: "left",
      },
    ],
  },
];

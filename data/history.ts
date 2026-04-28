export type TimelineItemStandard = {
  year: string;
  description: string;
  imageSrc: string;
  isSpecialLayout?: false;
};

export type TimelineItemSpecial = {
  year: string;
  isSpecialLayout: true;
  descriptionOne: string;
  descriptionTwo: string;
  imageSrcOne: string;
  imageSrcTwo: string;
};

export type TimelineItem = TimelineItemStandard | TimelineItemSpecial;

export const timelineData: TimelineItem[] = [
  {
    year: "1954",
    description:
      "Ferozsons Laboratories Limited was thus established in 1954 as one of the first Pharmaceutical manufacturing companies in Pakistan, and has now entered its seventh decade of serving the cause of health and well-being in Pakistan and a growing number of international markets.",
    imageSrc: "/images/about-history/1954.jpg",
  },
  {
    year: "1960",
    description:
      "In 1960, we became the first Pakistani pharmaceutical company to be listed on the Karachi Stock Exchange (KSE) Limited, and have a consistent track record of delivering on our financial objectives. The company is a multiple-time recipient of the KSE Top 25 Companies Award.",
    imageSrc: "/images/about-history/1960.jpg",
  },
  {
    year: "1961",
    description:
      "Expanded exports of high-quality pharmaceutical and chemical products to international markets, including Australia, Hong Kong, Jordan, Singapore, Turkey, and the United Kingdom.",
    imageSrc: "/images/about-history/1961.jpg",
  },
  {
    year: "1964-1969",
    isSpecialLayout: true,
    descriptionOne:
      "Recognized as a preferred pharmaceutical supplier to foreign missions and major international organizations, including the United Nations, the U.S. Government, and British Crown Agents.",
    descriptionTwo:
      "The Company further strengthened its global presence by establishing collaborations with leading pharmaceutical organizations, including Chemie Grünenthal GmbH of Germany, The Boots Pure Drug Company of the United Kingdom, and Lakeside Laboratories Inc. (Colgate-Palmolive) of the United States.",
    imageSrcOne: "/images/about-history/history-1964-1.jpg",
    imageSrcTwo: "/images/about-history/history-1964-2.png",
  },
  {
    year: "1991",
    description:
      "Entered into a manufacturing agreement with Procter & Gamble Pakistan to produce its flagship brand, Vicks VapoRub®.",
    imageSrc: "/images/about-history/history-1991.png",
  },
  {
    year: "2002",
    description:
      "Ferozsons Laboratories entered into strategic partnerships with leading international companies, Curatis Pharma GmbH (Germany) and Bagó Group S.A. (Argentina), for the import and marketing of a range of biological products in oncology and liver disease.",
    imageSrc: "/images/about-history/history-2002.png",
  },
  {
    year: "2006",
    description:
      "Ferozsons Laboratories signed a joint venture agreement with Bagó Group of Argentina to establish BF Biosciences (bfbio.com), marking the creation of Pakistan's first biopharmaceutical company.",
    imageSrc: "/images/about-history/history-2006.jpg",
  },
  {
    year: "2008",
    description:
      "Ferozsons Laboratories acquired distribution rights for the medical devices of Boston Scientific Inc., USA, a world-leading manufacturer of interventional medical devices.",
    imageSrc: "/images/about-history/history-2008.jpg",
  },
  {
    year: "2012",
    description:
      "Ferozsons Laboratories entered into a partnership with BioGaia to introduce the world's leading premium Swedish probiotics in Pakistan.",
    imageSrc: "/images/about-history/history-2012.jpg",
  },
  {
    year: "2014",
    description:
      "Ferozsons Laboratories Limited entered into a partnership with Gilead Sciences Inc. to introduce Sovaldi, a breakthrough treatment for Hepatitis C. Pakistan became the first country to implement the access program, enabling thousands of patients to receive the therapy.",
    imageSrc: "/images/about-history/history-2014.jpg",
  },
  {
    year: "2016",
    description:
      "Ferozsons Laboratories signed an agreement with GE Healthcare to become a channel partner for the marketing and sale of value-segment medical devices in Pakistan.",
    imageSrc: "/images/about-history/history-2016.jpg",
  },
  {
    year: "2017",
    description:
      "Ferozsons Laboratories partnered with PanTheryx Inc., USA, to exclusively market DiaresQ, an innovative nutritional product for childhood diarrhea recognized in the Innovations 2030 Countdown Report by PATH, USAID, and NORAD.",
    imageSrc: "/images/about-history/history-2017.jpg",
  },
  {
    year: "2020",
    description:
      "Under its voluntary licensing partnership with Gilead, Ferozsons Laboratories Limited launched Remedia (Remdesivir) in Pakistan for the treatment of severe COVID-19 in hospitalized patients, with the product also exported internationally and used to treat over 100,000 patients worldwide.",
    imageSrc: "/images/about-history/history-2020.jpg",
  },
  {
    year: "2022",
    description:
      "Ferozsons Laboratories established a partnership with Nihon Kohden for the distribution of medical electronic devices, expanding its medical technology portfolio.",
    imageSrc: "/images/about-history/history-2022.jpg",
  },
  {
    year: "2024",
    description:
      "Ferozsons Laboratories launched Sematide (Semaglutide), Pakistan's first locally manufactured GLP-1 medicine, representing a landmark achievement in bringing advanced biopharmaceutical innovation to the local healthcare market.",
    imageSrc: "/images/about-history/history-2024.jpg",
  },
];

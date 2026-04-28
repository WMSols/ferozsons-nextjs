export const csrHeroContent = {
  title: "Creating Impact",
  subtitle:
    "At Ferozsons Laboratories, giving back is not a programme — it is our purpose. From classrooms to clinical wards, we invest in the people and communities that define Pakistan.",
};

export const csrImpactStats = [
  { value: "7,000+", label: "School children reached" },
  { value: "50+", label: "Schools covered" },
  { value: "200+", label: "Teachers engaged" },
  { value: "4+", label: "Countries impacted" },
];

export type CSRCategory = "education" | "healthcare" | "arts" | "community";

export interface CSRInitiative {
  id: string;
  category: CSRCategory;
  title: string;
  partner?: string;
  location?: string;
  description: string;
  highlights?: string[];
  ongoing?: boolean;
}

export const csrCategories: { key: CSRCategory; label: string; image?: string }[] = [
  {
    key: "education",
    label: "Education",
    image: "/images/CSR/education-khalid-waheed-campus-the-citizens-foundation.png",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    image: "/images/CSR/S2.png",
  },
  {
    key: "arts",
    label: "Arts & Culture",
    image: "/images/CSR/arts-and-culture-the-citizen-foundation.png",
  },
  {
    key: "community",
    label: "Community",
    image: "/images/CSR/Lahore-Literary-Festival.png",
  },
];

export const csrInitiatives: CSRInitiative[] = [
  // ── EDUCATION ──────────────────────────────────────────────────────────────
  {
    id: "nop-lums",
    category: "education",
    title: "NOP Scholarships at LUMS",
    partner: "Lahore University of Management Sciences",
    location: "Lahore, Pakistan",
    description:
      "Ferozsons annually supports the National Outreach Programme (NOP) at LUMS through an endowment fund that provides full, need-based scholarships. Exceptional students from across Pakistan gain access to world-class education at the Syed Babar Ali School of Science & Engineering and the Mushtaq Gurmani School of Humanities & Social Sciences — fully funded from matriculation through undergraduate graduation.",
    highlights: [
      "Full undergraduate funding for high-achieving students",
      "Covers tuition, accommodation, and living expenses",
      "Multi-year annual commitment by Ferozsons",
    ],
    ongoing: true,
  },
  {
    id: "young-writers",
    category: "education",
    title: "Young Writers Workshop",
    partner: "LUMS",
    location: "Lahore, Pakistan",
    description:
      "A belief that a balanced society needs writers as much as it needs scientists drives Ferozsons' annual support of the LUMS Young Writers Story Competition & Workshop. Writers aged 18–26 compete nationally; eight winners are selected for a fully funded, week-long residential workshop taught by internationally published faculty writer Bilal Tanweer. Past guest writers include Mohsin Hamid (The Reluctant Fundamentalist) and Musharraf Ali Farooqui (Man Asia Literary Prize finalist).",
    highlights: [
      "Open national competition for writers aged 18–26",
      "8 winners receive fully funded residential workshop",
      "Taught by internationally published authors",
    ],
    ongoing: true,
  },
  {
    id: "khalid-waheed-campus",
    category: "education",
    title: "Khalid Waheed Campus",
    partner: "The Citizens Foundation",
    location: "Kot Addu, Muzaffargarh",
    description:
      "In memory of Ferozsons' founding Chief Executive, Mr. Khalid Waheed, the company and family co-funded the TCF Khalid Waheed Campus at Kot Addu, Muzaffargarh. With 10% of the world's out-of-school children living in Pakistan, primary education is among our most urgent national challenges. This campus stands as a lasting tribute — bringing quality schooling to one of the country's most underserved regions.",
    highlights: [
      "Dedicated campus honouring the company's founding CEO",
      "Addresses primary education access in rural Punjab",
      "Part of ongoing annual TCF partnership",
    ],
    ongoing: true,
  },
  {
    id: "kilo-of-kindness",
    category: "education",
    title: "Kilo of Kindness",
    partner: "Mövenpick Hotel Karachi",
    location: "Karachi, Pakistan",
    description:
      "Ferozsons supported Mövenpick's global Creating Impact campaign in Karachi, in which school supplies — books, stationery, and learning materials — were collected for The Street School, a charitable institution run by two determined teenagers providing education to underprivileged children in the city.",
    highlights: [
      "Donated school supplies to The Street School, Karachi",
      "Supported a youth-led grassroots education initiative",
    ],
  },
  {
    id: "heer-ranjha-tcf",
    category: "education",
    title: "Reviving Classic Literature for Education",
    partner: "The Citizens Foundation",
    location: "Pakistan",
    description:
      "Ferozsons supported a TCF fundraising production of the epic Punjabi folk tale Heer Ranjha, directed by Zain Ahmed. All proceeds from the event went directly to TCF, helping fund primary education for underprivileged children across the country. The performance also sought to rekindle young Pakistanis' connection with classic Urdu and Punjabi literary heritage.",
    highlights: [
      "All proceeds directed to TCF's education programmes",
      "Celebrated classic Urdu-Punjabi literary heritage",
    ],
  },

  // ── HEALTHCARE ─────────────────────────────────────────────────────────────
  {
    id: "hep-c-schools",
    category: "healthcare",
    title: "Hepatitis C Awareness in Schools",
    partner: "Ali Institute of Education",
    location: "Bhakkar, Hafizabad & Lahore",
    description:
      "Ferozsons collaborated with Ali Institute of Education (AIE) to carry Hepatitis awareness directly into school communities across Punjab. With Hepatitis B & C prevalence estimated at up to 10% in Pakistan, this campaign empowered children to become ambassadors of prevention — taking life-saving knowledge back to their families and neighbourhoods.",
    highlights: [
      "50+ schools across Bhakkar, Hafizabad, and Lahore",
      "7,000+ children and 200+ teachers engaged",
      "Board games featuring the Moochander character by Musharraf Ali Farooqi",
      "Aligned with WHO's 2030 global Hepatitis elimination goal",
    ],
    ongoing: true,
  },
  {
    id: "umang-mental-health",
    category: "healthcare",
    title: "UMANG Mental Health Support",
    partner: "UMANG",
    location: "Pakistan",
    description:
      "As the pandemic receded, Ferozsons recognised that a mental health crisis was emerging in its wake. Through an unrestricted grant to UMANG, Ferozsons helped provide psychosocial support to frontline healthcare workers, patients, and caregivers — groups disproportionately exposed to trauma and burnout. Mental health, too often ignored, is central to the company's broader vision of holistic wellbeing.",
    highlights: [
      "Unrestricted grant enabling UMANG's outreach",
      "Focus on healthcare workers, patients, and caregivers",
      "Addresses the post-pandemic mental health gap",
    ],
    ongoing: true,
  },

  // ── ARTS ────────────────────────────────────────────────────────────────────
  {
    id: "art-clinical-pakistan",
    category: "arts",
    title: "Art in Clinical Settings — Pakistan",
    partner: "Mayo Hospital · JPMC · Ziauddin University Hospital",
    location: "Lahore & Karachi",
    description:
      "Working with artists and institutions across Pakistan, Ferozsons has transformed patient wards and waiting areas into therapeutic spaces. Projects include the patient ward at Mayo Hospital Lahore, the waiting area at Jinnah Postgraduate Medical Center Karachi, and most recently the children's play area at Ziauddin University Hospital's main Karachi campus — a vibrant canvas of colour designed to ease anxiety and bring comfort to young patients and families.",
    highlights: [
      "Mayo Hospital patient ward, Lahore",
      "JPMC waiting area, Karachi",
      "Ziauddin Hospital children's play area, Karachi",
      "Led with input from Adeela Suleman, Head of Fine Arts, Indus Valley School",
    ],
    ongoing: true,
  },
  {
    id: "art-for-humanity-nca",
    category: "arts",
    title: "Art for Humanity — NCA Scholarships",
    partner: "National College of Arts, Lahore",
    location: "Lahore, Pakistan",
    description:
      "BF Biosciences Limited partners with the National College of Arts to provide need-based scholarships for students. In return, NCA includes an annual field elective in which third-year students and faculty collaborate with the company to improve the environment of a public-sector hospital through art. The inaugural elective in 2012 transformed the Oncology Ward at Mayo Hospital Lahore.",
    highlights: [
      "Need-based scholarships for NCA students",
      "Annual hospital art elective embedded in NCA curriculum",
      "First project: Oncology Ward, Mayo Hospital, 2012",
    ],
    ongoing: true,
  },
  {
    id: "art-for-humanity-sri-lanka",
    category: "arts",
    title: "Art for Humanity — Sri Lanka",
    partner: "University of Kelaniya",
    location: "Sri Lanka",
    description:
      "Now in its fourth year, this collaboration between Ferozsons and the Visual Arts & Design department at the University of Kelaniya brings art into clinical and educational spaces across Sri Lanka. Recent projects at the National Institute of Medical Health and St. Joseph's School for Deaf and Differently Abled Children in Ragama generated deeply moving responses — with children experiencing and interacting with the artwork in ways that moved even the project coordinators to tears of joy.",
    highlights: [
      "Four consecutive years of artistic intervention",
      "National Institute of Medical Health, Sri Lanka",
      "St. Joseph's School for Deaf and Differently Abled, Ragama",
      "Student-curated exhibition before installation",
    ],
    ongoing: true,
  },
  {
    id: "lahore-literary-festival",
    category: "arts",
    title: "Lahore Literary Festival",
    location: "Lahore, Pakistan",
    description:
      "In line with its commitment to literature and creative expression, Ferozsons is a recurring sponsor of the Lahore Literary Festival (LLF). The free, public annual event brings together prominent writers, historians, artists, and opinion leaders from Pakistan and around the world to discuss the social, political, and cultural currents shaping our times. Ferozsons supported the fifth edition of LLF in February 2017.",
    highlights: [
      "Free and open to the public",
      "Prominent national and international voices",
      "Annual, recurring sponsorship",
    ],
    ongoing: true,
  },

  // ── COMMUNITY ──────────────────────────────────────────────────────────────
  {
    id: "tcf-primary-education",
    category: "community",
    title: "The Citizens Foundation — Ongoing Support",
    partner: "The Citizens Foundation",
    location: "Pakistan-wide",
    description:
      "The Citizens Foundation (TCF) was founded in 1995 by a group of citizens who believed education could transform Pakistan. Today it is one of the country's largest non-profit education networks. Ferozsons has been a long-standing supporter of TCF through annual funding, event sponsorships, and the Khalid Waheed Campus endowment — collectively contributing to accessible primary education for thousands of underserved children.",
    highlights: [
      "Support since TCF's early years",
      "Annual funding and event sponsorships",
      "TCF Khalid Waheed Campus, Kot Addu",
    ],
    ongoing: true,
  },
];

// Make sure your type looks something like this:
export interface csrSlideshowImage {
  id: number;
  url: string;
  width: number;
  height: number;
}

export const csrSlideshowImages: csrSlideshowImage[] = [
  {
    id: 1,
    url: "/images/CSR/slideshow/1_banner-creating-impact.jpg",
    width: 6400,
    height: 4267
  },
  {
    id: 2,
    url: "/images/CSR/slideshow/art-.png",
    width: 1536,
    height: 1024
  },
  {
    id: 3,
    url: "/images/CSR/slideshow/art-breathes-life.png",
    width: 1024,
    height: 1536
  },
  {
    id: 4,
    url: "/images/CSR/slideshow/arts-and-culture-the-citizen-foundation.png",
    width: 1536,
    height: 1024
  },
  {
    id: 5,
    url: "/images/CSR/slideshow/education_khalid-waheed-campus-the-citizens-foundation.png",
    width: 1536,
    height: 1024
  },
  {
    id: 6,
    url: "/images/CSR/slideshow/img-7683.jpeg",
    width: 4032,
    height: 3024
  },
  {
    id: 7,
    url: "/images/CSR/slideshow/lahore-literaryfestival.png",
    width: 1536,
    height: 1024
  },
  {
    id: 8,
    url: "/images/CSR/slideshow/lums-writers.png",
    width: 1157,
    height: 1024
  },
  {
    id: 9,
    url: "/images/CSR/slideshow/nca-.png",
    width: 834,
    height: 1024
  },
  {
    id: 10,
    url: "/images/CSR/slideshow/nop-.png",
    width: 1536,
    height: 1024
  }
];
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

export type CSRCategory =
  | "arts_culture"
  | "education"
  | "zero_hunger"
  | "health"
  | "climate_action"
  | "community";

export const csrCategories: { key: CSRCategory; label: string; image: string }[] = [
  {
    key: "arts_culture",
    label: "Arts & Culture",
    image: "/images/CSR/initiatives/Arts-and-Culture.webp",
  },
  {
    key: "education",
    label: "Quality Education",
    image: "/images/CSR/initiatives/Quality-Impact.webp",
  },
  {
    key: "zero_hunger",
    label: "Zero Hunger",
    image: "/images/CSR/initiatives/Zero-Hunger.webp",
  },
  {
    key: "health",
    label: "Health & Well-being",
    image: "/images/CSR/initiatives/Health.webp",
  },
  {
    key: "climate_action",
    label: "Climate Action",
    image: "/images/CSR/initiatives/Climate-Impact.webp",
  },
  {
    key: "community",
    label: "Community",
    image: "/images/CSR/initiatives/Community.webp",
  },
];
export interface CSRInitiative {
  id: string;
  category: CSRCategory;
  title: string;
  description: string;
  partner?: string;
  location?: string;
  ongoing?: boolean;
  highlights?: string[];
}

export const csrInitiatives: CSRInitiative[] = [
  // --- ARTS & CULTURE ---
  {
    id: "ac-1",
    category: "arts_culture",
    title: "Lahore Biennale Foundation",
    description: "Ferozsons Laboratories is a founding patron and long-standing supporter of the Lahore Biennale Foundation (LBF), a non-profit organisation committed to advancing contemporary art through inclusion, collaboration and public engagement. This association reflects our belief that meaningful impact extends beyond healthcare to cultural enrichment, creative expression and social dialogue. Our Chief Executive Officer, Mr. Osman Khalid Waheed, helped establish LBF and served as its founding Chair, contributing to the development of a platform that connects Pakistani artists and audiences with contemporary art from across the region and the world. Through its continued support of LBF, Ferozsons helps strengthen access to the arts and Lahore’s presence on the international cultural landscape.",
    ongoing: true,
  },
  {
    id: "ac-2",
    category: "arts_culture",
    title: "Young Writers Workshop",
    description: "Empowering the next generation of creative voices through intensive writing workshops.",
    ongoing: true,
  },
  {
    id: "ac-3",
    category: "arts_culture",
    title: "Lahore Literary Festival",
    description: "Continued sponsorship and support for one of South Asia's premier cultural events, promoting dialogue and literature.",
    ongoing: true,
  },
  {
    id: "ac-4",
    category: "arts_culture",
    title: "Reviving Classic Literature for Education",
    description: "An initiative aimed at reintroducing classic literature into modern educational frameworks.",
  },

  // --- QUALITY EDUCATION ---
  {
    id: "qe-1",
    category: "education",
    title: "Ferozsons Initiative for Research Excellence (FIRE) at LUMS",
    partner: "LUMS & iHart",
    description: "Service, education, and research are the three pillars of academic medicine. While Pakistan's healthcare institutions generate vast amounts of patient data, research remains underdeveloped, limiting contributions to global medical knowledge, evidence-based local treatment guidelines, and informed public health policymaking. To help bridge this gap, the Ferozsons Initiative for Research Excellence (FIRE) was launched in 2023 through a collaboration between Ferozsons Laboratories, LUMS, and iHart. FIRE serves as a knowledge hub, building research capacity among healthcare professionals by offering training, tools, and research support for clinical and population-based studies. Since its launch, FIRE has successfully delivered two Clinical Research Design Courses (May and December 2024), training around 70 healthcare professionals. Participants have gone on to secure international research grants, publish their work, and strengthen the quality of clinical research in Pakistan.",
    ongoing: true,
  },
  {
    id: "qe-2",
    category: "education",
    title: "LUMS NOP Scholarships",
    description: "Supporting talented students across Pakistan through the National Outreach Programme at LUMS.",
    ongoing: true,
  },
  {
    id: "qe-3",
    category: "education",
    title: "Khalid Waheed Campus",
    description: "Providing quality educational infrastructure and facilities for underprivileged communities.",
  },
  {
    id: "qe-4",
    category: "education",
    title: "Art for Humanity-NCA Scholarship",
    description: "Empowering talented art students at the National College of Arts through dedicated financial support.",
    ongoing: true,
  },

  // --- ZERO HUNGER ---
  {
    id: "zh-1",
    category: "zero_hunger",
    title: "Ferozsons and Rizq Joined Hands to Combat Hunger",
    partner: "Rizq Foundation",
    description: "Lahore, April 16, 2021: Ferozsons Laboratories Limited partnered with Rizq Foundation to launch the Ferozsons Omega Initiative, supporting access to safe and nutritious food for patients and underserved communities across Pakistan. The Memorandum of Understanding was signed by Mr. Osman Khalid Waheed, CEO of Ferozsons Laboratories, and Mr. Qasim Javaid, Founder of Rizq, at the Ferozsons Head Office in Lahore. Through financial assistance and field support, the initiative provided meals to underprivileged patients and their families at hospitals during Ramadan. It also included the “Save Food, Save Life” awareness campaign, encouraging restaurants and households to reduce food waste and redirect surplus meals to communities in need. “Lack of nutrition is a significant contributor to disease in Pakistan. Through the Ferozsons Omega Initiative, we aim to support the nutritional needs of patients and families in a safe and hygienic manner,” said Mr. Osman Khalid Waheed. Aligned with the United Nations Sustainable Development Goals, the collaboration reflected a shared commitment to addressing food insecurity, improving health outcomes and supporting vulnerable communities across Pakistan.",
  },
  {
    id: "zh-2",
    category: "zero_hunger",
    title: "Kilo of Kindness",
    description: "An ongoing food drive aimed at distributing essential nutritional staples to vulnerable populations.",
    ongoing: true,
  },

  // --- HEALTH & WELL-BEING ---
  {
    id: "hw-1",
    category: "health",
    title: "Hepatitis C Awareness at Schools",
    description: "Targeted educational campaigns within the school system to promote early awareness and prevention of Hepatitis C.",
    ongoing: true,
  },
  {
    id: "hw-2",
    category: "health",
    title: "UMANG Mental Health Support",
    description: "Providing critical resources and support structures to address mental health challenges and promote psychological well-being.",
    ongoing: true,
  },
  {
    id: "hw-3",
    category: "health",
    title: "Art in Clinical Settings",
    description: "Integrating art into hospital environments to reduce patient stress and aid in the healing process.",
  },
  {
    id: "hw-4",
    category: "health",
    title: "Art for Humanity Sri Lanka",
    description: "An international extension of our art therapy and humanitarian support initiatives.",
  },

  // --- CLIMATE ACTION ---
  {
    id: "ca-1",
    category: "climate_action",
    title: "Minus Fifteen X BF Biosciences",
    partner: "The Minus Fifteen Project",
    description: "As Ferozsons Laboratories Limited celebrates 70 Years of Trust – A Lifetime of Care, we continue to expand our commitment to healthier communities—not only through advancing healthcare, but also through protecting the environment that sustains it. Building on our sustainability platform, Act Today Impact Tomorrow, we are proud to launch the next chapter of our journey: Be An Icon of Sustainability. As part of this initiative, BF Biosciences Limited has entered into a strategic partnership with The Minus Fifteen Project to support a data-driven approach to climate resilience in Pakistan. The partnership aims to build a citywide environmental monitoring network and support interventions contributing toward reducing Lahore’s temperature. The insights generated will help better understand urban environmental trends, support practical interventions to mitigate the impact of extreme heat, and contribute to the long-term vision of reducing Lahore's temperature through evidence-based climate action. The partnership was formally inaugurated through the signing of a MoU, followed by the unveiling of the climate monitoring device that will serve as the foundation of this initiative. The ceremony also featured keynote addresses by Zaib Husain, Founder of The Minus Fifteen Project, and from the leadership of Ferozsons Laboratories Limited and BF Biosciences Limited, reaffirming a shared pledge to champion sustainability through collaboration, innovation, and measurable action. As climate change continues to emerge as one of the greatest challenges to human health, this collaboration reflects our belief that healthier communities begin with a healthier environment. It also supports our shared commitment to advancing the United Nations Sustainable Development Goals. Because creating a healthier tomorrow means caring for both people and the planet.",
    ongoing: true,
  },
  
  // --- COMMUNITY ---
  {
    id: "c-1",
    category: "community",
    title: "Hepatitis Free Pakistan – Hepatitis Free Ferozsons",
    description: "Pakistan is now home to the world's largest population suffering from viral Hepatitis. This poses an existential threat to Pakistan and its overburdened health system. We are privileged to partner with our esteemed faculty and dedicated healthcare professionals to advocate best practices for combating viral hepatitis. Awareness, early diagnosis and timely management is key to Pakistan's effort in battling this epidemic and ensuring the well-being of our fellow citizens. Therefore, with our key initiative “Hepatitis Free Pakistan,” we consistently aim at tackling the disease through awareness, prevention, elimination and capacity building. As an extension to our corporate initiative, we have initiated Hepatitis Free Ferozsons - a company-wide Hepatitis awareness, screening and treatment as a micro-elimination activity for the wellbeing and health of our employees. Under this initiative, the company successfully conducted screening of its employees for Hepatitis B and C.",
    ongoing: true,
  },
  {
    id: "c-2",
    category: "community",
    title: "Will-Med",
    description: "Over the past decade, the number of women joining the healthcare workforce has surged. Yet, despite this growth, women continue to be underrepresented in leadership positions within medicine on a global scale. To bridge this gap and empower women in leadership roles, Ferozsons Laboratories Limited launched the Women in Leadership League in Medicine (Will-Med) forum, in collaboration with key figures from the medical community, on International Women’s Day. The goal of Will-Med is to inspire female workforce and female medical students to not only enter the healthcare workforce but to thrive and reach their full potential. This forum will offer mentorship, training, and support to emerging women leaders in medicine and surgery, while also hosting webinars, symposia, and workshops to foster leadership development and networking. Pakistan is fortunate to have many exceptionally talented women in the health sector. However, despite the presence of outstanding role models, women still face underrepresentation in leadership roles. The launch of the Will-Med forum reinforces our commitment to closing this gap, believing that improving women's leadership in healthcare will significantly enhance patient care across the country.",
    ongoing: true,
  },
  {
    id: "c-3",
    category: "community",
    title: "Slim Possible",
    partner: "BF Biosciences & Ferozsons",
    description: "A Public Health initiative for healthcare awareness about Obesity in Pakistan - powered by BF Biosciences Limited & Ferozsons Laboratories Limited. The initiative focuses on the role and importance of lifestyle i.e. diet & exercise along with need if any of medication to treat or manage obesity and related diseases. It also highlights the importance of medical advice prior to receiving any treatment or use of medication. The newly launched Slim Possible website is a digital platform creating awareness as well as connecting expert physicians with patients under one umbrella for medical advice.",
    ongoing: true,
  },
  {
    id: "c-4",
    category: "community",
    title: "Citizen Foundation-Ongoing Support",
    description: "Enduring financial and infrastructural support for the Citizen Foundation to expand educational opportunities in marginalized communities.",
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
    id: 3,
    url: "/images/CSR/slideshow/art-breathes-life.webp",
    width: 1024,
    height: 1536
  },
  {
    id: 4,
    url: "/images/CSR/slideshow/arts-and-culture-the-citizen-foundation.webp",
    width: 1536,
    height: 1024
  },
  {
    id: 5,
    url: "/images/CSR/slideshow/education_khalid-waheed-campus-the-citizens-foundation.webp",
    width: 1536,
    height: 1024
  },
  {
    id: 7,
    url: "/images/CSR/slideshow/lahore-literaryfestival.webp",
    width: 1536,
    height: 1024
  },
  {
    id: 8,
    url: "/images/CSR/slideshow/lums-writers.webp",
    width: 1157,
    height: 1024
  },
  {
    id: 9,
    url: "/images/CSR/slideshow/nca-.webp",
    width: 834,
    height: 1024
  },
  {
    id: 10,
    url: "/images/CSR/slideshow/nop-.webp",
    width: 1536,
    height: 1024
  }
];

// CSR Impact Card Data
export const CSRImpactCardData = [
  {
    id: 1,
    heading: "Creating Stronger Communities Through Lasting Impact",
    description: "Ferozsons' corporate vision has always centred on creating a better world for the people around us. Our Impact focus spans four pillars: education, healthcare, arts & culture, and community — because we believe that health, knowledge, and creative expression are equally essential to a flourishing society. Many of these initiatives are supported year on year as part of our enduring commitment to Pakistan and beyond.",
    image: "/images/CSR/initiatives/Community.webp",
  }
];

// CSR Investors cards data
export const CSRInvestorsCardsData = [
  {
    id: 1,
    title: "Ferozsons Solar Park",
    paragraphs: [
      "Our 1 MW solar park reflects our commitment to environmental stewardship by harnessing clean, renewable energy to power our operations. By reducing our reliance on conventional grid electricity, the facility supports our efforts to improve energy efficiency and advance a more sustainable operating model.",
      "The solar park is expected to generate approximately 1.3–1.7 GWh of renewable electricity annually, avoiding an estimated 750–900 tonnes of CO₂ emissions each year. This investment represents a meaningful step in reducing our operational carbon footprint while contributing to Pakistan's transition towards a cleaner energy future."
    ],
    // Placeholder image for solar park
    image: "/images/CSR/Solar.webp", 
    linkText: "Learn about our Environmental, Social & Governance Policy",
    linkHref: "/investors",
    imagePosition: "left"
  },
  {
    id: 2,
    title: "Water Effluent Plant",
    paragraphs: [
      "Our Effluent Treatment Plant (ETP) reflects our commitment to responsible water management and environmental stewardship.",
      "By treating wastewater before its discharge, we help minimize our environmental impact, promote regulatory compliance, and support the sustainable use of water resources.",
      "Through effective wastewater treatment, we help protect local water resources and ecosystems while advancing our broader commitment to environmental sustainability."
    ],
    // Placeholder image for water facility
    image: "/images/CSR/Water.webp", 
    linkText: "Learn more about our Environment, Health & Safety Policy",
    linkHref: "/investors",
    imagePosition: "right"
  }
];
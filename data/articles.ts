export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  type: "news" | "story";
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Ferozsons Laboratories Reports Strong Q3 2024 Results",
    excerpt: "The company reported a significant increase in revenue driven by strong performance across its hepatology and cardiovascular portfolios.",
    date: "2024-10-15",
    category: "Corporate",
    type: "news",
  },
  {
    id: "2",
    title: "New Partnership Announcement with Global Pharma Leader",
    excerpt: "Ferozsons Laboratories enters strategic alliance to bring innovative treatments to Pakistan's healthcare market.",
    date: "2024-09-28",
    category: "Partnerships",
    type: "news",
  },
  {
    id: "3",
    title: "Advancing Hepatitis C Treatment Access in Pakistan",
    excerpt: "Through our partnership with Gilead Sciences, we continue to expand access to life-saving hepatitis C treatments across the country.",
    date: "2024-09-10",
    category: "Healthcare",
    type: "news",
  },
  {
    id: "4",
    title: "Annual Creating Impact Report 2024 Published",
    excerpt: "Our comprehensive report highlights community engagement, educational scholarships, and environmental sustainability initiatives.",
    date: "2024-08-20",
    category: "Creating Impact",
    type: "news",
  },
  {
    id: "5",
    title: "A Patient's Journey: Overcoming Hepatitis C",
    excerpt: "Read about how modern treatment options provided through Ferozsons changed the life of a young mother from Lahore.",
    date: "2024-07-15",
    category: "Patient Stories",
    type: "story",
  },
  {
    id: "6",
    title: "Behind the Scenes: Quality Assurance at Ferozsons",
    excerpt: "Our state-of-the-art quality control labs ensure every product meets the highest international standards of safety and efficacy.",
    date: "2024-07-01",
    category: "Inside Ferozsons",
    type: "story",
  },
  {
    id: "7",
    title: "Community Health Camps: Reaching the Unreached",
    excerpt: "Ferozsons conducted free health screening camps across rural Punjab, providing access to vital diagnostics and medicines.",
    date: "2024-06-18",
    category: "Creating Impact",
    type: "story",
  },
  {
    id: "8",
    title: "NOP Scholarship Recipients Excel at LUMS",
    excerpt: "Students sponsored by the Ferozsons NOP Scholarship program achieve outstanding academic results and prepare to contribute to Pakistan's healthcare sector.",
    date: "2024-06-01",
    category: "Education",
    type: "story",
  },
];

export const pressReleases = [
  { title: "FY 2024 Annual Report", date: "2024-10-01", downloadUrl: "#" },
  { title: "Q3 2024 Financial Results", date: "2024-09-30", downloadUrl: "#" },
  { title: "Q2 2024 Financial Results", date: "2024-06-30", downloadUrl: "#" },
  { title: "Q1 2024 Financial Results", date: "2024-03-31", downloadUrl: "#" },
  { title: "FY 2023 Annual Report", date: "2023-10-01", downloadUrl: "#" },
  { title: "Partnership Announcement – Gilead Sciences", date: "2023-08-15", downloadUrl: "#" },
];

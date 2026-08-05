export interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  megaImage?: string;
  megaImageTitle?: string;
  megaImageSubtitle?: string;
  megaImageLink?: string;
  children?: NavChild[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    description: "For over 70 years, Ferozsons Laboratories Limited has been putting patients first.",
    megaImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    megaImageTitle: "Putting Patients First Since 1956",
    megaImageSubtitle: "Discover Our Company",
    megaImageLink: "/about",
    children: [
      { label: "Our History", href: "/about/history" },
      { label: "Company Overview", href: "/about/overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "Message from the CEO", href: "/about/ceo-message" },
      { label: "Board of Directors", href: "/about/board" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    description: "Advancing healthcare through innovative medicines across multiple therapeutic areas.",
    // No image here so it triggers the multi-column category layout
    children: [
      { label: "Medicine Categories", href: "/products" },
      { label: "All Products", href: "/products/all" },
      { label: "Pharmaceuticals", href: "/products/pharmaceuticals" },
      { label: "Medical Technologies", href: "/products/devices" },
      { label: "Report a product concern", href: "/report" },
    ],
  },
  {
    label: "Partnerships",
    href: "/partnerships",
    description: "Collaborating with global innovators to bring the best healthcare solutions to the regions we serve.",
    megaImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    megaImageTitle: "Global Network",
    megaImageSubtitle: "See Our Partners",
    megaImageLink: "/partnerships",
    children: [
      { label: "International Partners", href: "/partnerships/international" },
      { label: "Local Alliances", href: "/partnerships/local" },
      { label: "Joint Ventures", href: "/partnerships/jv" },
    ],
  },
  {
    label: "Global Presence",
    href: "/global-presence",
    description: "Expanding our footprint across borders to ensure our healthcare solutions reach patients worldwide.",
    megaImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    megaImageTitle: "International Reach",
    megaImageSubtitle: "Explore Our Markets",
    megaImageLink: "/global-presence",
    children: [
      { label: "Export Markets", href: "/global-presence/exports" },
      { label: "International Operations", href: "/global-presence/operations" },
      { label: "Global Distribution", href: "/global-presence/distribution" },
    ],
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    description: "State-of-the-art facilities ensuring the highest standards of quality and safety in every product we make.",
    megaImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    megaImageTitle: "World-Class Facilities",
    megaImageSubtitle: "Tour Our Plants",
    megaImageLink: "/manufacturing",
    children: [
      { label: "Contract Manufacturing", href: "/manufacturing/contract" },
      { label: "Quality Assurance", href: "/manufacturing/qa" },
      { label: "Facilities", href: "/manufacturing/facilities" },
    ],
  },
  {
    label: "ESG",
    href: "/csr",
    description: "Committed to sustainable practices, environmental stewardship, and creating a positive social impact in our communities.",
    megaImage: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800",
    megaImageTitle: "Sustainable Future",
    megaImageSubtitle: "Read Our ESG Report",
    megaImageLink: "/esg",
    children: [
      { label: "Environmental Impact", href: "/esg/environment" },
      { label: "Social Responsibility", href: "/esg/social" },
      { label: "Corporate Governance", href: "/esg/governance" },
    ]
  },
];

export const secondaryNavItems: NavItem[] = [
  {
    label: "Investors",
    href: "/investors",
    description: "Access our latest financial reports, stock performance, and corporate governance updates.",
    megaImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    megaImageTitle: "Financial Highlights",
    megaImageSubtitle: "Visit Investor Relations",
    megaImageLink: "/investors",
    children: [
      { label: "Financial Reports", href: "/investors/reports" },
      { label: "Stock Information", href: "/investors/stock" },
      { label: "Corporate Governance", href: "/investors/governance" },
      { label: "Investor Notices", href: "/investors/notices" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Join a dedicated team committed to putting patients first and making a real impact in healthcare.",
    megaImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    megaImageTitle: "Grow With Us",
    megaImageSubtitle: "Explore Opportunities",
    megaImageLink: "/careers",
    children: [
      { label: "Life at Ferozsons", href: "/careers/life" },
      { label: "Current Openings", href: "/careers/jobs" },
      { label: "Internship Programs", href: "/careers/internships" },
      { label: "Diversity & Inclusion", href: "/careers/diversity" },
    ],
  },
];
export const footerLinks = {
  column1: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Investor Information", href: "/investors" },
  ],
  column2: [
    { label: "Newsroom", href: "/newsroom" },

    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    // { label: "Patients", href: "/patients" },
  ],
  column3: [
    { label: "Creating Impact", href: "/csr" },
    { label: "Board of Directors", href: "/board-of-directors" },
  ],
};

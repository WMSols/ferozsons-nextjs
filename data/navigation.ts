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
    megaImage: "/nav-about.webp",
    megaImageTitle: "Putting Patients First Since 1956",
    megaImageSubtitle: "Discover Our Company",
    megaImageLink: "/about",
    children: [
      { label: "Our History", href: "/about/history" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "Message from the CEO", href: "/about/ceo-message" },
      { label: "Board of Directors", href: "/board-of-directors" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    description: "Advancing healthcare through innovative medicines across multiple therapeutic areas.",
    // No image here so it triggers the multi-column category layout
    children: [
      { label: "Medicine Categories", href: "/products?category=antibiotics" },
      { label: "All Products", href: "/products" },
      { label: "Pharmaceuticals", href: "/products/pharmaceuticals" },
      { label: "Medical Technologies", href: "/products/medical-technologies" },
      { label: "Report a product concern", href: "/products/product-concern" },
    ],
  },
  {
    label: "Partnerships",
    href: "/partnerships",
    description: "We believe meaningful healthcare progress is achieved through trusted partnerships and a shared commitment to patient care. ",
    megaImage: "/nav-partnerships.webp",
    megaImageSubtitle: "Explore Our Partners",
    megaImageLink: "/partnerships",
  },
  {
    label: "Global Presence",
    href: "/global-presence",
    description: "Delivering trusted, high-quality pharmaceutical products to over 30 countries.",
    megaImage: "/global-presence/Secondary-GP.webp",
    megaImageSubtitle: "View Our Global Presence",
    megaImageLink: "/global-presence",
  },
  {
    label: "Manufacturing",
    href: "/contract-manufacturing",
    description: "A fully cGMP-compliant pharmaceutical manufacturing facility delivering world-class formulations for domestic and global markets since 1956.",
    megaImage: "/images/contract-manufacturing/slideshow/vjhvjvhg.webp",
    megaImageSubtitle: "Learn About Our Manufacturing",
    megaImageLink: "/contract-manufacturing",

  },
  {
    label: "ESG",
    href: "/csr",
    description: "We are committed to creating lasting value through sustainable practices, social impact, and responsible business.",
    megaImage: "/images/CSR/initiatives/Community.webp",
    megaImageSubtitle: "See Our Impact",
    megaImageLink: "/csr",
  },
];

export const secondaryNavItems: NavItem[] = [
  {
    label: "Investors",
    href: "/investors",
    description: "We enhance shareholder value by collaborating for excellence and upholding the highest standards of ethics and transparency.",
    megaImage: "/nav-investors.webp",
    megaImageSubtitle: "Investor Information",
    megaImageLink: "/investors",
    children: [
      { label: "Newsroom ", href: "/newsroom" },
      { label: "Investors Information", href: "/investors" },
      { label: "ESG", href: "/csr" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    description: "We are committed to employee development through continuous learning and leadership opportunities.",
    megaImage: "/images/careers/values.webp",
    megaImageSubtitle: "Find your role at Ferozsons",
    megaImageLink: "/careers",
  },
];
export const footerLinks = [
  {
    title: "About Us",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our History", href: "/about/history" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "Message from the CEO", href: "/about/ceo-message" },
      { label: "Board of Directors", href: "/board-of-directors" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Medicine Categories", href: "/products?category=antibiotics" },
      { label: "Pharmaceuticals", href: "/products/pharmaceuticals" },
      { label: "Medical Technologies", href: "/products/medical-technologies" },
      { label: "Report a Product Concern", href: "/products/product-concern" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Global Presence", href: "/global-presence" },
      { label: "Manufacturing", href: "/contract-manufacturing" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "ESG", href: "/csr" },
    ],
  },
  {
    title: " ",
    links: [
      { label: "Investor Information", href: "/investors" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Site Map", href: "/sitemap" },
];

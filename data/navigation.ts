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
      { label: "Medicine Categories", href: "/products" },
      { label: "All Products", href: "/products" },
      { label: "Pharmaceuticals", href: "/products/pharmaceuticals" },
      { label: "Medical Technologies", href: "/products/medical-technologies" },
      { label: "Report a product concern", href: "/products/product-concern" },
    ],
  },
  {
    label: "Partnerships",
    href: "/partnerships",
    description: "Collaborating with global innovators to bring the best healthcare solutions to the regions we serve.",
    megaImage: "/nav-partnerships.webp",
    megaImageSubtitle: "Explore Our Partners",
    megaImageLink: "/partnerships",
  },
  {
    label: "Global Presence",
    href: "/global-presence",
    description: "Expanding our footprint across borders to ensure our healthcare solutions reach patients worldwide.",
    megaImage: "/global-presence/Secondary-GP.webp",
    megaImageSubtitle: "View Our Global Presence",
    megaImageLink: "/global-presence",
  },
  {
    label: "Manufacturing",
    href: "/contract-manufacturing",
    description: "State-of-the-art facilities ensuring the highest standards of quality and safety in every product we make.",
    megaImage: "/images/contract-manufacturing/slideshow/vjhvjvhg.webp",
    megaImageSubtitle: "Learn About Our Manufacturing",
    megaImageLink: "/contract-manufacturing",

  },
  {
    label: "ESG",
    href: "/csr",
    description: "Committed to sustainable practices, environmental stewardship, and creating a positive social impact in our communities.",
    megaImage: "/images/CSR/initiatives/Community.webp",
    megaImageSubtitle: "See Our Impact",
    megaImageLink: "/csr",
  },
];

export const secondaryNavItems: NavItem[] = [
  {
    label: "Investors",
    href: "/investors",
    description: "Access our latest financial reports, stock performance, and corporate governance updates.",
    megaImage: "/nav-investors.webp",
    megaImageSubtitle: "Investor Information",
    megaImageLink: "/investors",
    children: [
      { label: "Newsroom ", href: "/newsroom" },
      { label: "Investors Information", href: "/investors" },
      { label: "Our Impact", href: "/csr" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Join a dedicated team committed to putting patients first and making a real impact in healthcare.",
    megaImage: "/images/careers/values.webp",
    megaImageSubtitle: "Find your role at Ferozsons",
    megaImageLink: "/careers",
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
  ],
  column3: [
    { label: "Creating Impact", href: "/csr" },
    { label: "Board of Directors", href: "/board-of-directors" },
  ],
};

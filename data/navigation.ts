export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const PRODUCTS_DROPDOWN_PLACEHOLDER_LABEL =
  "Products__DynamicCategories";

export const mainNavItems: NavItem[] = [

  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "History", href: "/about/history" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "Message from the CEO", href: "/about/ceo-message" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      // Replaced at runtime in `components/layout/Navbar.tsx` with categories from Strapi.
      { label: PRODUCTS_DROPDOWN_PLACEHOLDER_LABEL, href: "/products" },
      { label: "All Products", href: "/products" },
      { label: "Pharmaceuticals", href: "/products/pharmaceuticals" },
      { label: "Medical Technologies", href: "/products/medical-technologies" },
    ],
  },
  {
    label: "Partnerships",
    href: "/partnerships",
  },
  {
    label: "Global Presence",
    href: "/global-presence",
  },
  {
    label: "Contract Manufacturing",
    href: "/contract-manufacturing",
  },
  {
    label: "Creating Impact",
    href: "/csr"
  },
];

export const secondaryNavItems: NavItem[] = [
  {
    label: "Investor Relations",
    href: "/investors",
    children: [
      { label: "Investor Information", href: "/investors" },
      { label: "Why Invest?", href: "/about/purpose" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
  { label: "Careers", href: "/careers" },
];

export const footerLinks = {
  column1: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Investors", href: "/investors" },
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

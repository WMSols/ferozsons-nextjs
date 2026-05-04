export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiProductCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface StrapiCategoriesResponse {
  data: StrapiProductCategory[];
  meta: {
    pagination: StrapiPagination;
  };
}

export interface StrapiProduct {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  formulation?: string;
  concentration?: string;
  dosage?: string;
  volumeOptions?: string[];
  keyFeatures?: string;
  prescriptionRequired?: boolean;
  commonlyPrescribed?: boolean | null;
  product_category?: {
    id: number;
    name: string;
    slug: string;
  };
  image?: {
    url: string;
  };
}

export interface StrapiProductsResponse {
  data: StrapiProduct[];
  meta: {
    pagination: StrapiPagination;
  };
}



/** Single product from Strapi (e.g. by slug) with full populate. */
export interface StrapiProductDetail extends StrapiProduct {
  description?: StrapiBlock[];
  availableOnline?: boolean | null;
  dvagoUrl?: string | null;
  instructionsFile?: {
    name: string;
    url: string;
  };
  faqFile?: {
    name: string;
    url: string;
  };
  pamphletFile?: {
    name: string;
    url: string;
  };
}

// types/strapi.ts

// Base text node
export interface StrapiTextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

// Link node (contains text nodes inside its own children array)
export interface StrapiLinkNode {
  type: "link";
  url: string;
  children: StrapiTextNode[];
}

export type StrapiNode = StrapiTextNode | StrapiLinkNode;

export interface StrapiBlockParagraph {
  type: "paragraph";
  children: StrapiNode[];
}

// Export a generic block type that can be a paragraph, heading, list, etc.
export type StrapiBlock = StrapiBlockParagraph; // Add other block types here if needed (e.g. StrapiBlockHeading)

export interface StrapiNewsroomImage {
  id: number;
  documentId: string;
  url: string;
}

export interface StrapiNewsroom {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  // Use 'any' here for the official renderer, or import 'BlocksContent' from the package if strict typing is preferred
  content: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_image?: StrapiNewsroomImage;
  og_image?: StrapiNewsroomImage;
}

export interface StrapiNewsroomsResponse {
  data: StrapiNewsroom[];
  meta: {
    pagination: StrapiPagination;
  };
}

 export interface StrapiJob {
  jobId: number | string;
  title: string;
  domain: string;
  location: string;
  type: string;
  overview: string;
  requirements: string;
  responsiblities: string;
  benefits: string;
  skills: string;
}


export interface FinancialHighlights {
  revenue: string;
  netProfit: string;
  eps: string;
  marketCap: string;
}
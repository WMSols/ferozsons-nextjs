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

/** Strapi Blocks / Rich Text node (e.g. for description). */
export interface StrapiBlockTextChild {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface StrapiBlockParagraph {
  type: "paragraph";
  children: StrapiBlockTextChild[];
}

export type StrapiBlock = StrapiBlockParagraph;

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

export interface StrapiNewsroomImage {
  id: number;
  documentId: string;
  url: string;
}

export interface StrapiNewsroomContent {
  type: string;
  children: [ {
    type: string;
    text: string
  }]
}

export interface StrapiNewsroom {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: StrapiNewsroomContent;
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

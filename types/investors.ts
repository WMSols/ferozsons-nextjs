import type { StrapiPagination } from "@/types/strapi";

export interface StrapiReportType {
  id: number;
  documentId: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface StrapiReportTypesResponse {
  data: StrapiReportType[];
  meta: {
    pagination: StrapiPagination;
  };
}

export interface StrapiReportFile {
  id: number;
  documentId?: string;
  url: string;
}

// Updated to include date and createdAt which are necessary for the fallback sorting
export interface StrapiInvestorReport {
  id: number;
  documentId: string;
  title: string;
  slug: string | null;
  year?: number;
  quarter?: string;
  Quarter?: string;
  quarterNo?: string;
  date?: string | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  report_file?: StrapiReportFile | null; // Assuming this is defined elsewhere
}

export interface StrapiInvestorReportsResponse {
  data: StrapiInvestorReport[];
  meta: {
    pagination: StrapiPagination;
  };
}

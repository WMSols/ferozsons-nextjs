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

export interface StrapiInvestorReport {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  year?: number;
  quarter?: string;
  Quarter?: string;
  report_file?: StrapiReportFile | null;
}

export interface StrapiInvestorReportsResponse {
  data: StrapiInvestorReport[];
  meta: {
    pagination: StrapiPagination;
  };
}

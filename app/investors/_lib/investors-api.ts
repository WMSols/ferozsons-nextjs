import "server-only";

import {
  buildInvestorReportsUrl,
  getReportTypesUrl,
  strapiFetch,
} from "@/lib/strapi";
import type {
  StrapiInvestorReport,
  StrapiInvestorReportsResponse,
  StrapiReportType,
  StrapiReportTypesResponse,
} from "@/types/investors";

export const INVESTORS_REPORTS_PAGE_SIZE = 25;

interface FetchInvestorReportsParams {
  type?: string;
  page: number;
  pageSize?: number;
}

export async function fetchReportTypes(): Promise<StrapiReportType[]> {
  const response = await strapiFetch(getReportTypesUrl());
  const json = (await response.json()) as StrapiReportTypesResponse;
  return json.data ?? [];
}

export async function fetchInvestorReports({
  type,
  page,
  pageSize = INVESTORS_REPORTS_PAGE_SIZE, // Ensure this constant is imported in your file
}: FetchInvestorReportsParams): Promise<StrapiInvestorReportsResponse> {

  const response = await strapiFetch(
    buildInvestorReportsUrl({ type, page, pageSize })
  );

  const json = (await response.json()) as StrapiInvestorReportsResponse;

  // Apply multi-parameter sorting if data exists
  if (json.data && Array.isArray(json.data)) {
    json.data.sort((a, b) => {

      // --- STEP 1: Compare Year ---
      // Smart fallback: If 'year' is missing, try to extract it from 'date' or 'createdAt'
      // so older reports missing a year field don't accidentally float to the top.
      const getYear = (r: StrapiInvestorReport) => {
        if (r.year) return r.year;
        if (r.date) return new Date(r.date).getFullYear();
        if (r.createdAt) return new Date(r.createdAt).getFullYear();
        return 0;
      };

      const yearA = getYear(a);
      const yearB = getYear(b);

      if (yearA !== yearB) {
        return yearB - yearA; // Latest year appears first
      }

      // --- STEP 2: Compare Quarter ---
      // Extracts any digit from 1-4 from the quarter string (e.g., "q2" -> 2, "Quarter 3" -> 3)
      const getQuarter = (r: StrapiInvestorReport) => {
        const q = r.quarter || r.Quarter || r.quarterNo;
        if (!q) return 0;

        // Find the first digit between 1 and 4 in the string
        const match = q.match(/([1-4])/);
        return match ? parseInt(match[1], 10) : 0;
      };

      const qA = getQuarter(a);
      const qB = getQuarter(b);

      if (qA !== qB) {
        return qB - qA; // Latest quarter appears first (e.g., 4 comes before 3)
      }

      // --- STEP 3 & 4: Fallback to Date, then CreatedAt ---
      const getTimestamp = (r: StrapiInvestorReport) => {
        if (r.date) return new Date(r.date).getTime();
        if (r.createdAt) return new Date(r.createdAt).getTime();
        return 0;
      };

      // Latest exact date/time appears first
      return getTimestamp(b) - getTimestamp(a);
    });
  }

  return json;
}

export function normalizeReportType(
  requestedType: string | undefined,
  reportTypes: StrapiReportType[],
): string | undefined {
  if (!requestedType) {
    return undefined;
  }

  const match = reportTypes.find(
    (type) => type.name.toLowerCase() === requestedType.toLowerCase(),
  );

  return match?.name;
}

export function parsePositiveInteger(value: string | undefined): number {
  if (!value) return 1;
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < 1) return 1;
  return parsed;
}

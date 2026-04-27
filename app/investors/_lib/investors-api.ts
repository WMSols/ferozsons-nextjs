import "server-only";

import {
  buildInvestorReportsUrl,
  getReportTypesUrl,
  strapiFetch,
} from "@/lib/strapi";
import type {
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
  pageSize = INVESTORS_REPORTS_PAGE_SIZE,
}: FetchInvestorReportsParams): Promise<StrapiInvestorReportsResponse> {
  const response = await strapiFetch(
    buildInvestorReportsUrl({ type, page, pageSize }),
  );
  return (await response.json()) as StrapiInvestorReportsResponse;
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

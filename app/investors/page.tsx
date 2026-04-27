export const runtime = "edge";

import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { financialHighlights } from "@/data/investors";
import {
  fetchInvestorReports,
  fetchReportTypes,
  normalizeReportType,
  parsePositiveInteger,
  INVESTORS_REPORTS_PAGE_SIZE,
} from "./_lib/investors-api";
import FinancialHighlight from "./components/FinancialHighlight";
import ReportFilterTabs from "./components/ReportFilterTabs";
import ReportList from "./components/ReportList";
import Pagination from "./components/Pagination";

export const metadata = {
  title: "Investors",
  description:
    "Financial information and governance for shareholders and the investment community.",
};

type SearchParamsRecord = Record<string, string | string[] | undefined>;

interface InvestorsPageProps {
  searchParams?: Promise<SearchParamsRecord>;
}

function getQueryValue(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function InvestorsPage({
  searchParams,
}: InvestorsPageProps) {
  const resolvedSearchParams = await searchParams;
  const requestedType = getQueryValue(resolvedSearchParams?.type);
  const requestedPage = parsePositiveInteger(
    getQueryValue(resolvedSearchParams?.page),
  );

  const reportTypes = await fetchReportTypes();
  const activeType = normalizeReportType(requestedType, reportTypes);

  let reportsResponse = await fetchInvestorReports({
    type: activeType,
    page: requestedPage,
    pageSize: INVESTORS_REPORTS_PAGE_SIZE,
  });

  const maxPage = Math.max(reportsResponse.meta.pagination.pageCount, 1);
  const currentPage = Math.min(requestedPage, maxPage);

  if (currentPage !== requestedPage) {
    reportsResponse = await fetchInvestorReports({
      type: activeType,
      page: currentPage,
      pageSize: INVESTORS_REPORTS_PAGE_SIZE,
    });
  }

  const { pageCount, total } = reportsResponse.meta.pagination;

  return (
    <div className="pt-10">
      <PageHero
        title="Investors"
        subtitle="Financial information and governance for shareholders and the investment community."
      />

      <SectionWrapper containerClassName="max-w-4xl">
        <h2 className="text-2xl font-bold mb-8">Financial Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {financialHighlights.map((stat) => (
            <FinancialHighlight
              key={stat.label}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Reports & Filings</h2>
        <div className="mb-16">
          <ReportFilterTabs reportTypes={reportTypes} activeType={activeType} />
          <ReportList reports={reportsResponse.data} />
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            total={total}
            activeType={activeType}
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">Corporate Governance</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ferozsons Laboratories is committed to the highest standards of
          corporate governance. Our Board of Directors provides strategic
          oversight and ensures accountability to shareholders and stakeholders.
          For more details, visit our{" "}
          <Link
            href="/board-of-directors"
            className="text-primary hover:underline"
          >
            Board of Directors
          </Link>{" "}
          page.
        </p>
      </SectionWrapper>
    </div>
  );
}

import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
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

// 1. Import your hardcoded fallback data and your fetch function
import { financialHighlights as defaultHighlights } from "@/data/investors";
import { getFinancialHighlights } from "@/lib/strapi";
import HeroSection from "./components/HeroSection";

export const metadata = {
  title: "Investors",
  description:
    "Financial information and governance for shareholders and the investment community.",
};

type SearchParamsRecord = Record<string, string | string[] | undefined>;

interface InvestorsPageProps {
  searchParams: Promise<SearchParamsRecord>;
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

  // 2. Fetch Financial Highlights from backend
  const { data: strapiHighlights } = await getFinancialHighlights();

  // 3. Map the data or fall back to defaults
  let displayHighlights = defaultHighlights;
  let date;

  // Check if we received an array and it has at least one item
  if (strapiHighlights && strapiHighlights.length > 0) {
    const data = strapiHighlights[0]; // Assuming you only need the first record
    date = data.date;

    // 1. Create this small helper above your array
    const formatCurrency = (value: string) => {
      if (!value) return "N/A"; // Failsafe for empty data

      // This removes any existing "pkr" (case-insensitive) and any trailing spaces,
      // then prepends a fresh, uppercase "PKR " to ensure uniform formatting.
      const cleanValue = value.replace(/PKR\s*/i, "").trim();
      return `PKR\n${cleanValue}`; // Using \n to split line just like the FinancialHighlight component expects
    };

    // 2. Map your data cleanly, adding the new mock cards
    displayHighlights = [
      { label: "Revenue", value: formatCurrency(data.revenue) },
      { label: "Net Profit", value: formatCurrency(data.netProfit) },
      { label: "EPS", value: formatCurrency(data.eps) },
      { label: "Market Cap", value: formatCurrency(data.marketCap) },
      
      // New mock data appended to the grid
      { label: "Free Float of Shares", value: "PKR\n13.858B" },
      { label: "PE Ratio", value: "Y:Z" },
      { label: "Dividend Payout Ratio", value: "X:Y" },
      { label: "Breakup Value of Shares", value: "XXXXX" },
    ];
  }

  // Format the date
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className="bg-background">
      <div className=" px-0 sm:px-10">
      <HeroSection
        title="Investor Information"
        subtitle="Financial information and governance for shareholders and the investment community."
        backgroundImage="/images/investor-hero.webp"
        showInvestorInfo={true}
      /></div>

      {/* OVERLAPPING TAB LOGIC */}
      <div className="relative z-20 -mt-14 md:-mt-20 flex justify-center w-full px-4">
        <div className="bg-background rounded-t-[2rem] md:rounded-t-[3rem] w-full max-w-4xl px-8 pt-8 md:pt-10 pb-2 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-serif font-medium text-[#3B73AC]">
            Financial Highlights
          </h2>
        </div>
      </div>

      <SectionWrapper containerClassName="max-w-7xl pt-4 md:pt-6">
        <p className="mb-6 md:mb-8 text-muted-foreground text-sm font-light">
          Figures as of {formattedDate}
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-20">
          {/* 4. Map over your newly transformed `displayHighlights` */}
          {displayHighlights.map((stat, index) => (
            <FinancialHighlight
              key={index}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>

        <h2 className="text-3xl font-serif font-medium mb-6 text-foreground">
          Reports & Filings
        </h2>
        <div className="mb-20">
          <ReportFilterTabs reportTypes={reportTypes} activeType={activeType} />
          <ReportList reports={reportsResponse.data} />
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            total={total}
            activeType={activeType}
          />
        </div>

        <h2 className="text-3xl font-serif font-medium mb-4 text-foreground">
          Corporate Governance
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg font-light max-w-4xl">
          Ferozsons Laboratories is committed to the highest standards of
          corporate governance. Our Board of Directors provides strategic
          oversight and ensures accountability to shareholders and stakeholders.
          For more details, visit our{" "}
          <Link
            href="/board-of-directors"
            className="text-[#3B73AC] hover:text-[#294e74] underline underline-offset-4 transition-colors font-normal"
          >
            Board of Directors
          </Link>{" "}
          page.
        </p>
      </SectionWrapper>
    </div>
  );
}
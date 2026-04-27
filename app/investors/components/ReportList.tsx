import { getStrapiMediaUrl } from "@/lib/strapi";
import type { StrapiInvestorReport } from "@/types/investors";
import ReportItem from "./ReportItem";

interface ReportListProps {
  reports: StrapiInvestorReport[];
}

export default function ReportList({ reports }: ReportListProps) {
  if (reports.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
        No reports found for the selected filter.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <ReportItem
          key={report.documentId ?? report.id}
          title={report.title}
          year={report.year}
          quarter={report.quarter ?? report.Quarter}
          downloadUrl={getStrapiMediaUrl(report.report_file?.url)}
        />
      ))}
    </div>
  );
}

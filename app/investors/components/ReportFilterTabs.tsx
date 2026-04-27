import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { StrapiReportType } from "@/types/investors";

interface ReportFilterTabsProps {
  reportTypes: StrapiReportType[];
  activeType?: string;
}

function getFilterHref(type?: string): string {
  const params = new URLSearchParams();
  params.set("page", "1");

  if (type) {
    params.set("type", type);
  }

  return `/investors?${params.toString()}`;
}

export default function ReportFilterTabs({
  reportTypes,
  activeType,
}: ReportFilterTabsProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <Button
        asChild
        variant={!activeType ? "default" : "outline"}
        size="sm"
        className="rounded-full"
      >
        <Link href={getFilterHref()} scroll={false}>
          All
        </Link>
      </Button>

      {reportTypes.map((type) => (
        <Button
          key={type.documentId ?? type.id}
          asChild
          variant={
            activeType?.toLowerCase() === type.name.toLowerCase()
              ? "default"
              : "outline"
          }
          size="sm"
          className="rounded-full"
        >
          <Link href={getFilterHref(type.name)} scroll={false}>
            {type.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}

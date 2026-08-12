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
      <div className={` rounded-full ${!activeType ? "border-3 border-blue-500 p-0.5" : ""}`}>
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
      </div>

      {reportTypes.map((type) => (
        <div key={type.documentId ?? type.id} className={` rounded-full ${ activeType?.toLowerCase() === type.name.toLowerCase() ? "border-3 border-blue-500 p-0.5":""}`}>
        <Button
          asChild
          variant={
            activeType?.toLowerCase() === type.name.toLowerCase()
              ? "default"
              : "outline"
          }
          size="sm"
          className={`rounded-full `}
        >
          <Link href={getFilterHref(type.name)} scroll={false}>
            {type.name}
          </Link>
        </Button>
        </div>
      ))}
    </div>
  );
}

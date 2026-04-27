import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportItemProps {
  title: string;
  year?: number;
  quarter?: string;
  downloadUrl?: string;
}

export default function ReportItem({
  title,
  year,
  quarter,
  downloadUrl,
}: ReportItemProps) {
  const period = [year, quarter].filter(Boolean).join(" • ");

  return (
    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
      <div>
        <h3 className="font-medium">{title}</h3>
        {period ? (
          <p className="text-xs text-muted-foreground">{period}</p>
        ) : null}
      </div>
      {downloadUrl ? (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="rounded-full shrink-0"
        >
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4 mr-1" /> Download
          </a>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className="rounded-full shrink-0"
          disabled
        >
          <Download className="h-4 w-4 mr-1" /> Unavailable
        </Button>
      )}
    </div>
  );
}

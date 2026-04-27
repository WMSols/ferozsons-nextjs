import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductPaginationProps {
  currentPage: number;
  pageCount: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  currentPage,
  pageCount,
  total,
  onPageChange,
}: ProductPaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {pageCount}
        {total > 0 && ` (${total} total)`}
      </span>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        disabled={currentPage >= pageCount}
        onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}
        aria-disabled={currentPage >= pageCount}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
}

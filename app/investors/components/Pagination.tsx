import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  total: number;
  activeType?: string;
}

function buildPageHref(page: number, activeType?: string): string {
  const params = new URLSearchParams();
  params.set("page", String(page));

  if (activeType) {
    params.set("type", activeType);
  }

  return `/investors?${params.toString()}`;
}

export default function Pagination({
  currentPage,
  pageCount,
  total,
  activeType,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= pageCount;

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {isFirstPage ? (
          <span
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full opacity-50",
            )}
            aria-disabled="true"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </span>
        ) : (
          <Link
            href={buildPageHref(currentPage - 1, activeType)}
            scroll={false}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full",
            )}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Link>
        )}

        {pages.map((page) => (
          <Link
            key={page}
            href={buildPageHref(page, activeType)}
            scroll={false}
            className={cn(
              buttonVariants({
                variant: page === currentPage ? "default" : "outline",
                size: "sm",
              }),
              "h-9 min-w-9 rounded-full px-3",
            )}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}

        {isLastPage ? (
          <span
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full opacity-50",
            )}
            aria-disabled="true"
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        ) : (
          <Link
            href={buildPageHref(currentPage + 1, activeType)}
            scroll={false}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full",
            )}
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Page {currentPage} of {pageCount}
        {total > 0 && ` (${total} total)`}
      </p>
    </div>
  );
}

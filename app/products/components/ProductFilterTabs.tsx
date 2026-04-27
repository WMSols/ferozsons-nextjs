import { Button } from "@/components/ui/button";
import type { ProductsFilterMode } from "@/lib/strapi";

interface ProductFilterTabsProps {
  activeMode: ProductsFilterMode;
  onPrescribed: () => void;
  onCategory: () => void;
  onAz: () => void;
}

export default function ProductFilterTabs({
  activeMode,
  onPrescribed,
  onCategory,
  onAz,
}: ProductFilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={activeMode === "prescribed" ? "default" : "outline"}
        size="sm"
        className="rounded-full"
        onClick={onPrescribed}
      >
        Commonly Prescribed
      </Button>
      <Button
        variant={activeMode === "category" ? "default" : "outline"}
        size="sm"
        className="rounded-full"
        onClick={onCategory}
      >
        By Category
      </Button>
      <Button
        variant={activeMode === "az" ? "default" : "outline"}
        size="sm"
        className="rounded-full"
        onClick={onAz}
      >
        A–Z All
      </Button>
    </div>
  );
}

import {
  csrCategories,
  csrInitiatives,
  type CSRCategory,
} from "@/data/csrData";
import FilterPill from "./FilterPill";

interface CSRFilterBarProps {
  activeCategory: CSRCategory | "all";
  onCategoryChange: (category: CSRCategory | "all") => void;
  countFor: (category: CSRCategory) => number;
}

export default function CSRFilterBar({
  activeCategory,
  onCategoryChange,
  countFor,
}: CSRFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <FilterPill
        label="All"
        active={activeCategory === "all"}
        count={csrInitiatives.length}
        onClick={() => onCategoryChange("all")}
      />
      {csrCategories.map(({ key, label }) => (
        <FilterPill
          key={key}
          label={label}
          active={activeCategory === key}
          count={countFor(key)}
          onClick={() => onCategoryChange(activeCategory === key ? "all" : key)}
        />
      ))}
    </div>
  );
}

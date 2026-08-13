import { csrCategories, type CSRCategory } from "@/data/csrData";
import { cn } from "@/lib/utils";

interface CSRPillarOverviewProps {
  activeCategory: CSRCategory | "all";
  onCategoryChange: (category: CSRCategory | "all") => void;
}

export default function CSRPillarOverview({
  activeCategory,
  onCategoryChange,
}: CSRPillarOverviewProps) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Centered Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-center font-medium mb-12 text-foreground">
          Our Impact
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {csrCategories.map(({ key, label, image }) => {
            const isActive = activeCategory === key;

            return (
              <a  key={key} href="#initiative-grid">
              <button
                onClick={() => onCategoryChange(isActive ? "all" : key)}
                className={cn(
                  "relative w-full aspect-[4/5] rounded-[32px] overflow-hidden group focus:outline-none transition-all duration-300",
                  isActive
                    ? "ring-4 ring-[#3B73AC] ring-offset-2 scale-[0.98]"
                    : "hover:shadow-xl"
                )}
              >
                {/* Background Image */}
                <img
                  src={image}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Overlay for Readability */}
                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-300",
                    isActive
                      ? "bg-black/60"
                      : "bg-black/40 group-hover:bg-black/50"
                  )}
                />

                {/* Centered Category Label */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <span className="text-white font-medium text-lg md:text-xl text-center leading-snug drop-shadow-md">
                    {label}
                  </span>
                </div>
              </button>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
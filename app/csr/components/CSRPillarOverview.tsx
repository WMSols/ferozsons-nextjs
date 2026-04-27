import { csrCategories, type CSRCategory } from "@/data/csrData";
import { categoryAccent } from "./categoryAccent";

interface CSRPillarOverviewProps {
  activeCategory: CSRCategory | "all";
  onCategoryChange: (category: CSRCategory | "all") => void;
  countFor: (category: CSRCategory) => number;
}

export default function CSRPillarOverview({
  activeCategory,
  onCategoryChange,
  countFor,
}: CSRPillarOverviewProps) {
  return (
    <section className="pb-14">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {csrCategories.map(({ key, label, image }) => {
            const accent = categoryAccent[key];
            return (
              <button
                key={key}
                onClick={() =>
                  onCategoryChange(activeCategory === key ? "all" : key)
                }
                className={`relative overflow-hidden rounded-2xl p-5 text-left border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring group h-32 flex flex-col justify-end ${
                  activeCategory === key
                    ? `${accent.bg} border-transparent ring-2 ring-offset-2 ring-current ${accent.text}`
                    : "bg-card border-border hover:border-foreground/20"
                }`}
              >
                {image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={image}
                      alt={label}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        activeCategory === key ? "opacity-40" : "opacity-30"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        activeCategory === key
                          ? "from-primary/80 via-primary/40 to-transparent"
                          : "from-black/60 via-black/20 to-transparent"
                      }`}
                    />
                  </div>
                )}
                <div className="relative z-10">
                  <div
                    className={`w-2 h-2 rounded-full mb-3 ${
                      activeCategory === key ? "bg-white" : accent.dot
                    }`}
                  />
                  <p
                    className={`font-bold text-sm leading-tight ${
                      activeCategory === key || image ? "text-white" : "text-foreground"
                    }`}
                  >
                    {label}
                  </p>
                  <p
                    className={`text-[11px] mt-1 font-medium ${
                      activeCategory === key || image
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {countFor(key)} initiative{countFor(key) !== 1 ? "s" : ""}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

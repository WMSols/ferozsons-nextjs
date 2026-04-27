import { cn } from "@/lib/utils";

export interface StatItem {
  number: string;
  label: string;
}

interface StatsSectionProps {
  title?: string;
  stats: StatItem[];
  className?: string;
}

export default function StatsSection({
  title,
  stats,
  className,
}: StatsSectionProps) {
  return (
    <section className={cn("bg-white py-16", className)}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        {title && (
          <h2 className="font-kaisei text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "py-4",
                i < stats.length - 1 && "md:border-r md:border-gray-200",
              )}
            >
              <p className="font-kaisei text-6xl font-bold text-blue-600">
                {stat.number}
              </p>
              <p className="font-kaisei text-sm text-gray-500 uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

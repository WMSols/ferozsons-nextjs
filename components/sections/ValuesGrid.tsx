import type { LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuesGridProps {
  label?: string;
  title: string;
  values: ValueItem[];
}

export default function ValuesGrid({ label, title, values }: ValuesGridProps) {
  return (
    <SectionWrapper className="bg-secondary py-16 md:py-24">
      <SectionHeader label={label} title={title} align="center" />
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="bg-card rounded-lg border border-border p-8 hover:shadow-md transition-shadow"
            >
              <Icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

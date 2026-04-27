import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className,
      )}
    >
      {label && (
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

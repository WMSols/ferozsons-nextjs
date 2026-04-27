interface FilterPillProps {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}

export default function FilterPill({
  label,
  active,
  count,
  onClick,
}: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        active
          ? "bg-foreground text-background border-foreground"
          : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground"
      }`}
    >
      {label}
      <span
        className={`text-xs rounded-full px-1.5 py-px ${
          active
            ? "bg-background/20 text-background"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

import type { CSSProperties } from "react";

type TimelineLinkProps = {
  href: string;
  label: string;
  compact?: boolean;
};

export default function TimelineLink({
  href,
  label,
  compact = false,
}: TimelineLinkProps) {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: compact ? 4 : 5,
    fontSize: compact ? 11 : 12,
    fontWeight: 700,
    color: "#0057b8",
    textDecoration: "none",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderBottom: "2px solid transparent",
    paddingBottom: 1,
    transition: "border-color 0.2s",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderBottomColor = "#0057b8")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderBottomColor =
          "transparent")
      }
    >
      {label}
      <svg
        width={compact ? 9 : 10}
        height={compact ? 9 : 10}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}

export default function PlaceholderImage({
  alt,
  color,
}: {
  alt: string;
  color: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "3/2",
        background: `${color}12`,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        color: `${color}60`,
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span
        style={{
          fontSize: 11,
          textAlign: "center",
          padding: "0 20px",
          lineHeight: 1.4,
          maxWidth: 200,
        }}
      >
        {alt}
      </span>
    </div>
  );
}

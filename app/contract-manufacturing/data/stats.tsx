import type { StatCard } from "./types";

export const statCards: StatCard[] = [
  {
    value: 50,
    suffix: "+",
    label: "Years of Manufacturing Excellence",
    accent: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 30, height: 30, opacity: 0.18 }}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: 6,
    suffix: "",
    label: "Dosage Form Categories",
    accent: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 30, height: 30, opacity: 0.18 }}
      >
        <path d="M10.5 2h3L21 9v3L14 19.5H10L3 12.5V9.5z" />
      </svg>
    ),
  },
  {
    value: 4,
    suffix: "",
    label: "Global Quality Standards (ISO, ICH, WHO, PIC/S)",
    accent: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 30, height: 30, opacity: 0.35 }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z" />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: "+",
    label: "International Client Partnerships",
    accent: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 30, height: 30, opacity: 0.35 }}
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

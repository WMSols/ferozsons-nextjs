import type { FacilityCard } from "./types";

export const facilityCards: FacilityCard[] = [
  {
    title: "cGMP-Compliant Facility",
    body: "State-of-the-art formulation facility compliant with national and international regulatory standards.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 26, height: 26 }}
      >
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Advanced Manufacturing",
    body: "Advanced manufacturing and analytical capabilities, supported by modern machinery and laboratory systems.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 26, height: 26 }}
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Dosage Forms",
    body: "Tablets, capsules, sachets, dry powder suspensions, creams, ointments, gels, ampoules, vials, pre-filled syringes, and lyophilized products.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 26, height: 26 }}
      >
        <path d="M10.5 2h3L21 9v3L14 19.5H10L3 12.5V9.5L10.5 2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Global Quality Frameworks",
    body: "Operations aligned with ISO, ICH, WHO, and PIC/S standards.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 26, height: 26 }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Expert Multidisciplinary Workforce",
    body: "Comprising pharmacists, chemists, microbiologists, and engineers.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 26, height: 26 }}
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Dedicated R&D and Quality Control",
    body: "In-house research and quality control laboratories ensuring consistent product safety, efficacy, and innovation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 26, height: 26 }}
      >
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4m-5 0h5" />
        <circle cx="15" cy="10" r="3" />
        <path d="M15 7v1m0 4v1m2.5-2.5h-1m-3 0H12" />
      </svg>
    ),
  },
];

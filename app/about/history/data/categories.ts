export type Category =
  | "product"
  | "community"
  | "recognition"
  | "research"
  | "acquisition"
  | "brand"
  | "collaboration"
  | "foundation"
  | "expansion"
  | "manufacturing";

export interface CategoryMeta {
  label: string;
  color: string;
  bg: string;
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  product: { label: "Product Launch", color: "#0057b8", bg: "#e6f0fb" },
  community: { label: "Community Strength", color: "#1a7a55", bg: "#e3f5ee" },
  recognition: {
    label: "Ratings & Recognition",
    color: "#0057b8",
    bg: "#e6f0fb",
  },
  research: { label: "Investment in Science", color: "#0057b8", bg: "#e6f0fb" },
  acquisition: {
    label: "Acquisition & Mergers",
    color: "#0057b8",
    bg: "#e6f0fb",
  },
  brand: { label: "Brand Launch", color: "#0057b8", bg: "#e6f0fb" },
  collaboration: { label: "Collaborations", color: "#0057b8", bg: "#e6f0fb" },
  foundation: { label: "Foundation", color: "#424242", bg: "#F5F5F5" },
  expansion: { label: "Expansion", color: "#2E7D32", bg: "#E8F5E9" },
  manufacturing: { label: "Manufacturing", color: "#F57F17", bg: "#FFF8E1" },
};

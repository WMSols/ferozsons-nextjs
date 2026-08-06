import type { CSRCategory } from "@/data/csrData";

export const categoryAccent: Record<
  CSRCategory,
  { bg: string; text: string; dot: string }
> = {
  education: {
    bg: "bg-blue-600",
    text: "text-white",
    dot: "bg-white",
  },
  health: {
    bg: "bg-sky-600",
    text: "text-white",
    dot: "bg-white",
  },
  arts_culture: {
    bg: "bg-indigo-600",
    text: "text-white",
    dot: "bg-white",
  },
  community: {
    bg: "bg-slate-700",
    text: "text-white",
    dot: "bg-white",
  },
  zero_hunger: {
    bg: "bg-amber-400",
    text: "text-black",
    dot: "bg-black",
  },
  climate_action: {
    bg: "bg-emerald-600",
    text: "text-white",
    dot: "bg-white",
  },
};
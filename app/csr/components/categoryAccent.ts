import type { CSRCategory } from "@/data/csrData";

export const categoryAccent: Record<
  CSRCategory,
  { bg: string; text: string; dot: string }
> = {
  education: {
    bg: "bg-blue-50/60 dark:bg-blue-950/20",
    text: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-400",
  },
  healthcare: {
    bg: "bg-sky-50/60 dark:bg-sky-950/20",
    text: "text-sky-700 dark:text-sky-300",
    dot: "bg-sky-400",
  },
  arts: {
    bg: "bg-indigo-50/60 dark:bg-indigo-950/20",
    text: "text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-400",
  },
  community: {
    bg: "bg-slate-50/60 dark:bg-slate-900/30",
    text: "text-slate-700 dark:text-slate-300",
    dot: "bg-slate-400",
  },
};

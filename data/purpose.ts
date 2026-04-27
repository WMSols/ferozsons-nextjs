import { Heart, ShieldCheck, Star, Users } from "lucide-react";
import type { ValueItem } from "@/components/sections/ValuesGrid";

export const values: ValueItem[] = [
  {
    icon: Heart,
    title: "Putting Patients First",
    description:
      "We prioritize patient well-being by addressing unmet medical needs, expanding access to world-class treatments, ensuring safety, and maintaining the highest standards of quality across our products and supply chain.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We build and sustain trust through ethical conduct, transparency, and mutually beneficial relationships with our partners, stakeholders, employees, and the communities we serve.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We cultivate a culture that continuously raises the standard of performance, encouraging innovation, accountability, and a relentless pursuit of improvement.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe meaningful progress is achieved through collaboration — working closely with colleagues, healthcare partners, and global organizations to deliver better outcomes for patients.",
  },
];

export const missionCommitments = [
  "Creating sustainable long-term value for our shareholders",
  "Investing in the growth and development of our people",
  "Building strong collaborations that drive excellence and innovation",
  "Upholding the highest standards of ethics, integrity, and transparency",
];

"use client";

import type { YearGroup } from "../data/history";

import MobileMilestoneCard from "./MobileMilestoneCard";
import YearHeader from "./YearHeader";

export default function MobileYearSection({ group }: { group: YearGroup }) {
  return (
    <section id={`year-${group.year}`} style={{ marginBottom: 32 }}>
      <YearHeader year={group.year} compact />
      {group.milestones.map((milestone, index) => (
        <MobileMilestoneCard
          key={index}
          milestone={milestone}
          isLast={index === group.milestones.length - 1}
        />
      ))}
    </section>
  );
}

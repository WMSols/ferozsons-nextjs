"use client";

import type { YearGroup } from "../data/history";

import MilestoneRow from "./MilestoneRow";
import YearHeader from "./YearHeader";

export default function YearSection({ group }: { group: YearGroup }) {
  return (
    <section id={`year-${group.year}`}>
      <YearHeader year={group.year} />
      {group.milestones.map((milestone, index) => (
        <MilestoneRow
          key={index}
          milestone={milestone}
          isLast={index === group.milestones.length - 1}
        />
      ))}
    </section>
  );
}

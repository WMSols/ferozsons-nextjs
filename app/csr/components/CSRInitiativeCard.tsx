"use client";

import { useState } from "react";
import type { CSRInitiative } from "@/data/csrData";
import { categoryAccent } from "./categoryAccent";
import { categoryLabel } from "./categoryLabels";
import { HandshakeIcon, PinIcon } from "./CSRIcons";

interface CSRInitiativeCardProps {
  initiative: CSRInitiative;
}

export default function CSRInitiativeCard({
  initiative,
}: CSRInitiativeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const accent = categoryAccent[initiative.category];

  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-md">
      <div className={`h-1 w-full ${accent.dot}`} />

      <div className="p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${accent.bg} ${accent.text}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                {categoryLabel[initiative.category]}
              </span>
              {initiative.ongoing && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Ongoing
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-foreground leading-snug">
              {initiative.title}
            </h3>
          </div>
        </div>

        {(initiative.partner || initiative.location) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
            {initiative.partner && (
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <HandshakeIcon />
                {initiative.partner}
              </p>
            )}
            {initiative.location && (
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <PinIcon />
                {initiative.location}
              </p>
            )}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed">
          {expanded
            ? initiative.description
            : initiative.description.length > 200
              ? initiative.description.slice(0, 200).trimEnd() + "…"
              : initiative.description}
        </p>

        {initiative.description.length > 200 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-sm font-medium text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        {initiative.highlights && initiative.highlights.length > 0 && (
          <ul className="mt-5 space-y-2">
            {initiative.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.dot}`}
                />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

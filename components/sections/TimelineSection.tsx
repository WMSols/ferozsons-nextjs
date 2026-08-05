"use client";

import { TimelineItemSlide } from "@/components/animations/TimelineItemSlide";
import SectionWrapper from "@/components/shared/SectionWrapper";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  title?: string;
  events: TimelineEvent[];
  animated?: boolean;
  className?: string;
}

export default function TimelineSection({
  title,
  events,
  animated = false,
  className,
}: TimelineSectionProps) {
  return (
    <SectionWrapper className={className}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {title}
        </h2>
      )}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />
        {events.map((event, i) => {
          const content = (
            <>
              <div className="hidden md:block flex-1" />
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary-foreground" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-bold text-primary">
                  {event.year}
                </span>
                <h3 className="font-bold text-foreground">{event.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </>
          );

          const itemClass = `relative flex items-start gap-6 mb-10 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`;

          if (animated) {
            return (
              <TimelineItemSlide
                key={event.year}
                className={itemClass}
                fromLeft={i % 2 === 0}
              >
                {content}
              </TimelineItemSlide>
            );
          }

          return (
            <div key={event.year} className={itemClass}>
              {content}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

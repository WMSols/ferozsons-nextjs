"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonMotion } from "@/components/animations/ButtonMotion";
import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

interface MissionSectionProps {
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryLink?: { text: string; href: string };
  backgroundImage?: string;
}

export default function MissionSection({
  label,
  headline,
  description,
  ctaText,
  ctaLink,
  secondaryLink,
  backgroundImage,
}: MissionSectionProps) {
  return (
    <section className="mx-4 mt-8 lg:mx-6 lg:mt-12  rounded-4xl overflow-hidden  bg-background">
      <div className="relative flex flex-col items-center justify-center px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
        <StaggerFadeUpInView className="container relative z-10 flex flex-col items-center text-center">
          <h2 className="mb-6 md:mb-8 text-sm md:text-base uppercase font-sans  tracking-wide">
            {label}
          </h2>

          <h3 className="mb-8 md:mb-10 max-w-[1000px] text-2xl font-bold leading-relaxed  sm:text-3xl md:text-5xl lg:text-[3.5rem] lg:leading-snug">
            {headline}
          </h3>

          <p className="mb-10 md:mb-12 max-w-4xl text-base font-sans font-normal leading-relaxed md:text-lg">
            {description}
          </p>

          <ButtonMotion>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-mission-cta px-8 py-6 text-base font-semibold text-mission-cta-foreground hover:opacity-90 transition-opacity"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </ButtonMotion>
        </StaggerFadeUpInView>
      </div>
    </section>
  );
}

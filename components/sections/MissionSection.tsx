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
    <section className="mx-4 mt-8 lg:mx-6 lg:mt-12 border border-border rounded-[2rem] overflow-hidden shadow-sm bg-background">
      <div className="relative flex flex-col items-center justify-center px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
        {backgroundImage && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-no-repeat bg-right bg-cover md:bg-contain opacity-40 md:opacity-100"
              style={{ backgroundImage: `url('${backgroundImage}')` }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"
              aria-hidden
            />
          </div>
        )}

        <StaggerFadeUpInView className="container relative z-10 flex flex-col items-center text-center">
          <h2 className="mb-6 md:mb-8 text-sm md:text-base font-semibold text-foreground tracking-wide">
            {label}
          </h2>

          <h3 className="mb-8 md:mb-10 max-w-[1000px] text-2xl font-bold leading-relaxed text-foreground sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-snug">
            {headline}
          </h3>

          <p className="mb-10 md:mb-12 max-w-4xl text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
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

          {secondaryLink && (
            <Link
              href={secondaryLink.href}
              className="mt-6 md:mt-8 text-sm md:text-base font-bold text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {secondaryLink.text}
            </Link>
          )}
        </StaggerFadeUpInView>
      </div>
    </section>
  );
}

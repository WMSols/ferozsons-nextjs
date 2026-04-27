import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLockup from "@/components/shared/BrandLockup";

interface LegacyBannerProps {
  backgroundImage: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaLink: string;
  showBrandLockup?: boolean;
}

export default function LegacyBanner({
  backgroundImage,
  title,
  description,
  ctaText,
  ctaLink,
  showBrandLockup = true,
}: LegacyBannerProps) {
  return (
    <section className="w-full">
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 flex flex-col items-start text-left mx-auto">
          {showBrandLockup && (
            <BrandLockup variant="light" className="mb-8 md:mb-10" />
          )}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg font-normal leading-relaxed text-white">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 h-auto w-full min-w-0 sm:w-auto rounded-full bg-primary px-6 py-4 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground hover:opacity-90"
          >
            <Link
              href={ctaLink}
              className="flex flex-col items-center justify-center gap-y-2 min-w-0 sm:flex-row sm:gap-x-2 sm:justify-start"
            >
              <span className="whitespace-normal text-center sm:text-left">
                {ctaText}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

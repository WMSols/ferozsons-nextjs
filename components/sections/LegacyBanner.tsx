import Link from "next/link";
import { Button } from "@/components/ui/button";
import BrandLockup from "@/components/shared/BrandLockup";
import { StaggerFadeUpInView } from "../animations/StaggerFadeUpInView";

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
      <StaggerFadeUpInView className="relative min-h-[60vh] flex flex-col  justify-center px-2 py-20 md:px-12 md:py-24 lg:px-24 lg:py-28">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-black/40 via-black/40 to-black/50"
            aria-hidden
          />
        </div>
        <StaggerFadeUpInView className="container relative z-10 flex flex-col items-start text-left ">
          {showBrandLockup && (
            <BrandLockup variant="light"  />
          )}
          <h2 className=" text-3xl  md:text-5xl lg:text-[82px] sm:font-bold leading-tight text-white max-w-6xl">
            {title}
          </h2>
          <p className="mt-12 max-w-xl text-base md:text-xl font-normal leading-relaxed text-white">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 h-auto w-full min-w-0 sm:w-auto rounded-full bg-primary px-6 py-4 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground hover:opacity-90"
          >
            <Link
              href={ctaLink}
              className="flex flex-col items-center justify-center gap-y-2 min-w-10 sm:flex-row sm:gap-x-2 sm:justify-start"
            >
              <span className="whitespace-normal text-center sm:text-left">
                {ctaText}
              </span>
            </Link>
          </Button>
        </StaggerFadeUpInView>
      </StaggerFadeUpInView>
    </section>
  );
}

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
    <section className="w-full mt-8">
      <StaggerFadeUpInView className="relative min-h-[60vh] flex flex-col   justify-center  py-20 md:px-12 md:py-24 lg:px-24 lg:py-28">
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
            className="mt-10 h-12  min-w-0 sm:w-auto rounded-full bg-primary px-4 text-sm sm:text-base font-medium text-primary-foreground hover:opacity-90"
          >
            <Link href={ctaLink}>
              {ctaText}
            </Link>
          </Button>
        </StaggerFadeUpInView>
      </StaggerFadeUpInView>
    </section>
  );
}

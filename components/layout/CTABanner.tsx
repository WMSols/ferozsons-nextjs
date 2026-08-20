import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface CTABannerProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showCTA?: boolean;
}

const CTABanner = ({
  title = (<span>Care That Goes <br /> Beyond Medicine</span>),
  description = (<span>At Ferozsons, we believe healthcare is more than just prescriptions. It's about<br className="hidden md:block"/> compassion, innovation, and a deep commitment to improving lives across Pakistan.</span>),
  ctaText = "Learn More",
  ctaLink = "/about",
  showCTA = true,
}: CTABannerProps) => {
  return (
    <section className="bg-[#E5F2FF] py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center max-w-[20.5rem] mx-auto sm:max-w-4xl">
          <div className="text-center flex flex-col gap-6 sm:gap-12 items-center">
            <h2 className="text-[32px] text-black md:text-[82px] font-bold leading-[1.15] md:leading-snug">
              {title}
            </h2>
            <p className="text-lg text-black sm:text-[22px] sm:max-w-5xl sm:leading-relaxed">
              {description}
            </p>
            {showCTA && (
              <Button asChild className="rounded-full h-12 px-8 text-base font-medium">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

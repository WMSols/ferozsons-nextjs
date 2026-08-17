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
    <section className="bg-[#E5F2FF] py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center  max-w-4xl mx-auto">
          <div className="text-center flex flex-col gap-4 sm:gap-12 items-center">
            <h2 className="text-4xl text-black md:text-[82px] font-bold leading-snug  mb-4">
              {title}
            </h2>
            <p className=" text-[22px] max-w-5xl mb-6 leading-relaxed">
              {description}
            </p>
            {showCTA && (
              <Button asChild className="rounded-full px-10 py-7 text-xl">
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

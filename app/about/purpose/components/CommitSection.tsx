import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface CTABannerProps {
  title?: string |ReactNode;
  description?: string | ReactNode;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showCTA?: boolean;
}

const CommitSection = ({
  title = (<span>Committed to Better Health</span>),
  description = (<span>For over 70 years, Ferozsons Laboratories Limited has delivered quality healthcare<br className="hidden md:block"/> through integrity, innovation, and a patient-first approach, growing into one of<br className="hidden md:block"/> Pakistan's fastest-growing pharmaceutical companies.</span>),
  ctaText = "Company Overview",
  ctaLink = "/about/company-overview",
  showCTA = true,
}: CTABannerProps) => {
  return (
    <section className="bg-[#E5F2FF] py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center  max-w-7xl mx-auto">
          <div className="text-center flex flex-col gap-4 items-center">
            <h2 className="text-4xl text-black md:text-[4.6rem] font-bold leading-snug  mb-4">
              {title}
            </h2>
            <p className=" text-[24px] max-w-6xl mb-6 text-black leading-normal">
              {description}
            </p>
            {showCTA && (
              <Button asChild className="rounded-full px-10 py-4">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitSection;

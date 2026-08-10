import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string | React.ReactNode;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showCTA?: boolean;
}

const CommitSection = ({
  title = (<span>Committed to Better Health</span>),
  description = "For over 70 years, Ferozsons Laboratories Limited has delivered quality healthcare through integrity, innovation, and a patient-first approach, growing into one of Pakistan's fastest-growing pharmaceutical companies.",
  ctaText = "Company Overview",
  ctaLink = "/about/company-overview",
  showCTA = true,
}: CTABannerProps) => {
  return (
    <section className="bg-primary/10 py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center  max-w-4xl mx-auto">
          <div className="text-center flex flex-col gap-12 items-center">
            <h2 className="text-4xl text-black md:text-6xl font-bold leading-snug  mb-4">
              {title}
            </h2>
            <p className=" text-[20px] max-w-4xl mb-6 leading-relaxed">
              {description}
            </p>
            {showCTA && (
              <Button asChild className="rounded-full px-8 py-6">
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

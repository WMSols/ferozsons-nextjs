import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showCTA?: boolean;
}

const CTABanner = ({
  title = "Care That Goes Beyond Medicine",
  description = "At Ferozsons, we believe healthcare is more than just prescriptions. It's about compassion, innovation, and a deep commitment to improving lives across Pakistan.",
  ctaText = "Learn More",
  ctaLink = "/about",
  image = "/care-beyond.jpg",
  showCTA = true,
}: CTABannerProps) => {
  return (
    <section className="bg-primary/10 py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-primary/20">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            {showCTA && (
              <Button asChild className="rounded-full px-8">
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

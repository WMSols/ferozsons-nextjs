import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  showInvestorInfo?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  showInvestorInfo = true,
}: PageHeroProps) => {
  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] md:rounded-[3.1rem] ${
        backgroundImage
          ? "text-white min-h-screen h-[min(64vh,40rem)] flex flex-col"
          : "bg-transparent py-16"
      }`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/25 to-black/15" />
        </div>
      )}

      <div className="container relative z-10 flex-1 flex flex-col w-full px-6 md:px-12 lg:px-16">
        <div
          className={
            showInvestorInfo
              ? "pt-10 md:pt-0 md:-mt-28 md:ml-6 text-center md:flex-1  md:flex md:items-center md:justify-center "
              : "md:ml-12 py-16"
          }
        >
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
              backgroundImage ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h1>

          {subtitle && !showInvestorInfo && (
            <p
              className={`mt-6 text-lg font-normal md:text-xl max-w-3xl leading-relaxed ${
                backgroundImage ? "text-white/90" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {showInvestorInfo && (
          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 max-w-4xl md:static md:inset-auto md:top-auto md:-translate-y-32 md:gap-8 md:pb-24">
            <a
              href="https://dps.psx.com.pk/company/FEROZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 md:gap-5 w-fit"
            >
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src="/images/White-logo.webp"
                  alt="FEROZ Symbol"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white text-xl sm:text-2xl md:text-[2.5rem] font-sans font-bold tracking-wide leading-none">
                  FEROZ
                </h3>
                <p className="text-white/80 sm:text-xl font-light tracking-wide mt-1">
                  Symbol of the Company (PSX)
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 md:gap-5">
              <a
                href="https://www.psx.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative  w-20 h-20 shrink-0"
              >
                <Image
                  src="/images/PSX-Symbol.webp"
                  alt="Pakistan Stock Exchange"
                  fill
                  className="object-contain"
                />
              </a>
              <div className="flex flex-col">
                <h3 className="text-white text-xl sm:text-2xl md:text-[2.5rem] font-sans font-bold tracking-wide leading-tight">
                  Pakistan Stock Exchange
                </h3>
                <a
                  href="https://www.psx.com.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 sm:text-xl font-light hover:text-white transition-colors underline-offset-4 hover:underline mt-1"
                >
                  https://www.psx.com.pk/
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

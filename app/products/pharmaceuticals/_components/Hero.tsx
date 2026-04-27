import Image from "next/image";

const topTiles = [
  "/images/about-history/1954.jpg",
  "/images/about-history/1960.jpg",
  "/images/about-history/1961.jpg",
  "/images/about-history/1964-1969.jpg",
  "/images/about-history/1991.png",
];

const bottomTiles = [
  "/images/about-history/2002.png",
  "/images/about-history/2006.JPG",
  "/images/about-history/2008.jpg",
  "/images/about-history/2012.png",
  "/images/about-history/2014.png",
];

export default function Hero() {
  return (
    <section className="bg-pharma-page-bg">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-container {
          display: flex;
          width: fit-content;
        }
      `}</style>

      <div className="pt-10 md:pt-14 lg:pt-20 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] text-pharma-text-primary md:text-[48px]">
              Pharmaceuticals
            </h1>
            <p className="mt-4 max-w-105 text-[16px] leading-relaxed text-pharma-text-secondary">
              Advancing healthcare through innovative medicines across multiple
              therapeutic areas.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-2 md:mt-12 md:space-y-4 relative">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-pharma-page-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-pharma-page-bg to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left moving */}
          <div className="relative">
            <div className="marquee-container animate-marquee-left gap-2 md:gap-4 px-1 md:px-2">
              {[...topTiles, ...topTiles, ...topTiles].map((tile, index) => (
                <div
                  key={`top-${index}`}
                  className="w-[240px] md:w-[360px] aspect-[1.45/1] rounded-xl overflow-hidden relative flex-shrink-0 shadow-lg"
                  aria-hidden
                >
                  <Image
                    src={tile}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right moving */}
          <div className="relative">
            <div className="marquee-container animate-marquee-right gap-2 md:gap-4 px-1 md:px-2">
              {[...bottomTiles, ...bottomTiles, ...bottomTiles].map((tile, index) => (
                <div
                  key={`bottom-${index}`}
                  className="w-[240px] md:w-[360px] aspect-[1.45/1] rounded-xl overflow-hidden relative flex-shrink-0 shadow-lg"
                  aria-hidden
                >
                  <Image
                    src={tile}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-12 md:pb-16 lg:pb-20" />
      </div>
    </section>
  );
}

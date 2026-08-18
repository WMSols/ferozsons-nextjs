import Image from "next/image";

const topTiles = [
  "/images/pharmacuticals-slider-images/bdfb.webp",
  "/images/pharmacuticals-slider-images/frerfref.webp",
  "/images/pharmacuticals-slider-images/h5h5hty.webp",
  "/images/pharmacuticals-slider-images/hjbjbjb.webp",
  "/images/pharmacuticals-slider-images/hyh.webp",
];

const bottomTiles = [
  "/images/pharmacuticals-slider-images/nuyt.webp",
  "/images/pharmacuticals-slider-images/omega.webp",
  "/images/pharmacuticals-slider-images/revreerv.webp",
  "/images/pharmacuticals-slider-images/rvrttr.webp",
  "/images/pharmacuticals-slider-images/veee.webp",
];

export default function Hero() {
  return (
    <section className="bg-pharma-page-bg py-10">
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

      <div className="pt-10 md:pt-14 lg:pt-20 pb-10 overflow-hidden">
        <div className="container">
            <h1 className="text-[32px] font-bold text-center mb-10 leading-snug tracking-[-0.02em] text-black md:text-[56px]">
              Advancing healthcare through innovative <br className="hidden md:block" /> medicines across multiple therapeutic areas.
            </h1>
        </div>

        <div className="mt-10 space-y-2 md:mt-20 md:space-y-4 relative">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 h-full left-0 w-20 bg-gradient-to-r from-pharma-page-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 h-full right-0 w-20 bg-gradient-to-l from-pharma-page-bg to-transparent z-10 pointer-events-none" />

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

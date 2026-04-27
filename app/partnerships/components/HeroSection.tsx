import HeroFullScreen from "@/components/sections/HeroFullScreen";

export default function HeroSection() {
  return (
    <HeroFullScreen
      backgroundImage="/partnerships/partnerships-hero.png"
      overlayClassName="bg-gradient-to-b from-black/30 via-black/20 to-black/40"
      className="min-h-[100vh]"
    >
      <div className="flex flex-col items-center justify-center min-h-[100vh]">
        <div className="flex-1 flex items-center w-full container">
          <h1 className="font-kaisei text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            Our Trusted Partners
          </h1>
        </div>

        {/* Down arrow */}
        <div className="pb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/70 animate-bounce"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </HeroFullScreen>
  );
}

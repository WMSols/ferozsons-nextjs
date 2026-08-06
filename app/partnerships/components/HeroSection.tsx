import HeroFullScreen from "@/components/sections/HeroFullScreen";

export default function HeroSection() {
  return (
    <HeroFullScreen
      backgroundImage="/partnerships/Partnerships-Hero.png"
      overlayClassName=" bg-gradient-to-b from-black/20 via-black/30 to-black/40"
      className="min-h-screen sm:min-h-[93vh] "
    >
      <div className="flex flex-col items-center justify-center min-h-full">
        <div className="flex-1 flex items-center w-full container">
          <h1 className="font-kaisei text-6xl   lg:text-8xl font-bold text-white tracking-wide">
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

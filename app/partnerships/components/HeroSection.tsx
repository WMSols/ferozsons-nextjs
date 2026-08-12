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
          <h1 className="ml-6 text-6xl   lg:text-8xl font-bold text-white tracking-wide">
            Our Trusted Partners
          </h1>
        </div>
      </div>
    </HeroFullScreen>
  );
}

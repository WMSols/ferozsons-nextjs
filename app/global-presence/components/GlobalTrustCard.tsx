import Image from "next/image";

interface GlobalTrustCardProps {
  backgroundImage?: string;
  tagline?: string;
}

export default function GlobalTrustCard({
  backgroundImage = "/global-presence/Secondary-GP.webp",
  tagline = "Delivering trusted, high-quality pharmaceutical products to over 30 countries",
}: GlobalTrustCardProps) {
  return (
    <section className="   ">
      <div className="relative w-full  overflow-hidden min-h-[500px] md:min-h-[850px] flex flex-col justify-between  shadow-lg group">
        
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Global Presence - People Trust Us"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 transition-opacity duration-500" />

        {/* Top-Right Container for Icon */}
        <div className="relative mb-10  z-10 flex justify-end w-full">
          {/* REPLACE THIS DIV WITH YOUR CUSTOM ICON COMPONENT / SVG */}
          <Image
            src="/people-trust-us.webp"
            alt="Trust Icon"
            width={100}
            height={100}
            className=" md:w-52"
          />
        </div>

        {/* Bottom Center Tagline */}
        <div className="relative p-8 md:p-12 lg:p-16 z-10 w-full max-w-2xl mx-auto text-center">
          <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed tracking-wide drop-shadow-md">
            {tagline}
          </p>
        </div>

      </div>
    </section>
  );
}
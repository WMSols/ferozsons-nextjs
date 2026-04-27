import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_18%,#2f7bc8_0%,#0f3967_42%,#082345_75%,#05172f_100%)] pb-28 pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(5,23,47,0.7),transparent)]" />

      <div className="container relative z-10 grid items-center gap-10 pb-12 lg:grid-cols-[1fr_1.1fr] lg:gap-6">
        <div className="max-w-[590px] text-white">
          <h1 className="font-kaisei text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.45rem]">
            Global Presence
          </h1>
          <p className=" font-kaisei mt-5 max-w-[560px] text-lg font-semibold leading-[1.45] text-white/95 sm:text-[1.38rem]">
            Delivering trusted, high-quality pharmaceutical products to over 30
            countries, our exports division drives global growth through
            excellence, reliability, and a patient-first approach.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
          <div className="absolute -bottom-5 left-1/2 h-24 w-[88%] -translate-x-1/2 rounded-[100%] " />
          <div className="relative aspect-[1.2/1]">
            <Image
              src="/global-presence/globe-visual.png"
              alt="Reflective globe representing Ferozsons global presence"
              fill
              className="object-contain object-center drop-shadow-[0_30px_35px_rgba(0,0,0,0.35)]"
              priority
              sizes="(max-width: 1024px) 90vw, 52vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

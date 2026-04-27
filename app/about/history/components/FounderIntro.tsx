import Image from "next/image";

const FOUNDER_IMAGE = "/images/about-history/maulana-feroz.png";

export default function FounderIntro() {
  return (
    <section className="bg-[#111] py-16">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        <div className="relative w-64 h-64 rounded-full overflow-hidden grayscale mb-8 shrink-0">
          <Image
            src={FOUNDER_IMAGE}
            alt="Maulvi Ferozuddin Khan"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="font-serif text-white text-lg md:text-xl leading-relaxed">
          Founded in 1894 by Maulvi Ferozuddin Khan, the Ferozsons business
          group began with the establishment of its publishing house, guided from
          the outset by a commitment to advancing education and healthcare for
          underserved communities across the subcontinent. Built on decades of
          responsible healthcare leadership, &ldquo;People Trust Us&rdquo; as we
          continue advancing patient care.
        </p>
      </div>
    </section>
  );
}

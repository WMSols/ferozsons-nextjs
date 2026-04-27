import Image from "next/image";
import Link from "next/link";

export default function CareSection() {
  return (
    <section className="px-4 py-8">
      <div className="bg-blue-50 rounded-3xl max-w-6xl mx-auto p-8 md:p-12 mt-16 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Care That Goes Beyond Medicine.
            </h2>
            <p className="font-sans text-gray-800 leading-relaxed mb-6">
              At Ferozsons, we believe healthcare is more than just
              prescriptions. It&apos;s about compassion, innovation, and a deep
              commitment to improving lives across Pakistan.
            </p>
            <Link
              href="/about"
              className="inline-block rounded-full px-6 py-2 bg-blue-600 text-white font-sans font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
              <Image
                src={"/care-beyond.jpg"}
                alt="Care that goes beyond medicine"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

interface BiotechBlockProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function BiotechBlock({
  title,
  description,
  ctaText,
  ctaLink,
}: BiotechBlockProps) {
  return (
    <section className="px-4 my-12">
      <div className="bg-blue-600 rounded-[2rem] max-w-6xl mx-auto p-10 md:p-16">
        <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="font-kaisei text-white/95 text-sm md:text-base leading-relaxed max-w-3xl">
          {description}
        </p>
        <Link
          href={ctaLink}
          className="inline-block mt-6 rounded-full border border-white text-white font-kaisei px-6 py-2 font-medium hover:bg-white/10 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}

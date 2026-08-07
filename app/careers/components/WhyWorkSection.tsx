import Image from "next/image";
import { whyWorkWithUs } from "@/data/careers";

export default function WhyWorkSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Heading & Subheading */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">
            Build Your Future at <span className="text-[#3B73AC]">Ferozsons</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            At Ferozsons, every role contributes to a larger purpose. Join a collaborative team that's
            driving innovation, expanding access to healthcare, and putting patients first.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {whyWorkWithUs.map((item) => (
            <div 
              key={item.id} 
              className="border border-border rounded-[2rem] p-4 md:p-5 flex flex-col bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image with Dark Overlay & Label */}
              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 group">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
                  <span className="text-white text-2xl md:text-3xl  tracking-wide drop-shadow-md">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="px-2 pb-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg font-sans mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
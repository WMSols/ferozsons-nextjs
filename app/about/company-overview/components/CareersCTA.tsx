import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";
import Image from "next/image";
import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden min-h-[600px] md:min-h-[80vh] flex items-center bg-black">
      
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/company-overview/careers.webp"
          alt="Scientist working in lab"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark Overlay gradient emphasizing the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-10 md:py-20 md:px-12 lg:px-20 w-full">
        <div className="max-w-5xl flex flex-col">
          <div className=" -mt-4 md:-mt-12">
            <StaggerFadeUpInView>
          <h2 className="text-5xl md:text-7xl  font-bold text-white leading-[1.3] mb-8">
            Join our team and help shape the future of healthcare.
          </h2>
          </StaggerFadeUpInView>
          <StaggerFadeUpInView>
          <p className="text-white text-xl md:text-2xl leading-relaxed mb-12 max-w-xl">
            We are committed to employee development through continuous learning and leadership opportunities.
          </p>
          </StaggerFadeUpInView>
          </div>
          
          <Link 
            href="/careers" 
            className="inline-flex items-center mt-8 md:mt-32 justify-center bg-[#3B73AC] hover:bg-[#294e74] text-white text-base font-medium h-12 px-8 rounded-full transition-colors w-fit shadow-lg"
          >
            Career Opportunities
          </Link>
          
        </div>
      </div>
    </section>
  );
}
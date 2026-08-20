import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

export default function PatientsFirstIntroduction() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-8">
        <StaggerFadeUpInView>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
          For over 70 years, Ferozsons Laboratories Limited has been putting patients first
        </h2>
        </StaggerFadeUpInView>
        <StaggerFadeUpInView>
        <div className="text-black space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            Our legacy is grounded in integrity and reflected in the high standards that define everything we do. 
            Guided by a patient-first approach, we strive to improve lives through innovation, responsible 
            leadership, and a lasting commitment to the communities we serve.
          </p>
          <p>
            Founded in 1954 and commencing operations in 1956, Ferozsons Laboratories Limited has grown into 
            one of Pakistan's fastest-growing pharmaceutical companies. Listed on the Pakistan Stock Exchange 
            since 1960, the company has spent more than seven decades delivering quality healthcare solutions 
            and building leadership brands across key therapeutic areas.
          </p>
        </div>
        </StaggerFadeUpInView>
      </div>
    </section>
  );
}
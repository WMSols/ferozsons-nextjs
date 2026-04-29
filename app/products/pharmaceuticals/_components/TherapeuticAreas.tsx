import TherapeuticCard from "./TherapeuticCard";
import { therapeuticsData } from "@/data/company-overview";

const placeholderCards = Array.from({ length: 8 }, (_, index) => ({
  id: `placeholder-${index}`,
}));

export default function TherapeuticAreas() {
  return (
    <section className="bg-pharma-page-bg pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="container">
        <h2 className="font-serif text-[22px] font-bold leading-tight text-pharma-text-primary">
          Our Therapeutic Areas
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {therapeuticsData.map((area) => (
            <TherapeuticCard
              key={area.label}
              title={area.label}
              icon={area.image}
              portfolioLink={area.portfolioLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

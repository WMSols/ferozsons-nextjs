import {  getStrapiImageUrl, getTherapeuticAreas } from "@/lib/strapi";
import TherapeuticCard from "./TherapeuticCard";
import { therapeuticsData } from "@/data/company-overview";
import { sortTherapeuticAreas } from "@/lib/getSortedTherapeuticAreas";

const placeholderCards = Array.from({ length: 8 }, (_, index) => ({
  id: `placeholder-${index}`,
}));

export default async function TherapeuticAreas() {
const getImageUrl = (image: string | { url: string } | undefined): string | undefined => {
  return typeof image === 'string' ? image : image?.url;
};

const getTherapeuticImage = (
  url: string | { url: string } | undefined
) => {
  const stringUrl = getImageUrl(url);

  if (!stringUrl) return undefined;

  // local image from public folder
  if (stringUrl.startsWith("/images")) {
    return stringUrl;
  }

  // strapi image
  return getStrapiImageUrl(stringUrl);
};

  const { data: therapeuticsDataStrapi } = await getTherapeuticAreas();
  // use fallback data incase of no data from backend
  const sortedAreas = therapeuticsDataStrapi.length > 0 ? sortTherapeuticAreas(therapeuticsDataStrapi) : therapeuticsData

  return (
    <section className="bg-pharma-page-bg pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="container">
        <h2 className="font-serif text-[22px] font-bold leading-tight text-pharma-text-primary">
          Our Therapeutic Areas
        </h2>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sortedAreas.map((area) => (
            <TherapeuticCard
              key={area.name}
              title={area.name}
              icon={getTherapeuticImage(area.image)}
              portfolioLink={area.portfolioLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

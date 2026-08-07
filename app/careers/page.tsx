import PageHero from "@/components/layout/PageHero";
import WhyWorkSection from "./components/WhyWorkSection";
import PositionCard from "./components/PositionCard";

// Import your fetch utilities
import { buildJobPostsUrl, strapiFetch } from "@/lib/strapi";
import { StrapiJob } from "@/types/strapi";
import CTABanner from "@/components/layout/CTABanner";

export const metadata = {
  title: "Careers",
  description:
    "Join our team and help shape the future of healthcare in Pakistan.",
};

export default async function CareersPage() {
  let jobs: StrapiJob[] = [];

  try {
    const url = buildJobPostsUrl();

    const res = await strapiFetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const json = await res.json();
    jobs = Array.isArray(json?.data) ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch job posts:", error);
    jobs = [];
  }

  return (
    <div className="">
      <PageHero
        title="Careers"
        backgroundImage="/images/careers/Hero.webp"
        subtitle="Join our team and help shape the future of healthcare."
      />

      {/* Replaced old mapping block with the new WhyWorkSection component */}
      <WhyWorkSection />
{/* Open Positions Section */}
      <div className="flex flex-col items-center justify-center pb-16 md:pb-20">
        <h2 className="text-3xl  font-bold mb-10 text-center">Open Positions</h2>
        
        <div className="space-y-4 w-full  px-6">
          {jobs.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No open positions at the moment. Please check back later!
            </p>
          ) : (
            jobs.map((job: StrapiJob, idx: number) => {
              const { title, domain, location, type } = job;

              return (
                <PositionCard
                  key={idx}
                  title={title}
                  domain={domain}
                  location={location}
                  type={type}
                  overview={job.overview}
                  responsiblities={job.responsiblities}
                  requirements={job.requirements}
                  skills={job.skills}
                  benefits={job.benefits}
                  jobId={job.jobId}
                />
              );
            })
          )}
        </div>
      </div>
      <CTABanner/>
    </div>
  );
}
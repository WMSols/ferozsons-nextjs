
import PageHero from "@/components/layout/PageHero";
import { whyWorkWithUs } from "@/data/careers";
import WhyWorkCard from "./components/WhyWorkCard";
import PositionCard from "./components/PositionCard";

// Import your fetch utilities (adjust the path to wherever your strapi.ts file is located)
import { buildJobPostsUrl, strapiFetch } from "@/lib/strapi";
import { StrapiJob } from "@/types/strapi";

export const metadata = {
  title: "Careers",
  description:
    "Join our team and help shape the future of healthcare in Pakistan.",
};

// 1. Make the component async to handle server-side fetching
export default async function CareersPage() {
 let jobs = [];

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
    <div className="pt-10">
      <PageHero
        title="Careers"
        subtitle="Join our team and help shape the future of healthcare in Pakistan."
      />

      <div className="flex flex-col items-center justify-center py-16 md:py-20">
        <div className="mb-16 max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyWorkWithUs.map((v) => (
              <WhyWorkCard key={v.title} title={v.title} desc={v.desc} />
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        <div className="space-y-4 max-w-5xl  px-6 lg:p-0">

          {/* 3. Handle empty state or map through the fetched jobs */}
          {jobs.length === 0 ? (
            <p className="text-gray-500">No open positions at the moment. Please check back later!</p>
          ) : (
            jobs.map((job: StrapiJob, idx:number) => {
              const { title, domain, location, type } = job;

              return (
                <PositionCard
                  key={idx} // Use the Strapi database ID as the React key
                  title={title}
                  domain={domain}
                  location={location}
                  type={type}
                  overview={job.overview}
                  responsiblities={job.responsiblities}
                  requirements={job.requirements}
                  skills={job.skills}
                  benefits={job.benefits}

                  // Important: Since PositionCard contains the Application Form,
                  // you will likely want to pass the Job ID down so when the form
                  // is submitted, you know which job they applied for!
                  jobId={job.jobId}
                />
              );
            }
          )
          )}

        </div>
      </div>
    </div>
  );
}


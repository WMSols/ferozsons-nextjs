import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { conditions } from "@/data/patients";
import ConditionCard from "./components/ConditionCard";

export const metadata = {
  title: "Patient Information",
  description: "Understanding your condition and treatment options.",
};

export default function PatientsPage() {
  return (
    <>
      <PageHero
        title="Patient Information"
        subtitle="Understanding your condition and treatment options."
        breadcrumbs={[{ label: "Patients" }]}
      />

      <SectionWrapper containerClassName="max-w-4xl">
        <p className="text-muted-foreground leading-relaxed mb-12">
          This section provides general information about conditions treated by
          Ferozsons products. Always consult your healthcare provider for medical
          advice specific to your situation.
        </p>

        <div className="space-y-10">
          {conditions.map((cond) => (
            <ConditionCard
              key={cond.name}
              name={cond.name}
              description={cond.description}
              treatments={cond.treatments}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="rounded-full px-10">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}

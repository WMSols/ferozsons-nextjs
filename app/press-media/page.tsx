import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import { pressReleases } from "@/data/articles";

export const metadata = {
  title: "Press & Media",
  description: "Press releases and media resources from Ferozsons Laboratories.",
};

export default function PressMediaPage() {
  return (
    <>
      <PageHero title="Press & Media" subtitle="Press releases and media resources from Ferozsons Laboratories." breadcrumbs={[{ label: "Press & Media" }]} />

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div key={release.title} className="flex items-center justify-between p-6 bg-secondary rounded-lg">
                <div>
                  <h3 className="font-bold">{release.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(release.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full shrink-0">
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
            <p className="text-muted-foreground">
              For press inquiries, please contact our communications team at{" "}
              <a href="mailto:press@ferozsons.com" className="text-primary hover:underline">press@ferozsons.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

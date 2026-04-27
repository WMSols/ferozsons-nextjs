"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import PageHero from "@/components/layout/PageHero";

export default function PhysiciansPage() {
  const [verified, setVerified] = useState(false);
  const [confirm, setConfirm] = useState(false);

  if (!verified) {
    return (
      <>
        <PageHero title="For Healthcare Professionals" breadcrumbs={[{ label: "Physicians" }]} />
        <section className="py-16">
          <div className="container max-w-md">
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Verification Required</h2>
              <p className="text-sm text-muted-foreground mb-6">
                This section contains information intended for healthcare professionals only. Please confirm your status to continue.
              </p>
              <div className="space-y-4">
                <Input placeholder="PMDC Registration Number" />
                <div className="flex items-center gap-2">
                  <Checkbox id="hcp-confirm" checked={confirm} onCheckedChange={(c) => setConfirm(!!c)} />
                  <label htmlFor="hcp-confirm" className="text-sm text-muted-foreground">
                    I confirm that I am a licensed healthcare professional.
                  </label>
                </div>
                <Button className="w-full rounded-full" disabled={!confirm} onClick={() => setVerified(true)}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="For Healthcare Professionals" breadcrumbs={[{ label: "Physicians" }]} />
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Therapeutic Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { area: "Hepatology", desc: "Comprehensive treatment options for hepatitis B and C, including direct-acting antivirals." },
              { area: "Cardiovascular", desc: "Statins, antihypertensives, and combination therapies for cardiovascular disease management." },
              { area: "Oncology", desc: "Targeted cancer treatments in partnership with global pharmaceutical leaders." },
              { area: "Anti-Infectives", desc: "Broad-spectrum antibiotics and antiviral medications for infectious disease management." },
            ].map((t) => (
              <div key={t.area} className="bg-secondary rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">{t.area}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Resources</h2>
          <p className="text-muted-foreground">
            For prescribing information, clinical data, and medical resources, please contact our medical affairs team at{" "}
            <a href="mailto:medinfo@ferozsons.com" className="text-primary hover:underline">medinfo@ferozsons.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}

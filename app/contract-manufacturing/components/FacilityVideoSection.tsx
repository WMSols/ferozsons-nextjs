"use client";

import { FadeInSection } from "./helpers/FadeInSection";

export function FacilityVideoSection() {
  const highlights = [
    "Total built-up manufacturing area of approximately 207,438 square feet",
    "State-of-the-art formulation facility compliant with national and international regulatory guidelines",
    "Advanced manufacturing machinery and analytical laboratory equipment",
    "Rock wool panel construction, providing enhanced fire resistance and safety",
    "Capability to manufacture liquid, solid, and semi-solid dosage forms, including tablets, capsules, sachets, syrups, dry powder suspensions, creams, ointments, and gels",
    "Operations aligned with ISO, ICH, WHO, and PIC/S international quality standards",
    "Supported by a highly qualified workforce of pharmacists, chemists, microbiologists, and engineers",
  ];

  return (
    <section className="py-24" style={{ background: "#f0f4f8" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00000010 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#4a90d9] mb-4 text-center">
            Inside Our Facility
          </p>
          <h2
            className="font-display text-center mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#0a1628",
              fontWeight: 700,
            }}
          >
            See Our Facility in Action
          </h2>
          <p
            className="font-body text-center mb-12"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              color: "#4a5568",
              maxWidth: "640px",
              margin: "0 auto 3rem",
            }}
          >
            Nowshera Plant &mdash; A Symbol of Trust
          </p>
        </FadeInSection>

        {/* Video */}
        <FadeInSection delay={0.2}>
          <div
            className="relative w-full overflow-hidden rounded-3xl"
            style={{
              paddingTop: "56.25%",
              boxShadow:
                "0 30px 80px rgba(29,78,216,0.18), 0 0 0 1px rgba(74,144,217,0.15)",
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VmUg9NOkDu8"
              title="Ferozsons Laboratories Facility"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </FadeInSection>

        {/* Description */}
        <FadeInSection delay={0.3}>
          <p
            className="font-body mt-12 text-center"
            style={{
              fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
              color: "#4a5568",
              lineHeight: 1.8,
              maxWidth: "780px",
              margin: "3rem auto 0",
            }}
          >
            Ferozsons Laboratories Limited operates a fully current Good
            Manufacturing Practices (cGMP) compliant manufacturing facility in
            Nowshera, Khyber Pakhtunkhwa, equipped with modern production and
            analytical technologies and certified under ISO 9001 quality
            standards. Our facility integrates advanced manufacturing systems,
            modern quality control laboratories, and internationally aligned
            operational standards, enabling the production of high-quality
            pharmaceutical formulations for both domestic and international
            markets.
          </p>
        </FadeInSection>

        {/* Facility Highlights */}
        <FadeInSection delay={0.4}>
          <div
            className="mt-14 rounded-3xl p-8 lg:p-12"
            style={{
              background: "#ffffff",
              boxShadow:
                "0 8px 40px rgba(29,78,216,0.08), 0 0 0 1px rgba(74,144,217,0.1)",
            }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#4a90d9] mb-3">
              Facility Highlights
            </p>
            <ul className="mt-4 space-y-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 font-body"
                  style={{
                    fontSize: "clamp(0.875rem, 1.3vw, 0.95rem)",
                    color: "#2d3748",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    className="mt-1.5 shrink-0 rounded-full"
                    style={{
                      width: "7px",
                      height: "7px",
                      background: "#4a90d9",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>

        {/* Closing Statement */}
        <FadeInSection delay={0.5}>
          <p
            className="font-body mt-10 text-center"
            style={{
              fontSize: "clamp(0.875rem, 1.3vw, 0.95rem)",
              color: "#718096",
              lineHeight: 1.8,
              maxWidth: "720px",
              margin: "2.5rem auto 0",
              fontStyle: "italic",
            }}
          >
            Through this integrated manufacturing infrastructure, Ferozsons
            continues to uphold the highest standards of quality, safety, and
            regulatory compliance, ensuring reliable access to essential
            medicines for patients in Pakistan and across international markets.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

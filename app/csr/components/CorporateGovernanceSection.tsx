import Link from "next/link";

export default function CorporateGovernanceSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem]  font-bold  mb-6">
          Corporate Governance
        </h2>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
          Our{" "}
          <Link
            href="/board-of-directors"
            className="text-[#3B73AC] underline underline-offset-4 hover:text-[#294e74] transition-colors"
          >
            corporate governance
          </Link>{" "}
          framework underpins sustainable growth, long-term value creation, and
          ethical business practices. Guided by strong oversight, transparency,
          accountability, and effective risk management, we integrate ESG
          principles into our decision-making to strengthen resilience, build
          stakeholder trust, and create sustainable value for our business and
          the communities we serve.
        </p>
      </div>
    </section>
  );
}
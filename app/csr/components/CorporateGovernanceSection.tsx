import Link from "next/link";

export default function CorporateGovernanceSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 text-black md:px-8 ">
        <h2 className="text-3xl  md:text-4xl lg:text-[2.5rem]  font-bold  mb-6">
          Corporate Governance
        </h2>
        <p className=" text-base md:text-lg leading-relaxed">
          Our{" "}
          <Link
            href="/board-of-directors"
            className="text-[#3B73AC] underline underline-offset-4 hover:text-[#294e74] transition-colors"
          >
            corporate governance
          </Link>{" "}
          framework underpins sustainable growth, long-term value creation, and
          ethical business practices.<br className="hidden md:block"/> Guided by strong oversight, transparency,
          accountability, and effective risk management, we integrate ESG
          principles into our<br className="hidden md:block"/> decision-making to strengthen resilience, build
          stakeholder trust, and create sustainable value for our business and
          the<br className="hidden md:block"/> communities we serve.
        </p>
      </div>
    </section>
  );
}
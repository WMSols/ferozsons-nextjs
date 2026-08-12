import CTABanner from "@/components/layout/CTABanner";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";
import PageHero from "@/components/layout/PageHero";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        backgroundImage="/images/contact-hero.webp"
      />
      <div className="bg-background">
        <section className="py-16 md:py-24">
          {/* Stacked Layout with centered max-width */}
          <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-16 md:gap-24">
            <ContactFormSection />
            <ContactInfoSection />
          </div>
        </section>

        <CTABanner />
      </div>
    </>
  );
};

export default Contact;
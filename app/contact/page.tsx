import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/layout/CTABanner";
import ContactHeroSection from "./components/ContactHeroSection";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";

const Contact = () => {
  return (
    <div className="pt-10">
      <ContactHeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions, feedback, or inquiries."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <ContactInfoSection
              heading="Get in Touch"
              description="Whether you have a question about our products, partnerships, career opportunities, or anything else, our team is ready to help."
            />
            <ContactFormSection />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Contact;

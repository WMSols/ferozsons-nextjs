import ContactForm from "./ContactForm";

interface ContactFormSectionProps {}

const ContactFormSection = (_props: ContactFormSectionProps) => {
  return (
    <div className="lg:col-span-3">
      <div className="bg-card border rounded-lg p-6 md:p-8 shadow-sm">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormSection;

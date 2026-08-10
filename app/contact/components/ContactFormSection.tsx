import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Heading & Subheading */}
      <div className="mb-8 max-w-3xl">
        <h2 className="text-4xl md:text-5xl  font-bold  mb-4">
          Let's Start a Conversation
        </h2>
        <p className=" text-base md:text-lg leading-relaxed">
          Whether you have a question about our products, partnerships, career
          opportunities, or anything else, our team is ready to help.
        </p>
      </div>
      
      {/* Form Card Container */}
      <div className="bg-[#F8F9FA] border border-[#A5C3DF] rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-sm w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
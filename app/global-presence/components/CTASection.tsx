export default function CTASection() {
  return (
    <div className="bg-[#F7F7F7] py-16 md:pt-32 md:pb-36">
    <section className="py-16 md:py-24 bg-[#E5F2FF]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-[2.8rem]  font-bold  mb-6 leading-tight">
          Start a Conversation with <br className="hidden sm:block" />
          International Business Team
        </h2>
        
        <p className=" text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
          Our international business team is available to support strategic
          collaborations and ensure seamless access to our products worldwide.
        </p>
        
        <a
          href="mailto:export@ferozsons-labs.com"
          className="inline-flex items-center justify-center bg-white border border-[#3B73AC]/30 text-foreground font-medium text-sm md:text-base px-8 py-3 rounded-full hover:bg-gray-50 hover:border-[#3B73AC] transition-all duration-300 shadow-sm"
        >
          export@ferozsons-labs.com
        </a>
      </div>
    </section>
    </div>
  );
}
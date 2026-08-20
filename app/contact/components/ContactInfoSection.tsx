const ContactInfoSection = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Top Span Card: Corporate Headquarters */}
      <div className="bg-[#E5F2FF] rounded-[2rem] p-10 md:px-18 md:py-28 flex flex-col items-center text-center w-full">
        <h2 className="text-3xl md:text-4xl  font-bold text-black mb-12">
          Corporate Headquarters
        </h2>
        <p className="font-bold text-black text-sm md:text-base mb-2">
          Ferozsons Laboratories Limited
        </p>
        <p className=" text-sm md:text-base mb-8 max-w-sm leading-relaxed font-light">
          5 KM Sundar Raiwind Road, Raiwind, Lahore, Pakistan 54000
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <a
            href="tel:+924236026700"
            className=" font-light text-sm md:text-base underline underline-offset-4 hover:text-[#3B73AC] transition-colors"
          >
            +92-42-36026700
          </a>
          <a
            href="tel:+924236026702"
            className=" font-light text-sm md:text-base underline underline-offset-4 hover:text-[#3B73AC] transition-colors"
          >
            +92-42-36026702
          </a>
        </div>
      </div>

      {/* Bottom Grid Cards: Registered Office & Pharma Factory */}
      <div className="grid md:grid-cols-2 gap-6 h-full">
        
        {/* Registered Office */}
        <div className="bg-[#E5F2FF] rounded-[2rem] p-10 md:p-14 flex flex-col items-center text-center h-full">
          <h2 className="text-4xl  font-bold text-black mb-10">
            Registered Office
          </h2>
          <p className="font-bold text-black text-sm md:text-base mb-2">
            Ferozsons Laboratories Limited
          </p>
          <p className=" text-sm md:text-base mb-8 max-w-[250px] leading-relaxed font-light">
            197-A, The Mall, Rawalpindi, Rawalpindi-46000
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <a
              href="tel:+92514252150"
              className=" font-light text-sm md:text-base underline underline-offset-4 hover:text-[#3B73AC] transition-colors"
            >
              +92-51-4252150-53/55
            </a>
            <a
              href="tel:+92514252152"
              className=" font-light text-sm md:text-base underline underline-offset-4 hover:text-[#3B73AC] transition-colors"
            >
              +92-51-4252152-57
            </a>
          </div>
          <div className="flex flex-col gap-3 mt-auto">
            <a
              href="https://www.ferozsons-labs.com"
              target="_blank"
              rel="noreferrer"
              className=" font-light text-sm md:text-base hover:text-[#3B73AC] transition-colors"
            >
              www.ferozsons-labs.com
            </a>
            <a
              href="mailto:info@ferozsons-labs.com"
              className=" font-light text-sm md:text-base hover:text-[#3B73AC] transition-colors"
            >
              info@ferozsons-labs.com
            </a>
          </div>
        </div>

        {/* Pharma Factory */}
        <div className="bg-[#E5F2FF] rounded-[2rem] p-10 md:p-14 flex flex-col items-center text-center h-full">
          <h2 className="text-4xl  font-bold text-black mb-10">
            Pharma Factory
          </h2>
          <p className="font-bold  text-sm md:text-base mb-2">
            Ferozsons Laboratories Limited
          </p>
          <p className=" text-sm md:text-base mb-8 max-w-[250px] leading-relaxed font-light">
            P.O.Ferozsons, Nowshera (Khyber Pakhtunkhwa) - 24160
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <a
              href="tel:+92923614295"
              className=" font-light text-sm md:text-base underline underline-offset-4 hover:text-[#3B73AC] transition-colors"
            >
              +92-923-614295, 610159
            </a>
            <a
              href="tel:+92923611302"
              className=" font-light text-sm md:text-base underline underline-offset-4 hover:text-[#3B73AC] transition-colors"
            >
              +92-923-611302
            </a>
          </div>
          <div className="flex flex-col gap-3 mt-auto">
            <a
              href="mailto:info@ferozsons-labs.com"
              className=" font-light text-sm md:text-base hover:text-[#3B73AC] transition-colors"
            >
              info@ferozsons-labs.com
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactInfoSection;
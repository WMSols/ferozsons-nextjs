import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";

interface ContactInfoSectionProps {
  heading: string;
  description: string;
}

const ContactInfoSection = ({
  heading,
  description,
}: ContactInfoSectionProps) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {heading}
        </h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="space-y-5">
        <ContactInfoItem
          icon={MapPin}
          title="Registered Office"
          value="Ferozsons Laboratories Limited 197-A, The Mall, Rawalpindi, Rawalpindi-46000"
          phones={["+92-51-4252150-53/55", "+92-51-4252152-57"]}
          urls={["www.ferozsons-labs.com", "info@ferozsons-labs.com"]}
        />
        <ContactInfoItem
          icon={MapPin}
          title="Corporate Office"
          value="5 KM Sundar Raiwind Road, Raiwind, Lahore, Pakistan"
          phones={["+92-42-36026700", "+92-42-36026702"]}
          urls={["info@ferozsons-labs.com", "info@bfbio.com"]}
        />
        <ContactInfoItem
          icon={MapPin}
          title="Pharma Factory"
          value="P.O.Ferozsons, Amangarh - Nowshera (Khyber Pakhtunkhwa)"
          phones={["+92-923-614295, 610159", "+92-923-611302"]}
          urls={["info@ferozsons-labs.com"]}
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;
import { type LucideIcon } from "lucide-react";

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}
interface ContactSitesInfoProps extends ContactInfoItemProps {
  urls: string[];
  phones: string[]
}
const ContactInfoItem = ({
  icon: Icon,
  title,
  value,
  urls,
  phones

}: ContactSitesInfoProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
        <div>
        {
          urls.map((url,idx) => (
            <p key={idx} className="text-sm text-muted-foreground">{url}</p>
          ))
        }
        {
          phones.map((phone,idx) => (
            <p key={idx} className="text-sm text-muted-foreground">{phone}</p>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default ContactInfoItem;

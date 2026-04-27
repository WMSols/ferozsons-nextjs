import PageHero from "@/components/layout/PageHero";

interface ContactHeroSectionProps {
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string }[];
}

const ContactHeroSection = ({
  title,
  subtitle,
  breadcrumbs,
}: ContactHeroSectionProps) => {
  return (
    <PageHero title={title} subtitle={subtitle}  />
  );
};

export default ContactHeroSection;

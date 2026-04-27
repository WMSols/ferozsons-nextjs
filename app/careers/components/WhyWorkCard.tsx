interface WhyWorkCardProps {
  title: string;
  desc: string;
}

export default function WhyWorkCard({ title, desc }: WhyWorkCardProps) {
  return (
    <div className="bg-secondary rounded-lg p-6 text-center">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

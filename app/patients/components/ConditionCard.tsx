interface ConditionCardProps {
  name: string;
  description: string;
  treatments: string[];
}

export default function ConditionCard({
  name,
  description,
  treatments,
}: ConditionCardProps) {
  return (
    <div className="bg-secondary rounded-lg p-8">
      <h2 className="text-xl font-bold mb-3">{name}</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <p className="text-sm font-semibold mb-2">Available Treatments:</p>
      <ul className="space-y-1">
        {treatments.map((t) => (
          <li key={t} className="text-sm text-primary">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

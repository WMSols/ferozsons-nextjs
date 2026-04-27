interface FinancialHighlightProps {
  label: string;
  value: string;
}

export default function FinancialHighlight({
  label,
  value,
}: FinancialHighlightProps) {
  return (
    <div className="bg-secondary rounded-lg p-6 text-center">
      <p className="text-2xl font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

interface FinancialHighlightProps {
  label: string;
  value: string;
}

export default function FinancialHighlight({
  label,
  value,
}: FinancialHighlightProps) {
  return (
    <div className="bg-[#DCE4EC] rounded-[1.5rem] flex flex-col items-center justify-center p-6 md:p-8 text-center h-48 md:h-56 w-full shadow-sm hover:shadow-md transition-shadow">
      {/* Value Text (Centered) */}
      <h3 className="text-[#3B73AC] text-2xl md:text-3xl font-serif font-medium leading-snug whitespace-pre-line">
        {value}
      </h3>
      
      {/* Label Text (Anchored to Bottom) */}
      <p className="mt-auto font-bold text-gray-700 text-sm md:text-base tracking-wide pt-4">
        {label}
      </p>
    </div>
  );
}
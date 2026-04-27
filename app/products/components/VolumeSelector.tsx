import { Button } from "@/components/ui/button";

interface VolumeSelectorProps {
  options: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function VolumeSelector({
  options,
  selectedIndex,
  onSelect,
}: VolumeSelectorProps) {
  if (options.length <= 1) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {options.map((size, i) => (
        <Button
          key={size}
          variant={selectedIndex === i ? "default" : "outline"}
          size="sm"
          className="rounded-full"
          onClick={() => onSelect(i)}
        >
          {size}
        </Button>
      ))}
    </div>
  );
}

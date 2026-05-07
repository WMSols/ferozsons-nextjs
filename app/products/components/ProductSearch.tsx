import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({ value, onChange }: ProductSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useCallback(
    (newValue: string) => {
      onChange(newValue);
      if (searchParams.get("search")) {
        router.replace("/products", { scroll: false });
      }
    },
    [onChange, router, searchParams],
  );

  return (
    <div className="relative max-w-md mb-8">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search products..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
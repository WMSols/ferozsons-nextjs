import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { useDebounce } from "../hooks/useDebounce";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {


  // LOCAL INPUT STATE
  const [localValue, setLocalValue] =
    useState(value);

  // DEBOUNCED VALUE
  const debouncedValue =
    useDebounce(localValue, 400);

  // KEEP SYNCED WITH EXTERNAL VALUE
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // FIRE SEARCH ONLY AFTER DEBOUNCE
  useEffect(() => {
    if (debouncedValue === value) return;
    onChange(debouncedValue);
  }, [
    debouncedValue,
    onChange,
  ]);

  const handleChange = useCallback(
    (newValue: string) => {
      setLocalValue(newValue);
    },
    [],
  );

  return (
    <div className="relative max-w-md mb-8">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
      />

      <Input
        placeholder="Search products..."
        value={localValue}
        onChange={(e) =>
          handleChange(e.target.value)
        }
        className="pl-10"
      />
    </div>
  );
}
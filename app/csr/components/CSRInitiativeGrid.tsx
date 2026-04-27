import type { CSRInitiative } from "@/data/csrData";
import CSRInitiativeCard from "./CSRInitiativeCard";

interface CSRInitiativeGridProps {
  filtered: CSRInitiative[];
}

export default function CSRInitiativeGrid({
  filtered,
}: CSRInitiativeGridProps) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((initiative) => (
          <CSRInitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16">
          No initiatives in this category yet.
        </p>
      )}
    </>
  );
}

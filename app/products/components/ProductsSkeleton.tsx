import { Card, CardContent } from "@/components/ui/card";

export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="h-40 bg-secondary animate-pulse" />
          <CardContent className="pt-4 space-y-2">
            <div className="h-3 w-1/4 bg-secondary rounded animate-pulse" />
            <div className="h-5 w-2/3 bg-secondary rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-secondary rounded animate-pulse" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

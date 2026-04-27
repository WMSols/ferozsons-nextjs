interface CSRStatsBarProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export default function CSRStatsBar({ stats }: CSRStatsBarProps) {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="container py-10">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

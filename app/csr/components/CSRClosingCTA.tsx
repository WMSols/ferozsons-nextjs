export default function CSRClosingCTA() {
  return (
    <section className="border-t border-border bg-muted/40 py-16">
      <div className="container max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-3">
          Join us in building a better Pakistan
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Whether you're a partner organisation, a donor, or simply someone who
          cares — there are many ways to support the causes we champion. We
          welcome collaborations that align with our vision of a healthy,
          educated, and humane society.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get in touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

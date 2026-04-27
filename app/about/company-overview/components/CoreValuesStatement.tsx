function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center px-4 py-1 mx-2 border border-blue-200 rounded-full bg-white text-blue-500 shadow-sm align-middle font-kaisei text-2xl md:text-4xl">
      {children}
    </span>
  );
}

export default function CoreValuesStatement() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="font-kaisei text-3xl md:text-5xl text-gray-900 leading-normal font-bold">
          Our legacy is grounded in <Badge>Integrity</Badge> and reflected in
          the high standards we uphold across our work. We deliver{" "}
          <Badge>Quality</Badge> healthcare solutions that improve lives, guided
          by a <Badge>Patient-First</Badge> approach and a strong sense of
          responsibility to the communities we serve.
        </p>
      </div>
    </section>
  );
}

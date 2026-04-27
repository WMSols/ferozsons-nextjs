interface TimelineNavProps {
  years: string[];
}

export default function TimelineNav({ years }: TimelineNavProps) {
  return (
    <div className="sticky top-16 z-10 bg-gray-50/95 backdrop-blur-sm py-3">
      <div className="flex flex-wrap items-center justify-center gap-2 px-4 mx-auto max-w-4xl">
        <div className="bg-gray-100 rounded-full px-6 py-2 flex flex-wrap items-center justify-center gap-2">
          {years.map((year, i) => (
            <span key={year} className="contents">
              {i > 0 && (
                <span
                  className="w-px h-4 bg-gray-400 shrink-0"
                  aria-hidden
                />
              )}
              <span className="font-sans text-sm font-medium text-gray-700">
                {year}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

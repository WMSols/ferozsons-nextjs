import Image from "next/image";

interface TimelineEntryProps {
  year: string;
  description: string;
  imageSrc: string;
  isEven: boolean;
}

export default function TimelineEntry({
  year,
  description,
  imageSrc,
  isEven,
}: TimelineEntryProps) {
  return (
    <div
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
    >
      <div className="flex-1 w-full">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-blue-700 mb-4">
          {year}
        </h2>
        <p className="font-sans text-gray-800 leading-relaxed">{description}</p>
      </div>
      <div className="flex-1 w-full relative aspect-video md:aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden bg-gray-200 shadow-md shrink-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

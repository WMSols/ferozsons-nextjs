import Image from "next/image";

interface SpecialTimelineEntryProps {
  year: string;
  descriptionOne: string;
  imageSrcOne: string;
  descriptionTwo: string;
  imageSrcTwo: string;
}

export default function SpecialTimelineEntry({
  year,
  descriptionOne,
  imageSrcOne,
  descriptionTwo,
  imageSrcTwo,
}: SpecialTimelineEntryProps) {
  return (
    <div className="bg-black text-white rounded-3xl mx-4 md:mx-auto max-w-6xl p-8 md:p-12 my-12">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-700 text-center mb-8">
        {year}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="font-sans text-white/95 leading-relaxed mb-6">
            {descriptionOne}
          </p>
          <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-gray-800 shadow-lg">
            <Image
              src={imageSrcOne}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="font-sans text-white/95 leading-relaxed mb-6">
            {descriptionTwo}
          </p>
          <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-gray-800 shadow-lg">
            <Image
              src={imageSrcTwo}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

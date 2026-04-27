import Image from "next/image";

interface ProductImageProps {
  imageUrl: string | null;
  name: string;
}

export default function ProductImage({ imageUrl, name }: ProductImageProps) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-2xl lg:rounded-3xl bg-[#eef0f4] shadow-lg">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 60vw"
          unoptimized
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-primary/10">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}

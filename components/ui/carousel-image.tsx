import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  index: number;
}
export default function CarouselImage({ src, alt, index }: Props) {
  return (
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <Image
        width={448}
        height={448}
        quality={50}
        loading="lazy"
        src={src}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt={alt}
      />
    </div>
  );
}

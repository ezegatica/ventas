interface CarouselSliderProps {
  index: number;
}

export default function CarouselSlider({ index }: CarouselSliderProps) {
  return (
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="true"
      aria-label={`Imagen ${index + 1}`}
      data-carousel-slide-to={index}
    ></button>
  );
}

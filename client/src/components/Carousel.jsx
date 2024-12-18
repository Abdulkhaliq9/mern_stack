import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Summer Collection 2024",
      description: "Explore our latest arrivals",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      title: "Winter Essentials",
      description: "Stay warm in style",
    },
  ];

  

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="lg:col-span-2 relative h-[400px] overflow-hidden rounded-xl backdrop-blur-md bg-white/30 shadow-lg">
    {bannerSlides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
          <h2 className="text-3xl font-bold">{slide.title}</h2>
          <p className="mt-2">{slide.description}</p>
        </div>
      </div>
    ))}
    {/* Navigation Buttons */}
    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
    >
      <ChevronLeft />
    </button>
    <button
      onClick={handleNext}
      className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
    >
      <ChevronRight />
    </button>
  </div>
  );
}

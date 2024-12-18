import { useState } from "react";
import Slider1 from "../assets/images/slider/homev3-slider1.jpg";
import Slider2 from "../assets/images/slider/homev3-slider2.jpg";
import Slider3 from "../assets/images/slider/homev3-slider3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Search from "./Search";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [selectedFilter, setSelectedFilter] = useState("all");

  const bannerSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      title: "Summer Collection 2024",
      description: "Explore our latest arrivals"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      title: "Winter Essentials",
      description: "Stay warm in style"
    }
  ];
  const featuredProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7",
      title: "Premium Leather Bag",
      price: 199.99,
      rating: 4.5
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      title: "Designer Watch",
      price: 299.99,
      rating: 4.8
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
  
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
          </div>
          <div className="space-y-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="relative h-[190px] rounded-xl overflow-hidden backdrop-blur-md bg-white/30 shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
   
  );
}

import { useState } from "react";
import Slider1 from "../assets/images/slider/homev3-slider1.jpg";
import Slider2 from "../assets/images/slider/homev3-slider2.jpg";
import Slider3 from "../assets/images/slider/homev3-slider3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Search from "./Search";

export default function Carousel() {
  const slides = [
    {
      image: Slider1,
      category: "Electronics",
      title: "Spring Deals",
      description:
        "Spring into incredible deals on a selection of TVs, Smart screens, and so much more.",
    },
    {
      image: Slider2,
      category: "Electronics",
      title: "Abracadabra.",
      description:
        "A perfectly poised stand. And blazingly fast Thunderbolt ports.",
    },
    {
      image: Slider3,
      category: "Furniture",
      title: "Simple Style",
      description:
        "Dining, living, and desk areas serve their purposes in total harmony of style.",
    },
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
  
      <div className="relative  w-full h-[410px] border-gray-light bg-[rgba(242, 245, 250, 0.6)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.7px] border-[3px] ">
        {/* Slides */}
        <div className="relative overflow-hidden rounded-lg w-full  h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0   transition-transform duration-500 ease-in-out ${
                index === activeIndex ? "translate-x-0" : "translate-x-full"
              } ${index < activeIndex ? "-translate-x-full" : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover "
              />
              <div className="absolute top-1/4 left-4 bg-opacity-50  p-6 rounded-lg max-w-sm">
                <div className=" text-sm uppercase">{slide.category}</div>
                <div className=" text-3xl font-bold mt-2">{slide.title}</div>
                <div className=" text-lg mt-2">{slide.description}</div>
                <button className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="text-gray-700" />
        </button>
      </div>
   
  );
}

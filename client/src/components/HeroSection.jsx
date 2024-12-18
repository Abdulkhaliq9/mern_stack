import Carousel from "./Carousel";

import React from "react";

export default function HeroSection() {
  const featuredProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7",
      title: "Premium Leather Bag",
      price: 199.99,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      title: "Designer Watch",
      price: 299.99,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
      <Carousel className="" />

      <div className="space-y-4">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="relative h-[190px] rounded-xl overflow-hidden backdrop-blur-md bg-white/30 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react'  

export default function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050"
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661"
    },
    {
      id: 3,
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a"
    },
    {
      id: 4,
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
    }
  ];
  return (
    <div className="my-24">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-xl overflow-hidden backdrop-blur-md bg-white/30 shadow-lg group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

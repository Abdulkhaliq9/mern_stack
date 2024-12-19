import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import useApi from "../hooks/UseApi";
import toast from "react-hot-toast";
import { Star, Cross } from "lucide-react";
import { useSearch } from "../context/searchContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [categories, setCategories] = useState([]);

  const { searchTerm } = useSearch();
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const resetFilters = () => {
    setSelectedCategory("all");
    setPriceRange(1000);
    setSelectedRating(0);
  };

  const { request } = useApi();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          request("/products", "get"),
          request("/products/category", "get"),
        ]);

        setProducts(productsRes.data?.products || []);
        setCategories(categoriesRes.data?.categories || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error(error.message || "Failed to load products");
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    const ratingMatch =
      selectedRating === 0 || product.rating >= selectedRating;
    const searchMatch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && priceMatch && ratingMatch && searchMatch;
  });

  const StarRating = ({ rating }) => {
    return [...Array(5).keys()].map((index) => (
      <Star
        key={index}
        className={`${index < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <UserLayout>
      <div className="min-h-screen bg-gray-100 ">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-64 overflow-hidden my-16">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Store Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">
                Summer Collection 2024
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mobile Filter Button */}
            <button
              className="md:hidden bg-blue text-dark px-4 py-2 rounded-lg mb-4"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              Show Filters
            </button>

            {/* Filter Sidebar */}
            <div
              className={`${
                isMobileFilterOpen ? "fixed inset-0 z-50 bg-white" : "hidden"
              } md:block md:relative md:w-64 bg-white p-6 rounded-lg shadow-lg h-[580px]`}
            >
              {isMobileFilterOpen && (
                <button
                  className="absolute top-4 right-4 md:hidden"
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  <Cross className="w-6 h-6" />
                </button>
              )}


              <h2 className="text-xl font-semibold mb-6">Filter</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                {categories.map((category) => (
                  <div key={category} className="flex items-center mb-2">
                    <input
                      type="radio"
                      id={category}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={category} className="capitalize">
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Max Price: ${priceRange}
                </p>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Minimum Rating</h3>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating)}
                      className={`${
                        selectedRating >= rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      <Star className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetFilters}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 &&
                  filteredProducts.map((product, index) => (
                    <div
                      className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative border border-purple"
                      key={index}
                    >
                      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          className="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          />
                        </svg>
                      </div>
                      <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                        <LazyLoadImage
                          src={product.image}
                          alt="Product 1"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-gray-800 line-clamp-1">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <h4 className="text-lg text-gray-800 font-bold mt-4">
                          $ {product.price}
                        </h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </UserLayout>
  );
}

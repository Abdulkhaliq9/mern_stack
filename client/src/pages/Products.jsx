import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import useApi from "../hooks/UseApi";
import toast from "react-hot-toast";
import { Star } from "lucide-react";
// // import Spinner from "../components/Spinner";
// import { useSearch } from "../context/searchContext";
// import { Link } from "react-router-dom";

// export default function Products() {
//   const { request } = useApi();
// //   const { searchTerm } = useSearch(); // Get searchTerm from context
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await request("/products", "get");
//         setProducts(res.data.products || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         toast.error(error.message || "Failed to load products");
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products based on the search term
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // if (loading) return <Spinner className="mt-10" />;

//   return (
//     <UserLayout>

// <div className=" mx-auto lg:max-w-7xl sm:max-w-full ">
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
//             All Products
//           </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 ">
//       {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative border border-purple"

//               >
//                 <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16px"
//                     className="fill-gray-800 inline-block"
//                     viewBox="0 0 64 64"
//                   >
//                     <path
//                       d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                       data-original="#000000"
//                     />
//                   </svg>
//                 </div>
//                 <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
//                   <img
//                     src={product.image}
//                     alt="Product 1"
//                     className="h-full w-full object-contain"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-extrabold text-gray-800 line-clamp-1">
//                     {product.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mt-2">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                   <h4 className="text-lg text-gray-800 font-bold mt-4">
//                     $ {product.price}
//                   </h4>
//                 </div>
//               </div>
//           ))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">
//             No products found.
//           </p>
//         )}

//       </div>
//         </div>

//     </UserLayout>
//   );
// }

// import  { useEffect, useState } from 'react'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [categories, setCategories] = useState([]);

  

  const [priceRange, setPriceRange] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  // const categories = ["all", "electronics", "clothing", "books", "accessories"];
  // const products = [
  //   {
  //     id: 1,
  //     name: "Premium Wireless Headphones",
  //     price: 299.99,
  //     category: "electronics",
  //     rating: 4,
  //     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  //   },
  //   {
  //     id: 2,
  //     name: "Designer Cotton T-Shirt",
  //     price: 49.99,
  //     category: "clothing",
  //     rating: 5,
  //     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  //   },
  //   {
  //     id: 3,
  //     name: "Bestseller Novel Collection",
  //     price: 89.99,
  //     category: "books",
  //     rating: 4,
  //     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
  //   },
  //   {
  //     id: 4,
  //     name: "Luxury Watch",
  //     price: 599.99,
  //     category: "accessories",
  //     rating: 5,
  //     image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
  //   },
  //   {
  //     id: 5,
  //     name: "Smart Tablet",
  //     price: 799.99,
  //     category: "electronics",
  //     rating: 4,
  //     image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
  //   },
  //   {
  //     id: 6,
  //     name: "Leather Wallet",
  //     price: 79.99,
  //     category: "accessories",
  //     rating: 3,
  //     image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
  //   }
  // ];

  const resetFilters = () => {
    setSelectedCategory("all");
    setPriceRange(1000);
    setSelectedRating(0);
  };

  const { request } = useApi();
  //   const { searchTerm } = useSearch(); // Get searchTerm from context
  const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchProducts = async () => {
    try {
      // Fetch products and categories in parallel
      const [productsRes, categoriesRes] = await Promise.all([
        request("/products", "get"),
        request("/products/category", "get"),
      ]);

      // Set state based on responses
      setProducts(productsRes.data?.products || []);
      setCategories(categoriesRes.data?.categories || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error(error.message || "Failed to load products");
    }
  };

  fetchProducts();
}, [request]); // Add request to the dependency array

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    const ratingMatch =
      selectedRating === 0 || product.rating >= selectedRating;
    return categoryMatch && priceMatch && ratingMatch;
  });

  const StarRating = ({ rating }) => {
    return [
      ...Array(5).keys()
    ].map((index) => (
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
        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Filter Button */}
          <button
            className="md:hidden bg-blue-600 text-dark px-4 py-2 rounded-lg mb-4"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            Show Filters
          </button>

          {/* Filter Sidebar */}
          <div
            className={`${
              isMobileFilterOpen ? "fixed inset-0 z-50 bg-white" : "hidden"
            } md:block md:relative md:w-64 bg-white p-6 rounded-lg shadow-lg`}
          >
            {isMobileFilterOpen && (
              <button
                className="absolute top-4 right-4 md:hidden"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                {/* <IoMdClose className="w-6 h-6" /> */}
              </button>
            )}

            <h2 className="text-xl font-semibold mb-6">Filters</h2>

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
              {filteredProducts.map((product, index) => (
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
                    <img
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
    </div> <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Filter Button */}
          <button
            className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            Show Filters
          </button>

          {/* Filter Sidebar */}
          <div
            className={`${
              isMobileFilterOpen ? "fixed inset-0 z-50 bg-white" : "hidden"
            } md:block md:relative md:w-64 bg-white p-6 rounded-lg shadow-lg`}
          >
            {isMobileFilterOpen && (
              <button
                className="absolute top-4 right-4 md:hidden"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                {/* <IoMdClose className="w-6 h-6" /> */}
              </button>
            )}

            <h2 className="text-xl font-semibold mb-6">Filters</h2>

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
              {filteredProducts.map((product, index) => (
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
                    <img
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
    </div>
   </UserLayout>
  );
}

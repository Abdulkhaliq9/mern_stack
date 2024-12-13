import { useEffect, useState } from "react";
import UserLayout from "../layouts/UserLayout";
import useApi from "../hooks/UseApi";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Search from "../components/Search";
import { useSearch } from "../context/searchContext";
import { Link } from "react-router-dom";

export default function Products() {
  const { request, loading } = useApi();
  const { searchTerm } = useSearch(); // Get searchTerm from context
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await request("/products", "get");
        setProducts(res.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error(error.message || "Failed to load products");
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Spinner className="mt-10" />;

  return (
    <UserLayout>
    
      <div className="products-container my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden transition-all ease-in-out rounded-lg bg-white shadow-md hover:scale-105 hover:shadow-xl"
            >
              <div className="mx-auto size-[180px] sm:size-[250px] p-5">
                <img
                  className="rounded-lg w-full h-full object-contain"
                  src={product.image}
                  alt={product.title || "Product"}
                />
              </div>
              {product.discount > 0 && (
                <div className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-blue flex items-center justify-center text-sm text-white">
                  {product.discount}% Off
                </div>
              )}
              <div className="flex flex-col justify-between mt-6 h-[45%] p-6">
                <a href="#">
                  <h5 className="text-base sm:text-xl font-semibold tracking-tight text-slate-900 line-clamp-2">
                    {product.title || "Untitled Product"}
                  </h5>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                  <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {product.rating?.rate || "N/A"}
                  </span>
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className={`h-5 w-5 ${
                        index < (product.rating?.rate || 0)
                          ? "text-yellow-300"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${product.price || "0.00"}
                    </span>
                  </p>
                  <Link
                    href="#"
                    className="flex items-center rounded-md bg-purple shadow-blue shadow- text-nowrap px-3 py-2 text-xs sm:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </UserLayout>
  );
}

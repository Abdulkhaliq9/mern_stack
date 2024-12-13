import React, { useEffect, useState } from "react";
import useApi from "../hooks/UseApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const { request } = useApi();

  const fetchCategory = async () => {
    try {
      const res = await request("/products/category", "get");
      setCategories(res.data?.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error(error.message || "Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        id="dropdown-button"
        type="button"
        className="inline-flex justify-center items-center w-[260px] h-[47px] rounded-md border border-gray shadow-sm px-4 py-2 bg-purple text-sm font-medium text-white  focus:outline-none "
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleOpen}
      >
        <span
          id="dropdown-selected-option"
          className="w-full text-left overflow-hidden flex-1"
        >
          All Categories
        </span>
        <svg
          id="caret"
          className="ml-2.5 -mr-1.5 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          id="dropdown-menu"
          className="origin-top-right absolute w-full z-10 left-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
          tabIndex={-1}
        >
          <div className="py-1 text-dark" role="none">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <Link
                  to={`/category/${category}`}
                  className="block px-4 py-2 text-left text-sm hover:bg-gray focus:bg-gray"
                  role="menuitem"
                  key={index}
                >
                  {category}
                </Link>
              ))
            ) : (
              <span className="block px-4 py-2 text-left text-sm text-gray-400">
                No categories available
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

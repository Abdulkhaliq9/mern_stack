// Search.jsx
import React, { useCallback } from "react";
import { useSearch } from "../context/searchContext";
import { SearchCheck } from "lucide-react";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export default function Search() {
  const { searchTerm, updateSearchTerm } = useSearch();

  const handleSearch = useCallback(
    debounce((value) => updateSearchTerm(value), 300),
    []
  );

  return (
    <form role="search" className="relative">
      <input
        type="search"
        name="q"
        id="searchInput"
        autoComplete="on"
        defaultValue={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full px-4 py-2 rounded-md border border-blue  focus:outline-none focus:border-blue-500 "
        aria-label="Search products"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
        aria-label="Search"
      >
        <SearchCheck />
      </button>
    </form>
  );
}

import React from 'react'  
import { useSearch } from "../context/searchContext";

export default function Search({ placeholder = "Search" }) {
  const { searchTerm, updateSearchTerm } = useSearch();

  const handleSearch = (e) => {
    updateSearchTerm(e.target.value);
  };

  return (
    <form
      role="search"
      className=" md:flex md:flex-wrap md:justify-between input-group"
    >
      <div className="h-[45px] border-[#dfdfdf] border rounded overflow-hidden flex">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          type="search"
          name="q"
          autoComplete="on"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 lg:w-[450px] xl:w-[600px] h-[47px] py-2 focus:outline-none"
          id="searchInput"
          placeholder={placeholder}
          size={30}
        />
        <button
          type="submit"
          className="flex items-center h-[45px] bg-purple text-white justify-center px-4 border-l"
        >
          Search
        </button>
      </div>
    </form>
  );
}

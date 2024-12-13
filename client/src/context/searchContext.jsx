import React, { createContext, useContext, useState } from "react";

// Create the context
const SearchContext = createContext();

// Create a custom hook to use the SearchContext
export const useSearch = () => useContext(SearchContext);

// Provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (term) => setSearchTerm(term);

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

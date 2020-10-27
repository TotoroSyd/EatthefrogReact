import React, { useState, createContext, useEffect } from "react";

// exporting context object
export const FilterContext = createContext();

// COntext wrapper component - to store state
export default function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState("");

  // Share tasks state
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

import React, { useState, useContext, createContext } from "react";


const SearchBarContext = createContext({});

1
export const SearchBarProvider = ({ children }) => {
  const [] = useState("");

 
  const value = {
    
  };

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
};

export const useSearchBarContext = () => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error(
      "useSearchBarContext must be used within a SearchBarProvider"
    );
  }

  return context;
};

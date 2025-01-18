import React, { useState, createContext, useContext } from "react";

const LocationCreateContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <LocationCreateContext.Provider
      value={{ currentLocation, setCurrentLocation }}
    >
      {children}
    </LocationCreateContext.Provider>
  );
};

export const useLocationProvider = () => {
  const context = useContext(LocationCreateContext);
  if (!context) {
    throw new Error("useLocationProvider must be used within LocationProvider");
  }
  return context;
};

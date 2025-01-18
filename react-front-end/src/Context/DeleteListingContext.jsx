import React, { createContext, useContext } from "react";
import api from "../Services/api";
import { useViewListingContext } from "./ViewListingContext.tsx";

const DeleteListingContext = createContext({});

export const DeleteListingProvider = ({ children }) => {
  const { fetchListings } = useViewListingContext();

  const deleteListing = async (id) => {
    try {
      await api.delete(`/accommodations/listings/delete/${id}`);
      console.log(`Listing with ID ${id} deleted successfully`);

      await fetchListings();
    } catch (error) {
      console.error("Error deleting listing:", error.message);
    }
  };

  return (
    <DeleteListingContext.Provider value={{ deleteListing }}>
      {children}
    </DeleteListingContext.Provider>
  );
};

export const useDeleteListingContext = () => {
  const context = useContext(DeleteListingContext);
  if (!context) {
    throw new Error(
      "useDeleteListingContext must be used within a DeleteListingProvider"
    );
  }
  return context;
};

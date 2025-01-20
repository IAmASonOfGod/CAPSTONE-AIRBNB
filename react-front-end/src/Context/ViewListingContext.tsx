import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../Services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ViewListingContextType {
  listings: Array<any>;
  userListings: Array<any>;
  currentListing: any;
  fetchListings: () => Promise<void>;
  fetchUserListings: () => Promise<void>;
  setcurrentListing: React.Dispatch<React.SetStateAction<any>>;
  setUserListings: React.Dispatch<React.SetStateAction<any[]>>; 
}
const ViewListingContext = createContext<ViewListingContextType | undefined>(
  undefined
);

export const ViewListingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [listings, setListings] = useState<any[]>([]);
  const [userListings, setUserListings] = useState<any[]>([]);
  const [currentListing, setcurrentListing] = useState({});
  const navigate = useNavigate()

  const fetchListings = async () => {
    try {
      const response = await api.get("/accommodations/listings");
      setListings(response.data.data);
      console.log("Fetching List Successful:", response.data.data);
    } catch (error) {
      console.error("Error fetching listings:", error.message);
    }
  };

  const fetchUserListings = async () => {
    try {
      const response = await axios.get(
        "https://capstone-airbnb-backend.onrender.com/accommodations/Userlistings"
      );
      setUserListings(response.data.data);
      console.log("Fetching User List Successful:", response.data.data);
    } catch (error) {
      console.error("Error fetching User :", error.message);
    }
  };

  useEffect(() => {
    fetchListings();
    fetchUserListings();
  }, []);

  return (
    <ViewListingContext.Provider
      value={{
        listings,
        fetchListings,
        userListings,
        setUserListings,
        fetchUserListings,
        currentListing,
        setcurrentListing,
      }}
    >
      {children}
    </ViewListingContext.Provider>
  );
};

export const useViewListingContext = (): ViewListingContextType => {
  const context = useContext(ViewListingContext);

  if (!context) {
    throw new Error(
      "useViewListingContext must be used within a ViewListingContextProvider"
    );
  }

  return context;
};

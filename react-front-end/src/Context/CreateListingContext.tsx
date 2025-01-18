import React, { createContext, useState, useContext, ReactNode } from "react";
import api from "../Services/api";
import { useViewListingContext } from "./ViewListingContext.tsx";
import { useNavigate } from "react-router-dom";
import { useImageUploadHook } from "./SaveImageContext.tsx"; 

interface ListingFormData {
  title: string;
  location: string;
  price: string;
  type: string;
  guests: string;
  bedrooms: string;
  bathrooms: string;
  amenities: string | string[];
  images: string[]; 
  description: string;
  rating: number;
  reviews: number;
}

interface ListingContextType {
  formData: ListingFormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  createListing: () => Promise<any>;
  setFormData: React.Dispatch<React.SetStateAction<ListingFormData>>;
  handleCancel: () => void;
  uploadImage: (image: File) => Promise<string>;
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  Images: File[];
}

const ListingContext = createContext<ListingContextType | undefined>(undefined);

interface ListingProviderProps {
  children: ReactNode;
}

export const ListingProvider = ({ children }: ListingProviderProps) => {
  const { fetchListings } = useViewListingContext();
  const { uploadImage } = useImageUploadHook();
  const navigate = useNavigate();
  const [Images, setImages] = useState<File[]>([]); 

  const [formData, setFormData] = useState<ListingFormData>({
    title: "",
    location: "",
    price: "",
    type: "Entire apartment",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    images: [],
    description: "",
    rating: 0,
    reviews: 0,
  });

  const resetForm = (): ListingFormData => ({
    title: "",
    bedrooms: "",
    bathrooms: "",
    type: "Entire apartment",
    location: "",
    description: "",
    price: "",
    guests: "",
    amenities: [],
    images: [],
    rating: 0,
    reviews: 0,
  });

  const handleCancel = () => {
    setFormData(resetForm());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const prepareFormData = (): ListingFormData => {
    const updatedFormData = { ...formData };

    if (typeof updatedFormData.amenities === "string") {
      updatedFormData.amenities = updatedFormData.amenities
        .split(",")
        .map((item) => item.trim());
    }

    return updatedFormData;
  };

  const createListing = async () => {
    try {
      // Log the Images array to verify it's populated
      console.log("Images to upload:", Images);

      // Check if Images contains files
      if (Images.length === 0) {
        throw new Error(
          "No images to upload. Please add images before creating a listing."
        );
      }

      const imageUrls: string[] = []; 
      for (const image of Images) {
        console.log("Uploading image:", image.name); 
        const imageUrl = await uploadImage(image); 
        console.log("Image uploaded successfully:", imageUrl); 
        imageUrls.push(imageUrl); 
      }

      console.log("Array of urls :", imageUrls);

      const updatedFormData = prepareFormData();

      const finalFormData = { ...updatedFormData, images: imageUrls };

      console.log("Final form data before sending:", finalFormData);

      const response = await api.post("/accommodations/createListing", {
        ...finalFormData,
        price: parseInt(updatedFormData.price),
        guests: parseInt(updatedFormData.guests),
        bedrooms: parseInt(updatedFormData.bedrooms),
        bathrooms: parseInt(updatedFormData.bathrooms),
      });

      console.log("Create Listing response data: ", response.data);

      handleCancel();
      fetchListings();
      return response.data;
    } catch (error) {
      console.error("Error creating listing:", error.message);
      if (error.response) {
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        console.error("Error request:", error.request.status);
      } else {
        console.error("Unknown error:", error);
      }
      throw error;
    }
  };

  return (
    <ListingContext.Provider
      value={{
        formData,
        handleChange,
        createListing,
        setFormData,
        handleCancel,
        uploadImage,
        setImages,
        Images,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export const useListingContext = (): ListingContextType => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("useListingContext must be used within a ListingProvider");
  }
  return context;
};

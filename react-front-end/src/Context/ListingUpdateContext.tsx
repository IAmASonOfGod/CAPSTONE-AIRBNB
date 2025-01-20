import React, { useState, useEffect, useContext, createContext } from "react";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";
import { useViewListingContext } from "./ViewListingContext.tsx";
import { useImageUploadHook } from "./SaveImageContext.tsx";
import { useListingContext } from "./CreateListingContext.tsx";

interface FormData {
  title: string;
  bedrooms: string;
  bathrooms: string;
  type: string;
  location: string;
  description: string;
  price: string;
  rating: string;
  reviews: string;
  guests: string;
  images: string | string[];
  amenities: string | string[];
}

const ListingUpdateContext = createContext<{
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setListingId: React.Dispatch<React.SetStateAction<number | null>>;
  ListingId: number | null;
  formData: FormData;
  setPreviousImg: React.Dispatch<React.SetStateAction<string[]>>; // Type the setPreviousImg as dispatching string[]
} | null>(null);

export const ListingUpdateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { fetchListings } = useViewListingContext();
  const navigate = useNavigate();
  const [ListingId, setListingId] = useState<number | null>(null);
  const { uploadImage } = useImageUploadHook();
  const { Images } = useListingContext();

  // Set previousImg as an array of strings to store image URLs
  const [previousImg, setPreviousImg] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    bedrooms: "",
    bathrooms: "",
    type: "",
    location: "",
    description: "",
    price: "",
    rating: "",
    reviews: "",
    guests: "",
    images: [],
    amenities: [],
  });

  const prepareFormData = () => {
    const updatedFormData = { ...formData };

    if (typeof updatedFormData.amenities === "string") {
      updatedFormData.amenities = updatedFormData.amenities
        .split(",")
        .map((item) => item.trim());
    }
    return updatedFormData;
  };

  useEffect(() => {
    const fetchListingData = async () => {
      if (ListingId) {
        try {
          const response = await api.get(
            `/api/accommodations/listings/${ListingId}`
          );
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching listing data:", error);
        }
      }
    };

    fetchListingData();
  }, [ListingId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Log the Images array to verify it's populated
      console.log("Images to upload:", Images);
      let imageUrls: string[] = [];

      // Check if Images contains files
      if (Images.length > 0) {
        // Explicitly declare as an array of strings
        for (const image of Images) {
          console.log("Uploading image:", image.name); // Log each image before uploading
          const imageUrl = await uploadImage(image); // Upload each image using uploadImage
          console.log("Image uploaded successfully:", imageUrl); // Log the uploaded image URL
          imageUrls.push(imageUrl); // Collect the uploaded image URLs
        }
      } else {
        console.log("Previous image :", previousImg);
        imageUrls = previousImg;
      }

      // Upload images sequentially

      console.log("Array of urls :", imageUrls);

      // After all images are uploaded, prepare and send the form data
      const updatedFormData = prepareFormData();

      const finalFormData = { ...updatedFormData, images: imageUrls };

      console.log("Final form data before sending:", finalFormData);

      const response = await api.patch(
        `/api/accommodations/listings/update/${ListingId}`,
        {
          ...finalFormData,
          price: parseInt(updatedFormData.price),
          guests: parseInt(updatedFormData.guests),
          bedrooms: parseInt(updatedFormData.bedrooms),
          bathrooms: parseInt(updatedFormData.bathrooms),
        }
      );

      console.log("Updating Listing response data: ", response.data);

      fetchListings();
      navigate("/HostListing");
      return response.data;
    } catch (error) {
      console.error("Error updating listing:", error.message);
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
    <ListingUpdateContext.Provider
      value={{
        handleSubmit,
        handleChange,
        setListingId,
        ListingId,
        formData,
        setPreviousImg,
      }}
    >
      {children}
    </ListingUpdateContext.Provider>
  );
};

export const useListingUpdate = () => {
  const ListingUpdate = useContext(ListingUpdateContext);

  if (!ListingUpdate) {
    throw new Error(
      "useListingUpdate must be used within a ListingUpdateProvider"
    );
  }

  return ListingUpdate;
};

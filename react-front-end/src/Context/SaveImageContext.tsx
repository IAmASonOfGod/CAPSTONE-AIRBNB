import React, { createContext, useState, ReactNode, useContext } from "react";
import axios from "axios";

interface ImageUploadContextType {
  uploadImage: (image: File | string) => Promise<string>;
}

const ImageUploadContext = createContext<ImageUploadContextType | undefined>(
  undefined
);

interface ImageUploadProviderProps {
  children: ReactNode;
}

export const ImageProvider = ({ children }: ImageUploadProviderProps) => {
 const uploadImage = async (image: File | string): Promise<string> => {
   let file: File;

   if (typeof image === "string") {
     // If it's a base64 string, convert it to a File
     console.log("Received base64 image:", image);

     const [metadata, base64] = image.split(",");
     const mimeType = metadata.split(":")[1].split(";")[0]; // Extract mime type
     console.log("Extracted mimeType:", mimeType);

     const byteCharacters = atob(base64); // Decode base64 string to bytes
     console.log("Decoded base64 string into byte characters.");

     const byteArrays: number[] = [];

     // Convert base64 string to byte array
     for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
       const slice = byteCharacters.slice(offset, offset + 1024);
       const byteNumbers: number[] = new Array(slice.length);

       // Populate byteNumbers with char codes
       for (let i = 0; i < slice.length; i++) {
         byteNumbers[i] = slice.charCodeAt(i);
       }

       byteArrays.push(...byteNumbers); // Add byteNumbers to byteArrays
     }

     const byteArray = new Uint8Array(byteArrays); // Convert to Uint8Array
     console.log("Converted byte array to Uint8Array.");

     file = new File([byteArray], "uploaded_image.jpg", { type: mimeType }); // Create File object
     console.log("Created File object from base64 data:", file);
   } else {
     // If it's already a File object, use it directly
     console.log("Received File object:", image);
     file = image;
   }

   // Create FormData and append the file
   const formData = new FormData();
   formData.append("image", file);
   console.log("Appended file to FormData:", file);

   try {
     // Send the FormData to the server
     console.log("Sending image to server...");
     const response = await axios.post(
       "http://localhost:5000/api/accommodations/imageUpload",
       formData
     );
     console.log("Image uploaded successfully. Response:", response.data);
     console.log("Image uploaded successfully. Response:", response.data.imageUrl);
     return response.data.imageUrl; 
   } catch (error: any) {
     console.error("Image upload failed", error.message);

     if (error.response) {
       console.error("Status Code:", error.response.status);
       console.error("Response Data:", error.response.data);
       console.error("Response Headers:", error.response.headers);
     } else if (error.request) {
       console.error("No response received. Request details:", error.request);
     } else {
       console.error("Error in request setup:", error.message);
     }

     throw new Error(
       `Image upload failed: ${
         error.response?.data?.message || error.message || "Unknown error"
       }`
     );
   }
 };


  return (
    <ImageUploadContext.Provider value={{ uploadImage }}>
      {children}
    </ImageUploadContext.Provider>
  );
};

// Hook to use the image upload context
export const useImageUploadHook = (): ImageUploadContextType => {
  const context = useContext(ImageUploadContext);
  if (!context) {
    throw new Error(
      "useImageUpload must be used within an ImageUploadProvider"
    );
  }
  return context;
};

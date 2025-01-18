import React, { createContext, useState, useContext, ReactNode } from "react";


interface ImageUploadContextType {
  imagePreview: string | null;
  images: string[];
  handleImageChange: (imageUrl: string) => void;
  setImagePreview: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUploadContext = createContext<ImageUploadContextType | undefined>(
  undefined
);

export const useImageUpload = () => {
  const context = useContext(ImageUploadContext);
  if (!context) {
    throw new Error(
      "useImageUpload must be used within an ImageUploadProvider"
    );
  }
  return context;
};


interface ImageUploadProviderProps {
  children: ReactNode;
}

export const ImageUploadProvider = ({ children }: ImageUploadProviderProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (imageUrl: string) => {
    setImagePreview(imageUrl);
    setImages((prevImages) => [...prevImages, imageUrl]);
  };

  return (
    <ImageUploadContext.Provider
      value={{ imagePreview, images, handleImageChange, setImagePreview }}
    >
      {children}
    </ImageUploadContext.Provider>
  );
};

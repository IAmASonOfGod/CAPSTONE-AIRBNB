import React from "react";
import { ImageGridWrapper } from "./ImageGrid.styled";
import { useViewListingContext } from "../../../Context/ViewListingContext.tsx";

const ImageGrid = () => {
  const { currentListing } = useViewListingContext();
  return (
    <ImageGridWrapper>
      <div className="left-image-wrapper">
        <img
          src={currentListing?.images?.[0]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://img.jamesedition.com/listing_images/2020/10/23/15/50/44/c5ea9c06-aae0-4af0-92b3-c50abfe55bbe/je/2000xxs.jpg";
          }}
        />
      </div>
      <div className="right-image-wrapper">
        <div className="top-row-images">
          <div className="top-row-image-left row-image-1"></div>
          <div className="top-row-image-right row-image-2"></div>
        </div>
        <div className="bottom-row-images">
          <div className="bottom-row-image-left row-image-3"></div>
          <div className="bottom-row-image-right row-image-4"></div>
        </div>
      </div>
    </ImageGridWrapper>
  );
};

export default ImageGrid;

import React from "react";
import { ImageGridWrapper } from "./ImageGrid.styled";
import { useViewListingContext } from "../../../Context/ViewListingContext.tsx";


const ImageGrid = () => {
  const { currentListing } = useViewListingContext();
  return (
    <ImageGridWrapper>
      <div className="left-image-wrapper">
        <img src={currentListing?.images?.[0]} />
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

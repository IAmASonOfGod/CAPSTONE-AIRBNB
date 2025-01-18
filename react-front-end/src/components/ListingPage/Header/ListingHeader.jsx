import React, { useEffect } from "react";
import { Star, Favorite, Share } from "@mui/icons-material";
import { ListingWrapper } from "./ListingHeader.styled";
import { useViewListingContext } from "../../../Context/ViewListingContext.tsx";

export const ListingHeader = () => {
  const { currentListing, setcurrentListing } = useViewListingContext();

  useEffect(() => {
    const storedListing = localStorage.getItem("currentListing");
    console.log("StoredListing:", storedListing);
    if (storedListing) {
      setcurrentListing(JSON.parse(storedListing));
      console.log("currentlisting retrieved", JSON.parse(storedListing));
    }
  }, []);

  return (
    <ListingWrapper>
      <div className="listing-header">{`${currentListing.type} in ${currentListing.location}`}</div>
      <div className="listing-details">
        <div className="details-left">
          <span className="rating">
            <Star />
            {currentListing.rating}
          </span>
          <span className="reviews">({currentListing.reviews} reviews)</span>
          <span className="location"> - {currentListing.location} </span>
        </div>
        <div className="details-right">
          <button className="share-button">
            <Share /> Share
          </button>
          <button className="save-button">
            <Favorite /> Save
          </button>
        </div>
      </div>
    </ListingWrapper>
  );
};

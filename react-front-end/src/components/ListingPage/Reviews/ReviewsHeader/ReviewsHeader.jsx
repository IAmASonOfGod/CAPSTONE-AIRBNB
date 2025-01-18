import React, {useEffect} from "react";
import StarIcon from "@mui/icons-material/Star";
import { ReviewHeaderWrapper } from "./ReviewsHeader.styled";
import { useViewListingContext } from "../../../../Context/ViewListingContext.tsx";

const ReviewsHeader = () => {
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
    <>
      <ReviewHeaderWrapper>
        <div className="Icon-Rating">
          <div className="Star-rating">
            <StarIcon className="star-icon" />
          </div>
          <div className="Ratings-counter">
            <p>{currentListing.rating}</p>
          </div>
        </div>
        <div className="reviews-counter">
          <p>· {currentListing.reviews} Reviews</p>
        </div>
      </ReviewHeaderWrapper>
    </>
  );
};

export default ReviewsHeader;

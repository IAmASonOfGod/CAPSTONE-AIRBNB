import React, {useEffect} from "react";
import { DescriptionWrapper } from "./Description.styled";
import { ReactComponent as ShowMore } from "./ShowMore.svg";
import { useViewListingContext } from "../../../../Context/ViewListingContext.tsx";

const Description = () => {
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
    <DescriptionWrapper>
      <div className="Description">
        <p>{currentListing.description}</p>
      </div>
      <div className="show-more-wrapper">
        <ShowMore />
      </div>
    </DescriptionWrapper>
  );
};

export default Description;

import React, {useEffect} from "react";
import { ContentTopWrapper } from "./ContentTop.styled";
import { useViewListingContext } from "../../../../Context/ViewListingContext.tsx";

const ContentTop = () => {

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
    <ContentTopWrapper>
      <div className="Content-Top-Header">
        <div className="Header-title">
          <h2>Entire rental unit hosted by Kefilwe</h2>
          <div className="Facilities">
            {currentListing.guests} Guests · {currentListing.bedrooms} Bedroom ·{" "}
            {currentListing.bedrooms}{" "}
            Bed · {currentListing.bathrooms} Bath
          </div>
        </div>
        <div className="Header-Avatar"></div>
      </div>
    </ContentTopWrapper>
  );
};

export default ContentTop;

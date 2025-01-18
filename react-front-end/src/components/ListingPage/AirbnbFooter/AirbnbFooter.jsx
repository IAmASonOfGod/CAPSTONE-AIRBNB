import React from "react";
import { AirbnbFooterWrapper } from "./AirbnbFooter.styled";
import ListingFooter1 from "./ListingFooter/ListingFooter1";
import ListingFooter2 from "./ListingFooter/ListingFooter2";

const AirbnbFooter = () => {
  return (
    <AirbnbFooterWrapper>
      <ListingFooter1 />
      <ListingFooter2/>
    </AirbnbFooterWrapper>
  );
};

export default AirbnbFooter;

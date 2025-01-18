import React from "react";
import { BannerWrapper } from "./HomePageBanner.styled";
import HomeHeader from "./HomeHeader/HomeHeader";
import AirbnbSearch from "./AirbnbSearch/AirbnbSearch";
import BigCard from "./BigCard/BigCard";

const HomePageBanner = () => {
  return (
    <BannerWrapper>
      <HomeHeader />
      <AirbnbSearch />
      <BigCard />
    </BannerWrapper>
  );
};

export default HomePageBanner;

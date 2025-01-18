import React from "react";
import { MyPageWrapper } from "./PageWrapper.styled";
import { ListingHeader } from "../../components/ListingPage/Header/ListingHeader";
import ImageGrid from "./ImagesSections/ImageGrid";
import Content from "./ContectSection/Content";
import Reviews from "./Reviews/Reviews";
import AboutHost from "./AboutHost/AboutHost";
import ThingsToKnow from "./ThingsToKnow/ThingsToKnow";
import PageWrapperHeader from "./PageWrapperHeader";

export const PageWrapper = () => {
  return (
    <MyPageWrapper>
    <PageWrapperHeader/>
      <ListingHeader />
      <ImageGrid />
      <Content />
      <hr className="divider" />
      <Reviews />
      <hr className="divider" />
      <AboutHost />
      <hr className="divider" />
      <ThingsToKnow />
    </MyPageWrapper>
  );
};

import React from "react";
import { ContentWrapper } from "./Content.styled";
import ContentTop from "./ContentTop/ContentTop";
import ContentDetails from "./ContentDetails/ContentDetails";
import Description from "./Description/Description";
import SleepingArea from "./SleepingArea/SleepingArea";
import Amenities from "./Amenities/Amenities";
import Dates from "./Dates/Dates";
import PaymentSection from "./PaymentSection/PaymentSection";

const Content = () => {
  return (
    <ContentWrapper>
      <div className="Content-left">
        <ContentTop />
        <ContentDetails />
        <hr />
        <Description />
        <hr />
        <SleepingArea />
        <hr />
        <Amenities />
        <hr />
        <Dates/>
      </div>
    <PaymentSection/>
    </ContentWrapper>
  );
};

export default Content;

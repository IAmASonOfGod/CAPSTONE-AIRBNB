import React from "react";
import { AboutHostWrapper } from "./AboutHost.styled";
import AboutHostHeader from "./AboutHostHeader/AboutHostHeader";
import Description from "./Description/Description";

const AboutHost = () => {
  return (
    <AboutHostWrapper>
      <AboutHostHeader />
      <Description />
    </AboutHostWrapper>
  );
};

export default AboutHost;

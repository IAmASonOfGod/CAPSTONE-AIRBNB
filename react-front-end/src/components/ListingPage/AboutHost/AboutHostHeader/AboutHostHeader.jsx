import React from "react";
import { AboutHostHeaderStyle } from "./AboutHostHeader.styled";
import { ReactComponent as Star } from "./Star.svg";
import { ReactComponent as Shield } from "./Shield.svg";
import { ReactComponent as Badge } from "./Badge.svg";

const AboutHostHeader = () => {
  return (
    <AboutHostHeaderStyle>
      <div className="host-profile">
        <div className="host-profile-pic"></div>
        <div className="host-title-and-subtitle">
          <div className="host-title">
            <p>Hosted by Kefilwe</p>
          </div>
          <div className="host-subtitle">
            <p>Joined February 2021</p>
          </div>
        </div>
      </div>
      <div className="host-reviews">
        <div className="reviews-wrapper">
          <div className="icon">
            <Star />
          </div>
          <div className="reviews">
            <p>14 Reviews</p>
          </div>
        </div>
        <div className="identity-verified-wrapper">
          <div className="icon">
            <Shield />
          </div>
          <div className="identity-verification">
            <p>Identity verified</p>
          </div>
        </div>
        <div className="super-host-wrapper">
          <div className="icon">
            <Badge />
          </div>
          <div className="host-type">
            <p>Superhost</p>
          </div>
        </div>
      </div>
    </AboutHostHeaderStyle>
  );
};

export default AboutHostHeader;

import React from "react";
import { DiscoverContainer } from "./Discover.styled";

const Discover = () => {
  return (
    <DiscoverContainer>
      <div className="discover-header">
        <p>Discover Airbnb Experiences</p>
      </div>
      <div className="discover-row">
        <div className="discover-card-1">
          <div className="suggestions">
            <p>Things to do on your trip</p>
          </div>
          <div className="button-1">
            <button className="trip-experiences-button">
              <p>Experiences</p>
            </button>
          </div>
        </div>
        <div className="discover-card-2">
          <div className="suggestions">
            <p>Things to do from home</p>
          </div>
          <div className="button-2">
            <button className="online-experiences">
              <p>Online Experiences</p>
            </button>
          </div>
        </div>
      </div>
    </DiscoverContainer>
  );
};

export default Discover;

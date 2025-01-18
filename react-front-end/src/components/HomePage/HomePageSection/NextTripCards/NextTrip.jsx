import React from "react";
import { NextTripContainer } from "./NextTrip.styled";

const NextTrip = () => {
  return (
    <NextTripContainer>
      <div className="next-trip-header">
        <p>Inspiration for your next trip</p>
      </div>
      <div className="next-trip-row">
        <div className="city-card">
          <div className="city-card-img-1"></div>
          <div className="city-card-content">
            <div className="card-title">
              <p>Sandton City Hotel</p>
            </div>
            <div className="card-subtitle">57 km away</div>
          </div>
        </div>
        <div className="city-card">
          <div className="city-card-img-2"></div>
          <div className="city-card-content card-2">
            <div className="card-title">
              <p>Joburg City <br/> Hotel</p>
            </div>
            <div className="card-subtitle">180 km away</div>
          </div>
        </div>
        <div className="city-card">
          <div className="city-card-img-3"></div>
          <div className="city-card-content card-3">
            <div className="card-title">
              <p>Woodmead <br/>Hotel</p>
            </div>
            <div className="card-subtitle">75 km away</div>
          </div>
        </div>
        <div className="city-card">
          <div className="city-card-img-4"></div>
          <div className="city-card-content card-4">
            <div className="card-title">
              <p>Hyde Park <br/> Hotel</p>
            </div>
            <div className="card-subtitle">34 km away</div>
          </div>
        </div>
      </div>
    </NextTripContainer>
  );
};

export default NextTrip;

import React from "react";
import { ListingFooter1Wrapper } from "./ListingFooter1.styled";
import { ReactComponent as Chevron } from "./Chevron.svg";

const ListingFooter1 = () => {
  return (
    <ListingFooter1Wrapper>
      <div className="explore-header">
        <p>Explore other options in New York</p>
      </div>
      <div className="options-container">
        <div className="options-column">
          <div className="option">
            <p>Paris</p>
          </div>
          <div className="option">
            <p>Lille</p>
          </div>
          <div className="option">
            <p>Toulouse</p>
          </div>
        </div>
        <div className="options-column">
          <div className="option">
            <p>Nice</p>
          </div>
          <div className="option">
            <p>Aix-en-Provence</p>
          </div>
          <div className="option">
            <p>Montpellier</p>
          </div>
        </div>
        <div className="options-column">
          <div className="option">
            <p>Lyon</p>
          </div>
          <div className="option">
            <p>Rouen</p>
          </div>
          <div className="option">
            <p>Dijon</p>
          </div>
        </div>
        <div className="options-column">
          <div className="option">
            <p>Marsellie</p>
          </div>
          <div className="option">
            <p>Amiens</p>
          </div>
          <div className="option">
            <p>Grenouble</p>
          </div>
        </div>
      </div>
      <div className="explore-header">
        <p>Unique Stays On AirBnb</p>
      </div>
      <div className="options-container">
        <div className="options-column">
          <div className="option">
            <p>Beach House Rentals</p>
          </div>
          <div className="option">
            <p>Cabin Rentals</p>
          </div>
        </div>
        <div className="options-column">
          <div className="option">
            <p>Camper Rentals</p>
          </div>
          <div className="option">
            <p>Tiny House Rentals</p>
          </div>
        </div>
        <div className="options-column">
          <div className="option">
            <p>Glamping Rentals</p>
          </div>
          <div className="option">
            <p>Lakehouse Rentals</p>
          </div>
        </div>
        <div className="options-column">
          <div className="option">
            <p>Tree House Rentals</p>
          </div>
          <div className="option">
            <p>Mountain Chalet Rentals</p>
          </div>
        </div>
      </div>
      <div className="bread-crumb">
        <div className="airbnb-breadcrumb">
          <p>Airbnb</p>
        </div>
        <Chevron />
        <div className="airbnb-breadcrumb">
          <p>Europe</p>
        </div>
        <Chevron />
        <div className="airbnb-breadcrumb">
          <p>France</p>
        </div>
        <Chevron />
        <div className="airbnb-breadcrumb">
          <p>Italy</p>
        </div>
        <Chevron />
      </div>
    </ListingFooter1Wrapper>
  );
};

export default ListingFooter1;

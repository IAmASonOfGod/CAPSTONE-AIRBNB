import React from "react";
import { RatingsWrapper } from "./Ratings.styled";
import { ReactComponent as RatingBar100 } from "./RatingBarsSvg/RatingBar100.svg";
import { ReactComponent as RatingBar80 } from "./RatingBarsSvg/RatingBar80.svg";
import { ReactComponent as RatingBar60 } from "./RatingBarsSvg/RatingBar60.svg";
import { ReactComponent as RatingBar40 } from "./RatingBarsSvg/RatingBar40.svg";

const Ratings = () => {
  return (
    <RatingsWrapper>
      <div className="ratings-column1">
        <div className="review-category">
          <div className="review">
            <p>Cleanliness</p>
          </div>
          <div className="ratings-bar-wrapper">
            <div className="review-bar">
              <RatingBar100 />
            </div>
            <div className="review-bar-number">
              <p>5.0</p>
            </div>
          </div>
        </div>
        <div className="review-category">
          <div className="review">
            <p>Communication</p>
          </div>
          <div className="ratings-bar-wrapper">
            <div className="review-bar">
              <RatingBar100 />
            </div>
            <div className="review-bar-number">
              <p>5.0</p>
            </div>
          </div>
        </div>
        <div className="review-category">
          <div className="review">
            <p>Check-in</p>
          </div>
          <div className="ratings-bar-wrapper">
            {" "}
            <div className="review-bar">
              <RatingBar80 />
            </div>
            <div className="review-bar-number">
              <p>4.8</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ratings-column2">
        <div className="review-category">
          <div className="review">
            <p>Accuracy</p>
          </div>
          <div className="ratings-bar-wrapper">
            {" "}
            <div className="review-bar">
              <RatingBar60 />
            </div>
            <div className="review-bar-number">
              <p>3.5</p>
            </div>
          </div>
        </div>
        <div className="review-category">
          <div className="review">
            <p>Location</p>
          </div>
          <div className="ratings-bar-wrapper">
            {" "}
            <div className="review-bar">
              <RatingBar40 />
            </div>
            <div className="review-bar-number">
              <p>3.2</p>
            </div>
          </div>
        </div>
        <div className="review-category">
          <div className="review">
            <p>Value</p>
          </div>
          <div className="ratings-bar-wrapper">
            {" "}
            <div className="review-bar">
              <RatingBar40 />
            </div>
            <div className="review-bar-number">
              <p>3.2</p>
            </div>
          </div>
        </div>
      </div>
    </RatingsWrapper>
  );
};

export default Ratings;

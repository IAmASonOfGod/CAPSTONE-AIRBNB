import React from "react";
import { ReviewsWrapper } from "./Reviews.styled";
import ReviewsHeader from "./ReviewsHeader/ReviewsHeader";
import Ratings from "../Ratings/Ratings";
import Comments from './Comments/Comments'

const Reviews = () => {
  return (
    <ReviewsWrapper>
      <ReviewsHeader />
      <Ratings />
      <Comments/>
    </ReviewsWrapper>
  );
};

export default Reviews;

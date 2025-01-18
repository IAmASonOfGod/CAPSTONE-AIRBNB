import React from "react";
import { ContentDetailsWrapper } from "./ContentDetails.styled";
import {ReactComponent as House} from './House.svg'
import { ReactComponent as Star } from "./Star.svg";
import { ReactComponent as CheckIn } from "./CheckIn.svg";
import { ReactComponent as Calender } from "./Calender.svg";

const ContentDetails = () => {
  return (
    <ContentDetailsWrapper>
      <div className="Airbnb-Data-Detail">
        <div className="Icon">
          <House />
        </div>
        <div className="Title-Subtitle">
          <div className="Title">
            <p>Entire home</p>
          </div>
          <div className="Subtitle">
            <p>You'll have the apartment to yourself</p>
          </div>
        </div>
      </div>
      <div className="Airbnb-Data-Detail">
        <div className="Icon">
          <Star />
        </div>
        <div className="Title-Subtitle">
          <div className="Title">
            <p>Enhanced Clean</p>
          </div>
          <div className="Subtitle">
            <p>
              This Host committed to Airbnb's 5-step enhanced cleaning process.{" "}
              <span className="bold-text">Show more</span>
            </p>
          </div>
        </div>
      </div>
      <div className="Airbnb-Data-Detail">
        <div className="Icon">
          <CheckIn />
        </div>
        <div className="Title-Subtitle">
          <div className="Title">
            <p>Self Check-in</p>
          </div>
          <div className="Subtitle">
            <p>Check yourself with the keypad.</p>
          </div>
        </div>
      </div>
      <div className="Airbnb-Data-Detail">
        <div className="Icon">
          <Calender />
        </div>
        <div className="Title-Subtitle">
          <div className="Title">
            <p>Free cancellation before 1 Jan 25</p>
          </div>
        </div>
      
      </div>
    </ContentDetailsWrapper>
  );
};

export default ContentDetails;

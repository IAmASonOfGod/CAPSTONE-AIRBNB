import React from "react";
import { ThingsToKnowWrapper } from "./ThingsToKnow.styled";
import { ReactComponent as Clock } from "./Clock.svg";
import { ReactComponent as Door } from "./Door.svg";
import { ReactComponent as Trolley } from "./Trolley.svg";
import { ReactComponent as Fire } from "./Fire.svg";
import { ReactComponent as Bone } from "./Bone.svg";
import { ReactComponent as Party } from "./Party.svg";
import { ReactComponent as Wind } from "./Wind.svg";
import { ReactComponent as SmokeAlarm } from "./SmokeAlarm.svg";
import { ReactComponent as ShowMore } from "./ShowMore.svg";
import { ReactComponent as Sparkles } from "./Sparkles.svg";
import { ReactComponent as SprayPaint } from "./SprayPaint.svg";
import { ReactComponent as CreditCard } from "./CreditCard.svg";

const ThingsToKnow = () => {
  return (
    <ThingsToKnowWrapper>
      <div className="header">
        <p>Things To Know</p>
      </div>
      <div className="things-to-know-columns">
        <div className="things-to-know-column1">
          <div className="house-rules-header ">
            <p>House rules</p>
          </div>
          <div className="list">
            <div className="icon-rule">
              <div className="icon">
                <Clock />
              </div>
              <div className="rule">
                <p>Check-in: After 4:00 PM</p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <Clock />
              </div>
              <div className="rule">
                <p>Self check-in with lockbox</p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <Door />
              </div>
              <div className="rule">
                <p>Check-in: After 4:00 PM</p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <Trolley />
              </div>
              <div className="rule">
                <p>Not suitable for infants (under 2 years)</p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <Fire />
              </div>
              <div className="rule">
                <p>No smoking</p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <Bone />
              </div>
              <div className="rule">
                <p>No pets</p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <Party />
              </div>
              <div className="rule">
                <p>No parties or events</p>
              </div>
            </div>
          </div>
        </div>
        <div className="things-to-know-column2">
          <div className="health-policy-header">
            <p>House Safety</p>
          </div>

          <div className="list">
            <div className="icon-rule2">
              <div className="icon">
                <Sparkles />
              </div>
              <div className="rule2">
                <p>
                  Committed to Airbnb's enhanced cleaning process. Show more
                </p>
              </div>
            </div>
            <div className="icon-rule2">
              <div className="icon">
                <SprayPaint />
              </div>
              <div className="rule2">
                <p>
                  Airbnb's social-distancing and other COVID-19-related
                  guidelines apply
                </p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <Wind />
              </div>
              <div className="rule">
                <p>Carbon monoxide alarm</p>
              </div>
            </div>
            <div className="icon-rule">
              <div className="icon">
                <SmokeAlarm />
              </div>
              <div className="rule">
                <p>Smoke alarm</p>
              </div>
            </div>
            <div className="icon-rule2">
              <div className="icon">
                <CreditCard />
              </div>
              <div className="rule2">
                <p>
                  Security Deposit - if you damage the home, you may be charged
                  up to $566
                </p>
              </div>
            </div>
            <div className="show-more-wrapper">
              <div className="show-more">
                <p>Show more</p>
              </div>
              <div className="chevron-right">
                <ShowMore />
              </div>
            </div>
          </div>
        </div>
        <div className="things-to-know-column3">
          <div className="health-policy-header">
            <p>Cancellation Policy</p>
          </div>
          <div className="free-cancellation">
            <p>Free cancellation 14 days before check-in</p>
          </div>
          <div className="show-more-wrapper">
            <div className="show-more">
              <p>Show more</p>
            </div>
            <div className="chevron-right">
              <ShowMore />
            </div>
          </div>
        </div>
      </div>
    </ThingsToKnowWrapper>
  );
};

export default ThingsToKnow;

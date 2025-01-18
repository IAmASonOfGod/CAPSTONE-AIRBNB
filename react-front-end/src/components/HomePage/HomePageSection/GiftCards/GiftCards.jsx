import React from "react";
import { GiftCardContainer } from "./GiftCards.styled";
import { ReactComponent as GiftCard } from "./GiftCard.svg";

const GiftCards = () => {
  return (
    <GiftCardContainer>
      <div className="gift-cards-left">
        <div className="gift-cards-title">
          <p>
            Shop Airbnb <br /> gift cards
          </p>
        </div>
        <div className="gift-card-button">
          <div className="card-button">
            <p>Learn more</p>
          </div>
        </div>
      </div>
      <div className="gift-cards-right">
        <GiftCard />
      </div>
    </GiftCardContainer>
  );
};

export default GiftCards;

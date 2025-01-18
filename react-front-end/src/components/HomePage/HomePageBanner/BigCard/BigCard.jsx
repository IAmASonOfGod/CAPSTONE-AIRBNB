import React from "react";
import { BigCardWrapper } from "./BigCard.styled";

const BigCard = () => {
  return (
    <BigCardWrapper>
      <p className="destination">Not sure where to go? Perfect.</p>

      <div className="button-containter">
        <button><p>Explore</p></button>
      </div>
    </BigCardWrapper>
  );
};

export default BigCard;

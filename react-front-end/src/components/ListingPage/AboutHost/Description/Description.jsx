import React from "react";
import { DescriptionStyles } from "./Description.styled";
import { ReactComponent as Shield } from "./Shield.svg";

const Description = () => {
  return (
    <DescriptionStyles>
      <div className="host-type">
        <p>Ahmal is a super host</p>
      </div>
      <div className="host-experience">
        <p>
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for guests.
        </p>
      </div>
      <div className="response-rate">
        <p>Response rate: 100%</p>
      </div>
      <div className="response-time">
        <p>Response time: within an hour</p>
      </div>
      <div className="contact-host">
        <button>
          <p>Contact Host</p>
        </button>
      </div>
      <div className="payment-protection">
        <div className="shield">
          <Shield />
        </div>
        <div className="payment-protection-text">
          <p>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app
          </p>
        </div>
      </div>
    </DescriptionStyles>
  );
};

export default Description;

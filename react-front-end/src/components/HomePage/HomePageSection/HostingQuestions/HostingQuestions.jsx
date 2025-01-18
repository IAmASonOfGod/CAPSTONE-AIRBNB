import React from "react";
import { HostingQuestionsWrapper } from "./HostingQuestions.styled";

const HostingQuestions = () => {
  return (
    <HostingQuestionsWrapper>
      <div className="questions-title">
        <p>Questions about hosting?</p>
      </div>
      <div className="questions-button">
        <button className="host-button">
          <p>Ask a superhost</p>
        </button>
      </div>
    </HostingQuestionsWrapper>
  );
};

export default HostingQuestions;

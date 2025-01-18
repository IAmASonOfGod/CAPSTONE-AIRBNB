import React from "react";
import { DatesWrapper } from "./Dates.styled";
import DatePicker from "../DatePicker/DatePicker";

const Dates = () => {

  return (
    <DatesWrapper>
      <div className="Dates-header">
        <div className="Dates-header-title">
          <p>9 nights in New York</p>
        </div>
      </div>
      <div className="Dates-calender">
        <DatePicker />
      </div>
    </DatesWrapper>
  );
};

export default Dates;

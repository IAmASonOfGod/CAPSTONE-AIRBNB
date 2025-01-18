import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const RangeDatePicker = () => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    console.log(ranges.selection);
    setSelectionRange(ranges.selection);
  };

  return (
    <div>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
};

export default RangeDatePicker;

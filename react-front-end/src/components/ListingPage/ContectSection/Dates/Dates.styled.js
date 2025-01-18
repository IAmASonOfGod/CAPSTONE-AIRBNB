import styled from "styled-components";

export const DatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0px;
  width: 670px;
  height: 452px;

  .Dates-header {
    display: flex;
    flex-direction: row;
    justify-content: start;

    padding: 0px;
    width: 670px;
    height: 45px;
  }

  .Dates-calendar {
    padding: 0;
    width: 670px;
    height: 342px;
    border: 1px solid black;
    overflow: hidden;
    position: relative;
  }

  .Dates-calendar .react-date-range {
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
    max-height: 100% !important;
    border-radius: 0px;
    box-sizing: border-box;
  }

  .Dates-header-title {
    width: 670px;
    height: 45px;
  }

  .Dates-header-title > p {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #000000;
    height: 45px;
  }
`;

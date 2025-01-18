import styled from "styled-components";

export const ContentDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 670px;
  height: 212px;

  .Airbnb-Data-Detail {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 670px;
    height: 44px;
  }

  .Title-Subtitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 622px;
    height: 44px;
  }

  .Title {
    width: 622px;
    height: 24px;
  }

  .Subtitle {
    width: 622px;
    height: 20px;
  }

  .Title > p {
    margin: 0px;
    padding: 0px;
    color: black;
    stylename: text-base/Medium;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  .Subtitle > p {
    margin: 0px;
    padding: 0px;
    color: #6b7280;
    stylename: text-sm/Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .bold-text {
    font-weight: bold;
    color: black;
  }
`;

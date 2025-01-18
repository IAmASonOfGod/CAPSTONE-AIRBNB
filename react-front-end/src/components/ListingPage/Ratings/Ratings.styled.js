import styled from "styled-components";

export const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;
  width: 1120px;
  height: 104px;

  .ratings-column1,
  .ratings-column2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 80px 0px 0px;
    gap: 16px;
    width: 520px;
    height: 104px;
  }

  .review-category {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 440px;
    height: 24px;
  }

  .review {
    width: 274px;
    height: 24px;
  }

  .review > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .ratings-bar-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 150px;
    height: 16px;
  }

  .review-bar-number {
    width: 18px;
    height: 16px;
  }

  .review-bar-number > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

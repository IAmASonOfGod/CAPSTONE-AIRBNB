import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 670px;
  height: 164px;

  .Description {
    width: 670px;
    height: 120px;
  }

  .Description > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .show-more-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 96px;
    height: 20px;
  }
`;

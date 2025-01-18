import styled from "styled-components";

export const ReviewHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 1120px;
  height: 32px;

  .Icon-Rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 72px;
    height: 32px;
  }

  .Star-rating {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
  }

  .Ratings-counter {
    width: 36px;
    height: 32px;
  }

  .Ratings-counter > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    align-items: center;
    color: #000000;
  }

  .star-icon {
    color: #e91e63;
    font-size: 24px;
  }

  .reviews-counter {
    width: 150px;
    height: 32px;
  }

  .reviews-counter > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

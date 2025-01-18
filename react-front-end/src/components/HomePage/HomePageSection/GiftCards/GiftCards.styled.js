import styled from "styled-components";

export const GiftCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 48px;
  width: 1280px;
  height: 320px;

  .gift-cards-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 377.78px;
    height: 192px;
  }

  .gift-cards-right {
    width: 854.22px;
    height: 320px;
    background: url(1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg);
    background-size: cover;
  }

  .gift-cards-title {
    width: 377.78px;
    height: 112px;
  }

  .gift-cards-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .gift-card-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 135px;
    height: 56px;
  }

  .card-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    width: 135px;
    height: 56px;
    background: #000000;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
    cursor: pointer;
  }

  .card-button > p {
    width: 87px;
    height: 24px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
`;

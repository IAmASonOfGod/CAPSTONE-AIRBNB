import styled from "styled-components";

export const ListingFooter1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 1512px;
  height: 464px;
  background: #f9fafb;
  box-shadow: inset 0px -1px 0px #e5e7eb;

  .expore-header {
    width: 1120px;
    height: 32px;
  }

  .explore-header > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
  }

  .options-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1120px;
    height: 92px;
  }

  .options-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 262px;
    height: 92px;
  }

  .option {
    width: 262px;
    height: 20px;
  }

  .option > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4b5563;
  }

  .bread-crumb {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-right: 813px;
    gap: 8px;
    width: 308px;
    height: 20px;
  }

  .airbnb-breadcrumb {
    width: 44px;
    height: 20px;
  }

  .airbnb-breadcrumb > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .chevron-right {
    width: 20px;
    height: 20px;
  }
`;

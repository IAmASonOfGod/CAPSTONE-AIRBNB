import styled from "styled-components";

export const ListingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.9rem;
  color: #6b6b6b; /* Grey color */
  width: 1120px;
  height: 68px;
  gap: 1px;

  .listing-header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
  }

  .listing-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .details-left {
      display: flex;
      gap: 2px;
    }

    .rating,
    .reviews,
    .location {
      display: flex;
      align-items: center;

      & > .MuiSvgIcon-root {
        margin-right: 3px; /* Space between icon and text */
        font-size: 16px;
      }
    }

    .details-right {
      display: flex;
      gap: 1px;

      .share-button,
      .save-button {
        display: flex;
        align-items: center;
        background-color: white;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        color: #6b6b6b;
        font-weight: 100;
        margin-right: 10px;

        & > .MuiSvgIcon-root {
          margin-right: 3px; /* Space between icon and text */
          font-size: 16px;
        }
      }
    }
  }
`;

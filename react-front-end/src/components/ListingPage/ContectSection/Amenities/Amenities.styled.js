import styled from "styled-components";

export const AmenitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 670px;
  height: 356px;

  p {
    margin: 0px;
  }

  .Amenities-title {
    width: 670px;
    height: 32px;
  }

  .Amenities-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 670px;
    height: 224px;
  }

  .Amenities-title > p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .Amenities-section-column1,
  .Amenities-section-column2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 323px;
    height: 224px;
  }

  .column-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 323px;
    height: 32px;
  }
  .Show-more-amenities {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 178px;
    height: 36px;
  }

  .Show-more-amenities > button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 178px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
  }

  .Amenity-label > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

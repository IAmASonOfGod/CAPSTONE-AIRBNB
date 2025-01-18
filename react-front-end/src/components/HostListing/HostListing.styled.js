import styled from "styled-components";

export const HostListingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1512px;
  height: 1339px;

  .host-listing-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 24px 16px;
    gap: 24px;
    width: 1512px;
    height: 165px;
    background: #ffffff;
    box-shadow: inset 0px -1px 0px #f3f4f6;
  }

  .filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 1392px;
    height: 36px;
  }

  .view-reservation {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 154px;
    height: 36px;
  }

  .view-reservation > button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 154px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 100px;
  }

  .view-listing {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 120px;
    height: 36px;
  }

  .view-listing > button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 154px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 100px;
  }

  .create-listing {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 120px;
    height: 36px;
  }

  .create-listing > button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 154px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 100px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;
    width: 1512px;
    height: 1168px;
    // border: 1px solid black;
  }

  .listing-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1360px;
    height: 44px;
  }

  .listing-header > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: black;
  }

  .listing-welcome-msg {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: black;
    margin-left: 530px;
  }

  .listing-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 1440px;
    height: 350px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 50px;
  }

  .listing {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1400px;
    height: 200px;
  }

  .listing-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 16px;
    width: 1095px;
    height: 205px;
  }

  .listing-content-header {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    width: 1080px;
    height: 52px;
  }

  .listing-title-subtitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 1036;
    height: 52px;
  }

  .heart {
    padding-left: 9px;
    width: 32px;
    height: 32px;
  }

  .divider {
    width: 40px;
    height: 0px;
    border: 1px solid #e5e7eb;
  }

  .listing-content-title {
    width: 250px;
    height: 20px;
    margin: 0px;
  }

  .listing-content-title > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .listing-content-subtitle {
    width: 250px;
    height: 25px;
  }

  .listing-content-subtitle > P {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #374151;
  }

  // .listing-img {
  //   box-sizing: border-box;
  //   width: 300px;
  //   height: 200px;
  //   border: 1px solid #e5e7eb;
  //   border-radius: 12px;
  //   background: url(https://s3-alpha-sig.figma.com/img/d04e/1510/4bb9a1003945dedcc1bdd5d42f9efd3c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-CJZ4AAYAGxgzsmvAuV5rWQNGmQTYPro-LNFI9Kr4WxHU3VAzWcOQU1uwfJ5C45qcBMhAoE~S10gIuXX68azKwF6HpTWGDr~F7BEeWDk49lyrIXqbreaCHc9ra0YfyPZjp3rSY8eme0FCV5fNTNmSMCBgUgOVqv~LU7QvElWRyn8vAwX4SbLRQx7BurF3JCmWkyJZjOTy2BsCGREMloygym62EYDMgWB9UH8Nim3KTAQs~xTqVNTQeSwwDHmoV7iJOI2kAA3wioIUQJhXA6wvUYfXskNEu9pctCqFasWVDwO1LgK0rPVrEt3ePf2gHDkH3Hvh5OtCkvP~Zug8mtDQ__);
  //   background-size: cover;
  // }

  .listing-img {
    box-sizing: border-box;
    width: 300px;
    height: 200px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden; 
  }

  .listing-img img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Makes sure the image covers the div area */
  }

  .update-button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 286px;
    height: 44px;
  }

  .update-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    width: 286px;
    height: 44px;
    background: #4153f5;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
    flex-grow: 1;
    cursor: pointer;
  }

  .update-button > p {
    width: 50px;
    height: 20px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .delete-button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 286px;
    height: 44px;
  }

  .delete-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    width: 286px;
    height: 44px;
    background: #de3151;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
    cursor: pointer;
  }

  .delete-button > p {
    width: 50px;
    height: 20px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .content-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 1080px;
    height: 40px;
  }

  .content-details-listing {
    width: 1036px;
    height: 20px;
  }

  .content-details-listing > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .content-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px;
    gap: 16px;
    width: 1080px;
    height: 28px;
  }

  .content-details-amenities {
    width: 1036px;
    height: 20px;
  }

  .content-details-amenities > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .review {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 930px;
    height: 20px;
  }

  .price-per-night {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 90px;
    height: 28px;
  }

  .star-rating {
    width: 21px;
    height: 20px;
  }

  .star-rating > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #374151;
  }

  .star {
    width: 20px;
    height: 20px;
  }

  .review-number {
    width: 89px;
    height: 20px;
  }

  .review-number > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #374151;
  }

  .price {
    margin-top: 2px;
    width: 43px;
    height: 28px;
  }

  .price > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #374151;
  }

  .per-night {
    width: 39px;
    height: 20px;
  }

  .per-night > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #374151;
  }
`;

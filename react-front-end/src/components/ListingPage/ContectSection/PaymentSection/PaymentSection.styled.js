import styled from "styled-components";

export const PaymentSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 370px;
  height: 564px;

  .booking-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 16px;
    width: 370px;
    height: 520px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 20px 25px rgba(31, 41, 55, 0.1),
      0px 10px 10px rgba(31, 41, 55, 0.04);
    border-radius: 8px;
  }

  .booking-box-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 70px;
    width: 322px;
    height: 32px;
  }

  .header-price {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 120px;
    height: 32px;
  }

  .price {
    width: 37px;
    height: 32px;
  }

  .price p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .per {
    width: 6px;
    height: 28px;
  }

  .per p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
    // padding: 4px;
  }

  .night {
    width: 60px;
    height: 28px;
  }

  .night p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .ratings-and-reviews {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 123px;
    height: 20px;
  }

  .star-rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 41px;
    height: 20px;
  }

  .star {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ratings {
    width: 21px;
    height: 20px;
  }

  .ratings p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .reviews {
    //  padding: 0 4px;
    width: 95px;
  }

  .reviews p {
    font-weight: 500;
    align-items: center;
    text-decoration-line: underline;
    color: #000000;
    margin: 0;
    width: 95px;
    font-size: 14px;
  }

  .details {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 322px;
    height: 104px;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 8px;
  }

  .detail-dates {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 322px;
    height: 52px;
    box-shadow: inset 0px -1px 0px #d1d5db;
  }

  .detail-guest {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 16px;
    width: 322px;
    height: 52px;
    // background: #ffffff;
    cursor: pointer;
  }

  .check-in-dates {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    width: 161px;
    height: 52px;
    // background: #ffffff;
    box-shadow: inset -1px 0px 1px #d1d5db;
    cursor: pointer;
  }

  .check-out-dates {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    width: 161px;
    height: 52px;
    // background: #ffffff;
    // box-shadow: inset 1px 1px 1px #d1d5db;
    cursor: pointer;
  }

  .check-in-header {
    width: 145px;
    height: 16px;
  }

  .check-in-header p {
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .check-out-header {
    width: 145px;
    height: 16px;
  }

  .check-out-header p {
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .check-in-date {
    width: 145px;
    height: 20px;
  }

  .check-in-date p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .check-out-date {
    width: 145px;
    height: 20px;
  }

  .check-out-date p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .detail-guest-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 258px;
    height: 36px;
  }

  .detail-guest-right {
    width: 32px;
    height: 32px;
  }

  .guests-title {
    width: 258px;
    height: 16px;
  }

  .guests-title p {
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .guests-subtitle {
    width: 258px;
    height: 20px;
  }

  .guests-subtitle p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .reserve-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 322px;
    height: 44px;
  }

  .reserve-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    width: 322px;
    height: 44px;
    background: #de3151;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .reserve-text {
    width: 55px;
    height: 20px;
  }

  .reserve-text p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .alert {
    width: 322px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .alert p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6b7280;
  }

  .report {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 370px;
    height: 20px;
  }

  .flag {
    width: 16px;
    height: 16px;
  }

  .report-title {
    /* Text */

    width: 116px;
    height: 20px;
  }

  .report-title p {
    margin: 0px;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    color: #6b7280;
  }

  .price-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 322px;
    height: 152px;
  }

  .price-details-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 322px;
    height: 24px;
  }

  .price-row-title {
    width: 260px;
    height: 24px;
  }

  .price-row-title p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .divider {
    width: 322px;
    height: 0px;
    border: 1px solid #e5e7eb;
  }

  .row-price {
    width: auto;
    height: 24px;
    display: flex;
    margin-left: auto;
    align-items: right;
  }

  .row-price p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    align-items: center;
    text-align: right;
    color: #000000;
  }

  .rdrCalendarWrapper {
    position: absolute;
    z-index: 1000;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin-top: 7px;
    margin-left: -190px;
    width: ;
  }

  /* Adjust Calendar Size */
  .rdrCalendarWrapper .rdrDateDisplayWrapper {
    display: none;
  }

  .rdrCalendarWrapper {
    transform: scale(0.8);
    transform-origin: top center;
  }

  .rdrCalendarWrapper * {
    font-size: 14px;
  }

  .calendar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 999; /* Lower than the calendar */
  }

  /* Guest Modal Overlay */
  .guest-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 999;
  }

  /* Guest Modal */
  .guest-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 250px;
    margin-left: 335px;
    margin-top: 39px;
  }

  .guest-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  /* Guest Count Buttons */
  .guest-count {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .guests-btn {
    padding: 5px 10px;
    margin: 0 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  .guest-count p {
    margin: 0;
    font-size: 18px;
  }

  .guests-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%; /* Makes the button round */
    background-color: #de3151; /* Set button color */
    color: white;
    border: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .guests-btn:hover {
    background-color: #a91e3d; /* Darken on hover */
  }

  .guests-popup {
    position: absolute;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    top: 50px;
    right: 10px;
    width: 200px;
    display: none;
    cursor: pointer;
  }

  .nav-item:hover .guests-popup {
    display: block;
  }

  .guest-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;


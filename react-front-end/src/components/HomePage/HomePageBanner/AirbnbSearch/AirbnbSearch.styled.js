import styled from "styled-components";
import {ReactComponent as DropDownMenu} from "./DropDownMenu.svg"
export const AirbnbSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px 0px 32px;
  gap: 32px;
  width: auto;
  height: 64px;
  background: #ffffff;
  border-radius: 1000px;

  .drop-down-locations {
    width: 37px;
    height: 37px;
    cursor: pointer;
  }

  .divider {
    width: 32px;
    height: px;
    background: #6b7280;
    border: 1px solid #e5e7eb;
    transform: rotate(90deg);
  }

  .search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 140px;
    height: 36px;
    cursor: pointer;
  }

  .nav-item-title {
    width: 110px;
    height: 16px;
  }

  .nav-item-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .nav-item-subtitle {
    width: 170px;
    height: 20px;
  }

  .nav-item-subtitle > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .button-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 8px;
    width: 48px;
    height: 48px;
    background: #de3151;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 100px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
  }

  //
  .location-options {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    // border-radius: 14px;
    z-index: 1000;
    width: 140px;
    margin-top: 50px;
    margin-right: 15px;
  }

  .location-option {
    padding: 10px;
    cursor: pointer;
  }

  .location-option:hover {
    background-color: #f0f0f0;
  }

  .rdrCalendarWrapper {
    position: absolute;
    z-index: 1000;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin-top: 30px;
    margin-left: -300px;
    width:
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
    margin-left: 260px;
    margin-top: -140px;
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
  }

  .nav-item:hover .guests-popup {
    display: block;
  }

  .guest-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
`;

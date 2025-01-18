import styled from "styled-components";

export const BigCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 80px;
  gap: 24px;
  width: 1280px;
  height: 640px;
  background: url(https://www.dailybulletin.com/wp-content/uploads/2024/05/OCR-L-AIRBNB-ICONS-INCREDIBLES-0524-14.jpg);
  background-size: cover;
  border-radius: 8px;

  .destination {
    width: 701px;
    height: 56px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .button-containter {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 129px;
    height: 56px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    width: 129px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 100px;
    cursor: pointer;
  }

  button > p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 81px;
    height: 24px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, #671296 -1.23%, #9e1f83 100.62%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

import styled from "styled-components";

export const DescriptionStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1120px;
  height: 168px;

  .host-type {
    width: 440px;
    height: 24px;
  }

  .host-type > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .host-experience {
    width: 440px;
    height: 48px;
  }

  .host-experience > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .response-rate {
    width: 440px;
    height: 24px;
  }

  .response-rate > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .response-time {
    width: 440px;
    height: 24px;
  }

  .response-time > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .contact-host {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 150px;
    height: 56px;
  }

  button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    width: 150px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
  }

  button > p {
    margin: 0px;
    width: 102px;
    height: 24px;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .payment-protection {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 280px;
    height: 48px;
  }

  .shield {
    width: 24px;
    height: 24px;
  }

  .payment-protection-text {
    width: 240px;
    height: 48px;
  }

  .payment-protection-text > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }
`;

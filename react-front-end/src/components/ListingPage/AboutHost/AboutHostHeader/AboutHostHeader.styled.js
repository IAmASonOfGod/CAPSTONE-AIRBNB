import styled from "styled-components";

export const AboutHostHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1120px;
  height: 92px;

  .host-profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 1120px;
    height: 56px;
  }

  .host-reviews {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 1120px;
    height: 20px;
  }

  .host-profile-pic {
    width: 56px;
    height: 56px;
    background: url(https://th.bing.com/th/id/OIP.TGLe4ox5zmloGCPY1lBGcQHaHa?rs=1&pid=ImgDetMain);
    background-size: cover;
    border-radius: 50%;
    border: 1px solid black;
    border: none;
  }
  .host-title-and-subtitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 1040px;
    height: 52px;
  }

  .host-title {
    width: 1040px;
    height: 32px;
  }

  .host-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .host-subtitle {
    width: 1040px;
    height: 20px;
  }

  .host-subtitle > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .reviews-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 94px;
    height: 20px;
  }

  .identity-verified-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 124px;
    height: 20px;
  }

  .super-host-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 88px;
    height: 20px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
  }

  .reviews {
    width: 74px;
    height: 20px;
  }

  .reviews > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .identity-verificarion {
    width: 104px;
    height: 20px;
  }

  .identity-verification > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .host-type {
    width: 68px;
    height: 20px;
  }

  .host-type > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

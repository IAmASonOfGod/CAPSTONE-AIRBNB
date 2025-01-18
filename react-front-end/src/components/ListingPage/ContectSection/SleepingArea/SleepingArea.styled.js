import styled from "styled-components";

export const SleepingAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 670px;
  height: 320px;

  .Sleeping-area-title {
    width: 670px;
    height: 32px;
  }

  .Sleeping-area-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
  }

  .Bedroom-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 320px;
    height: 264px;
  }

  .Bedroom-area-img {
    width: 320px;
    height: 212px;
    background: url(https://th.bing.com/th/id/OIP.D9qI6Qulj2fKR9q4vOk_FgHaE8?rs=1&pid=ImgDetMain);
    background-size: cover;
    border-radius: 8px;
    border: black solid 1px;
    border: none;
  }

  .Bedroom-area-title-subtitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 320px;
    height: 44px;
  }

  .Bedroom-area-title {
    width: 320px;
    height: 24px;
  }

  .Bedroom-area-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .Bedroom-area-subtitle {
    width: 320px;
    height: 20px;
  }

  .Bedroom-area-subtitle > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

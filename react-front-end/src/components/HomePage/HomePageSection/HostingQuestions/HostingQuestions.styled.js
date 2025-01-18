import styled from "styled-components";

export const HostingQuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 80px;
  gap: 24px;
  width: 1280px;
  height: 640px;
  background: url(https://wallpaperaccess.com/full/2597838.jpg);
  background-size: cover;
  border-radius: 8px;

  .questions-title {
    margin: 0px;
    width: 465px;
    height: 288px;
  }

  .questions-title > p {
    margin: 0px;
    font-weight: 500;
    font-size: 96px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .questions-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    margin: 0px;
    width: 174px;
    height: 56px;
  }

  .host-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    width: 174px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .host-button > p {
    width: 126px;
    height: 24px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #374151;
  }
`;

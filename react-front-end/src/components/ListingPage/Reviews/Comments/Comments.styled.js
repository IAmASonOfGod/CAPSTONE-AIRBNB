import styled from "styled-components";

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 1120px;
  height: 536px;

  .row1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 80px;
    width: 1120px;
    height: 96px;
  }

  .row2,
  .row3 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 80px;
    width: 1120px;
    height: 180px;
  }

  .airbnb-comment-wrapper1,
  .airbnb-comment-wrapper2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 520px;
    height: 96px;
  }

  .airbnb-comment-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 520px;
    height: 180px;
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 520px;
    height: 56px;
  }

  .user-profile-pic {
    width: 56px;
    height: 56px;
    background: url(https://th.bing.com/th/id/OIP.0AM8radzQifTDWOqaH2B3wHaE8?rs=1&pid=ImgDetMain);
    background-size: cover;
    border-radius: 50%;
  }

  .user-profile-pic-2 {
    width: 56px;
    height: 56px;
    background: url(https://th.bing.com/th/id/OIP.OeFyd_-z47Ps1_MVrbiNEQHaE8?pid=ImgDet&w=184&h=122&c=7&dpr=1,3);
    background-size: cover;
    border-radius: 50%;
  }

  .user-profile-pic-3 {
    width: 56px;
    height: 56px;
    background: url(https://th.bing.com/th/id/OIP.5l7RTgSRoghApSpC6ph-rQHaE9?rs=1&pid=ImgDetMain);
    background-size: cover;
    border-radius: 50%;
  }

  .user-profile-pic-4 {
    width: 56px;
    height: 56px;
    background: url(https://th.bing.com/th/id/OIP.YlUMzDMwjp-sRHLFcAkzHQHaHa?rs=1&pid=ImgDetMain);
    background-size: cover;
    border-radius: 50%;
  }

  .user-profile-pic-5 {
    width: 56px;
    height: 56px;
    background: url(https://th.bing.com/th/id/OIP.16klVblwTMoiiD2lYGq-AAHaEc?pid=ImgDet&w=184&h=110&c=7&dpr=1,3);
    background-size: cover;
    border-radius: 50%;
  }

  .user-profile-pic-6 {
    width: 56px;
    height: 56px;
    background: url(https://www.worldatlas.com/upload/00/51/c0/shutterstock-647443870.jpg);
    background-size: cover;
    border-radius: 50%;
  }

  .user-comment {
    width: 520px;
    height: 24px;
  }

  .user-comment > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .user-name {
    width: 440px;
    height: 24px;
  }

  .user-name > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .date {
    width: 440px;
    height: 20px;
  }

  .date > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }

  .row-user-comment {
    width: 520px;
    height: 72px;
  }

  .row-user-comment > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .show-more-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 520px;
    height: 20px;
  }

  .show-more {
    width: 76px;
    height: 20px;
  }

  .show-more > p {
    margin: 0px;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    color: #000000;
  }

  .chevron-right {
    display: flex;
    justift-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
  }

  .show-all-btn {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 163px;
    height: 36px;
  }

  button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 163px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #000000;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
  }
`;

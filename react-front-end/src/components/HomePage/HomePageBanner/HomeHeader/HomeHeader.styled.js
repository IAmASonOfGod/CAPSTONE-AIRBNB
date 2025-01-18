import styled from "styled-components";

export const HomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 1280px;
  height: 48px;

  .airbnb-logo-container {
    width: 412px;
    height: 32px;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 408px;
    height: 30px;
  }

  .places-to-stay {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 106px;
    height: 30px;
    cursor: pointer;
  }

  .places-to-stay > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    /* white */
    color: #ffffff;
  }

  .places {
    width: 106px;
    height: 24px;
  }

  .places > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    /* white */
    color: #ffffff;
  }

  .experiences {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 93px;
    height: 30px;
    cursor: pointer;
  }

  .experiences > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .online-experiences {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 145px;
    height: 30px;
    cursor: pointer;
  }

  .online-experiences > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .login-section {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 412px;
    height: 48px;
  }

  .become-a-host {
    width: 102px;
    height: 20px;
    cursor: pointer;
  }

  .become-a-host > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .welcome-message {
    width: 150px;
    height: 20px;
    cursor: pointer;
  }

  .welcome-message > p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #ffffff;
    width: 150px;
  }

  .globe {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .profile-dropdown {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 88px;
    height: 48px;
    background: #ffffff;
    border-radius: 100px;
    cursor: pointer;
    position: relative;
  }

  .menu {
    width: 24px;
    height: 24px;
  }

  .avatar {
    width: 32px;
    height: 32px;
  }

  .dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    background: white;
    // border: 1px solid #ddd;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    // padding: 10px;
    z-index: 100;
    width: 110px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #f0f0f0;
    margin-left: 60px;
  }

  .host-dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    background: white;
    // border: 1px solid #ddd;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    // padding: 10px;
    z-index: 100;
    width: 110px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #f0f0f0;
    margin-right: 260px;
  }

  .host-dropdown p {
    margin: 0;
    padding: 5px 10px;
    cursor: pointer;
  }

  .logout-dropdown {
    position: absolute;
    top: 50px;
    right: 0;
    background: white;
    // border: 1px solid #ddd;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    // padding: 10px;
    z-index: 100;
    width: 110px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #f0f0f0;
  
  }

  .logout-dropdown > p {
    margin: 0;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

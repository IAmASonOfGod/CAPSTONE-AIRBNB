import styled from "styled-components";

export const UserListheaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // padding: 24px 160px;
  gap: 24px;
  width: 1440px;
  height: 68px;
  background: #ffffff;

  .logo {
    width: 684px;
    height: 32px;
  }

  .right-dropdown-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 250px;
    cursor: pointer;
  }

  .right-dropdown-menu p {
    color: black;
    font-weight: 400;
    font-size: 16px;
    width: 120px;
  }

  .dropdown-menu {
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
    margin-top: 30px;
    margin-right: 50px;
    cursor: pointer;
  }

  .logout-p p {
    margin: 0;
    padding: 5px 10px;
    cursor: pointer;
    color: black;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #ff385c;
      cursor: pointer;
    }

    .login-button {
      background-color: #ff385c;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  ////////
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

  .profile-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 36px;
  }
`;

import styled from "styled-components";

export const HostListheaderContainer = styled.div`
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
    cursor: pointer;
  }

  .right-dropdown-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 684px;
    height: 48px;
    cursor: pointer;
  }

  .right-dropdown-menu > p {
    margin: 0px;
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
    margin-right: 30px;
    cursor: pointer;
  }

  .dropdown-menu p {
    margin: 0;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

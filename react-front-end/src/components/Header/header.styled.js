import styled from "styled-components";

export const HeaderContainer = styled.div`
  // background-color: white;
  // padding: 48px 160px 48px 160px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // height: 45px;

  box-shadow: ${({ isHomepage }) =>
    isHomepage ? "0px -1px 0px 0px #f3f4f6 inset" : "none"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 160px;
  gap: 24px;
  width: 1512px;
  height: 96px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #f3f4f6;
`;

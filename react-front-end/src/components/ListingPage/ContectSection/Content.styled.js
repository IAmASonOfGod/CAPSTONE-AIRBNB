import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;
  width: 1120px;
  height: 1876px;

  //Content-left

  .Content-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 670px;
    height: 1876px;
    
  }

  //Content-right

  // .Content-right {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   padding: 0px;
  //   gap: 24px;
  //   width: 370px;
  //   height: 564px;
  //   border: black solid 1px;
  // }

  hr {
    width: 670px;
    height: 0px;
    border: 1px solid #e5e7eb;
  }
`;

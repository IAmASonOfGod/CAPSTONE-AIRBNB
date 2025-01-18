import styled from "styled-components";

export const SearchContainer = styled.div`
  // width: 334px;
  // height: 48px;
  // padding: 8px 8px 8px 24px;
  // gap: 16px;
  // border-radius: 50px 50px 50px 50px;
  // border: 1px solid #e5e7eb;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // box-shadow: 0px 1px 2px 0px #1f293714;
  cursor: pointer;

  box-sizing: border-box;

  display: flex;
  // flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 8px 24px;
  gap: 16px;
  width: 334px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  border-radius: 1000px;
`;

export const SearchIcon = styled.div`
  background-color: #de3151;
  font-size: 20px;
  color: white;
  width: 38px;
  height: 38px;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  &::placeholder {
    color: black;
    color: black;
    font-family: Inter;
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
`;

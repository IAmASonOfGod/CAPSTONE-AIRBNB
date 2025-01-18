import styled from "styled-components";

export const DiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 1280px;
  height: 720px;

  .discover-header {
    width: 1280px;
    height: 44px;
  }

  .discover-header > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .discover-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1280px;
    height: 628px;
  }

  .discover-card-1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px;
    gap: 24px;
    width: 628px;
    height: 628px;
    background: url(https://www.wanderlustchloe.com/wp-content/uploads/2019/05/Astra-Suites.jpg);
    background-size: cover;
    border-radius: 8px;
  }

  .discover-card-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px;
    gap: 24px;
    width: 628px;
    height: 628px;
    background: url(https://image.lexica.art/full_webp/d70a8e1c-fe8d-401d-8d7e-23d79586f212);
    background-size: cover;
    border-radius: 8px;
  }

  .suggestions {
    width: 468px;
    height: 112px;
  }

  .suggestions > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .button-1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 142px;
    height: 56px;
  }

  .trip-experiences-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    width: 142px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .trip-experiences-button > p {
    width: 94px;
    height: 24px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #374151;
  }

  .button-2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 195px;
    height: 56px;
  }

  .online-experiences {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 8px;
    width: 195px;
    height: 56px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .online-experiences > p {
    width: 147px;
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

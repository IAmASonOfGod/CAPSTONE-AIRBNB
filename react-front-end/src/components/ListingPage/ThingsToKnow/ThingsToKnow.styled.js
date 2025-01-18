import styled from "styled-components";

export const ThingsToKnowWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 1120px;
  height: 360px;

  .header {
    width: 1120px;
    height: 32px;
  }

  .header > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
  }

  .things-to-know-columns {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1120px;
    height: 304px;
  }

  .things-to-know-column1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 357.33px;
    height: 256px;
  }

  .things-to-know-column2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 357.33px;
    height: 304px;
  }

  .things-to-know-column3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 357.33px;
    height: 100px;
  }

  .free-cancellation {
    width: 357.33px;
    height: 20px;
  }

  .free-cancellation > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4b5563;
  }

  .house-rules-header,
  .health-policy-header,
  .cancellation-policy-header {
    width: 357.33px;
    height: 24px;
  }

  .house-rules-header > p,
  .health-policy-header > p,
  .cancellation-policy-header > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 357.33px;
    height: 216px;
  }

  .icon-rule {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 357.33px;
    height: 24px;
  }

  .icon-rule2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 357.33px;
    height: 48px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .rule {
    width: 317.33px;
    height: 24px;
  }

  .rule2 {
    width: 317.33px;
    height: 48px;
  }

  .rule2 {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .rule > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .show-more {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 357.33px;
    height: 24px;
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
`;

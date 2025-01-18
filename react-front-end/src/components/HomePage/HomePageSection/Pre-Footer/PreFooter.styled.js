import styled from "styled-components";

export const PreFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 1280px;
  height: 304px;

  .pre-footer-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 1280px;
    height: 88px;
  }

  .pre-footer-header-title {
    width: 1280px;
    height: 32px;
  }

  .pre-footer-header-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .pre-footer-tab-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 1280px;
    height: 40px;
    background: #ffffff;
    box-shadow: inset 0px -1px 0px #f3f4f6;
  }

  .tab-and-line {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 192px;
    height: 40px;
    position: relative;

    &:hover .bar {
      display: block;
    }
  }

  .tab-content {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 192px;
    height: 20px;
    cursor: pointer;
  }

  .bar {
    width: 192px;
    height: 2px;
    background: #de3151;
    display: none;
    cursor: pointer;
  }

  .tab-and-line-2 {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 175px;
    height: 40px;
    position: relative;

    &:hover .bar-2 {
      display: block;
    }
  }

  .tab-content-2 {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 175px;
    height: 20px;
    cursor: pointer;
  }

  .bar-2 {
    width: 170px;
    height: 2px;
    background: #de3151;
    display: none;
    cursor: pointer;
  }

  .tab-and-line-3 {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 110px;
    height: 40px;
    position: relative;

    &:hover .bar-3 {
      display: block;
    }
  }

  .tab-content-3 {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 110px;
    height: 20px;
    cursor: pointer;
  }

  .bar-3 {
    width: 109px;
    height: 2px;
    background: #de3151;
    display: none;
    cursor: pointer;
  }

  .tab-and-line-4 {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 120px;
    height: 40px;
    position: relative;

    &:hover .bar-4 {
      display: block;
    }
  }

  .tab-content-4 {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 120px;
    height: 20px;
    cursor: pointer;
  }

  .bar-4 {
    width: 121px;
    height: 2px;
    background: #de3151;
    display: none;
    cursor: pointer;
  }

  .tab-and-line-5 {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 134px;
    height: 40px;
    position: relative;

    &:hover .bar-5 {
      display: block;
    }
  }

  .tab-content-5 {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 134px;
    height: 20px;
    cursor: pointer;
  }

  .bar-5 {
    width: 132px;
    height: 2px;
    background: #de3151;
    display: none;
    cursor: pointer;
  }

  .tab-and-line-6 {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 85px;
    height: 40px;
    position: relative;

    &:hover .bar-6 {
      display: block;
    }
  }

  .tab-content-6 {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 85px;
    height: 20px;
    cursor: pointer;
  }

  .bar-6 {
    width: 82px;
    height: 2px;
    background: #de3151;
    display: none;
    cursor: pointer;
  }

  .tab-styles {
    margin: 0px;
    width: 200px;
    height: 20px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    display: flex;
    align-items: center;
    color: #000000;
  }

  .inspiration-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1280px;
    height: 40px;
  }

  .inspiration-title-subtitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 302px;
    height: 40px;
  }

  .inspiration-title {
    width: 302px;
    height: 20px;
  }

  .inspiration-title > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .inspiration-subtitle {
    width: 302px;
    height: 20px;
  }

  .inspiration-subtitle > p {
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #6b7280;
  }
  .show-more {
    text-decoration: underline;
  }
`;

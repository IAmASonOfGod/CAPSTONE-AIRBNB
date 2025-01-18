import styled from "styled-components";

export const ContentTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 670px;
  height: 84px;
  border-bottom: 1px solid #e5e7eb;

  .Content-Top-Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 670px;
    height: 60px;
  }

  .Header-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 590px;
    height: 60px;
  }

  h2 {
    margin: 0px;
  }

  .Header-Avatar {
    width: 56px;
    height: 56px;
    background: url(https://th.bing.com/th/id/OIP.TZOvL8oiJYfDsxBixAnZuwHaE8?rs=1&pid=ImgDetMain);
    background-size: cover;
    border: black solid 1px;
    border-radius: 50%;
    border: none;
  }

  .Facilities {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 590px;
    height: 20px;
  }

  .Airbnb-Data-Detail {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 670px;
    height: 44px;
  }

  .Icon {
    width: 32px;
    height: 32px;
  }
`;

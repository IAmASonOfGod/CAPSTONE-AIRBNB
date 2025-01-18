import styled from "styled-components";

export const ImageGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 1120px;
  height: 400px;
  border-radius: 16px;

  //left-image-wrapper

  .left-image-wrapper {
    width: 556px;
    height: 400px;
    border-radius: 15px 0px 0px 15px;
    overflow: hidden; /* Ensures the image respects the border-radius */
    display: flex; /* Centers the image if necessary */
    justify-content: center;
    align-items: center;
  }

  .left-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the entire wrapper without distortion */
    border-radius: 15px 0px 0px 15px; /* Apply the same border radius to the image */
  }

  //right-image-wrapper

  .right-image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 556px;
    height: 400px;
  }

  //Rows in right-image-wrapper

  .top-row-images,
  .bottom-row-images {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 556px;
    height: 196px;
  }

  //Images in rows

  .row-image-1 {
    width: 274px;
    height: 196px;

    background: url(https://th.bing.com/th/id/OIP.y9UEyiSM5pRd6S_Uq3f0CgHaJ3?w=950&h=1266&rs=1&pid=ImgDetMain);
    background-size: cover;
  }

  .row-image-2 {
    width: 274px;
    height: 196px;
    background: url(https://th.bing.com/th/id/OIP.8fbAFsKjrmOLjvO9RMVbrAHaFM?rs=1&pid=ImgDetMain);
    background-size: cover;
    border-radius: 0px 15px 0px 0px;
  }

  .row-image-3 {
    width: 274px;
    height: 196px;
    background: url(https://th.bing.com/th/id/R.f7a56110bb6e07ad271f8c2b15898384?rik=zS3YXYFnUTzc4w&pid=ImgRaw&r=0);
    background-size: cover;
  }

  .row-image-4 {
    width: 274px;
    height: 196px;
    background: url(https://th.bing.com/th/id/R.9f59a9c8e6ad869aa5a94fa929bad09f?rik=FYVrj0JTDCwhMg&pid=ImgRaw&r=0);
    background-size: cover;
    border-radius: 0px 0px 15px 0px;
  }
`;

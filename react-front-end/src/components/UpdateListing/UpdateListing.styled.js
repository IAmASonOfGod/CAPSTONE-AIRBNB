import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  margin: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #4153f5;

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

  .view-listings {
    align-self: flex-start;
    margin: 0px 20px 10px 20px;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 139px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 100px;
  }

  .view-listings > p {
    width: 80px;
    height: 20px;
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #374151;
  }

  h2 {
    marging: 20px;
    width: 200px;
    height: 40px;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    gap: 6px;

    .label {
      margin-top: 10px;
      font-weight: bold;
      margin: 0px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }

    .input,
    .textarea,
    .select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      border: 1px solid #3d3d3d;
    }

    .textarea {
      resize: none;
    }

    .form-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      > div {
        flex: 1;
      }

      .add-button {
        margin-top: 25px;
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        width: 295px;
      }
    }

    .button {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      width: 295px;
    }

    .create-button {
      background-color: #007bff;
      color: white;
    }

    .cancel-button {
      background-color: #dc3545;
      color: white;
    }
  }

  hr {
    border: 1px solid #e5e7eb;
    width: 1512px;
  }

  .images {
    width: 295px;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border: 1px solid #3d3d3d;
  }

  .right-dropdown-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 200px;
    cursor: pointer;
  }

  .right-dropdown-menu p {
    color: black;
    font-weight: 400;
    font-size: 16px;
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
    //
    
  .amenities {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .type-select {
    height: 34px;
    width: 115px;
    padding: 0px;
    margin: 0px;
    margin-top: 5px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border: 1px solid #3d3d3d;
  }

  .add-type-button {
    margin-top: 5px;
    height: 34px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    width: 295px;
  }

  .input-all-white {
    background-color: white;
    color: transparent;
    border: none;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    border: 1px solid black;
    margin-top: 5px;
    height: 100px;
    border-radius: 4px;
  }

  .input-all-white::-webkit-file-upload-button {
    visibility: hidden;
  }

  .input-all-white::-moz-file-upload-button {
    visibility: hidden;
  }

  .input-all-white::file-selector-button {
    visibility: hidden;
  }

  .add-type-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, filter 0.3s;
  }

  .add-type-button.selected {
    background-color: #0056b3;
    filter: brightness(0.8);
  }

  .image-previews {
    display: flex;
    gap: 10px;
    margin-top: -100px;
    margin-left: 250px;
    position: relative;
    z-index: 1;
  }

  .image-preview {
    width: 100px;
    height: 89px;
    object-fit: cover;
    border-radius: 8px;
  }

  .images {
    width: 295px;
    padding: 8px;
    margin-top: 5px; /* Keep the margin top */
    border: 1px solid #ccc;
    border-radius: 4px;
    position: relative;
    z-index: 0;
  }

  .input-all-white {
    background-color: transparent; 
    color: transparent;
    border: 1px solid #ccc;
    margin-top: 5px;
    height: 100px;
    border-radius
`;

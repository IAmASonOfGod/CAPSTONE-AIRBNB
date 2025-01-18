import styled from "styled-components";

export const HostReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  isolation: isolate;
  position: relative;
  width: 1512px;
  background: #ffffff;

  .filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
    gap: 16px;
    width: 100%;
    height: 36px;
  }

  .view-reservation {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    gap: 8px;
    // width: 170px;
    height: 36px;

    > button {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 18px 12px;
      gap: 8px;
      // width: 170px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 2px rgba(31, 41, 55, 0.08);
      border-radius: 100px;
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    gap: 24px;
    width: 100%;
    height: 100px;
    background: #ffffff;

    .logo {
      width: 684px;
      height: 32px;
    }

    .right-dropdown-menu {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0;
      gap: 16px;
      width: 684px;
      height: 48px;

      > p {
        margin: 0;
      }
    }
  }

  .my-reservations {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 15px;
    padding: 50px;
    border-top: 1px solid #f3f4f6;

    .reservation-title {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
    }

    .table-container {
      overflow-x: auto;

      .reservation-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;

        thead {
          background-color: #e5e5e5;
        }

        th,
        td {
          border: 1px solid #c8c8c8;
          padding: 8px 12px;
          text-align: left;
        }

        th {
          font-size: 16px;
          font-weight: bold;
        }

        tbody tr:hover {
          background-color: #f5f5f5;
        }

        .delete-button {
          /* Auto layout */
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 12px 16px;
          gap: 8px;

          width: 100%;
          height: 44px;

          background: #de3151;
          box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
          border-radius: 8px;
          border: none;
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          &:hover {
            background-color: #c02945;
          }
        }
      }
    }
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

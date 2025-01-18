import React, { useState, useEffect } from "react";
import { HostReservationWrapper } from "./HostReservations.styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as DropDown } from "./DropDown.svg";
import ListingFooter2 from "../ListingPage/AirbnbFooter/ListingFooter/ListingFooter2";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../Context/LoginContext.tsx";
import { useReservationContext } from "../../Context/ReservationContext.jsx";

const HostReservertions = () => {
  const navigate = useNavigate();
  const { allReservations, deleteReservation } = useReservationContext();
  const { loggedInUser, logoutUser } = useLoginContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logoutUser();
    setIsDropdownOpen(false);
    navigate("/");
  };

  const handleDelete = (reservationId) => {
    deleteReservation(reservationId);
  };

  return (
    <HostReservationWrapper>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          <Logo />
        </div>
        <div className="right-dropdown-menu">
          <p>{loggedInUser ? loggedInUser.username : "Host name"}</p>
          <div onClick={toggleDropdown}>
            <DropDown />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>
      <div className="filters">
        <div
          className="view-reservation"
          onClick={() => navigate("/HostListing")}
        >
          <button>View Listings</button>
        </div>
        <div
          className="view-reservation"
          onClick={() => navigate("/CreateListing")}
        >
          <button>Create Listings</button>
        </div>
      </div>
      <div className="my-reservations">
        <div className="reservation-title">
          <p>My Reservations</p>
        </div>
        <div className="table-container">
          <table className="reservation-table">
            <thead className="table-header">
              <tr>
                <th>Booked By</th>
                <th>Property Name</th>
                <th>Check-In Date</th>
                <th>Check-Out Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allReservations.map((reservation) => (
                <tr key={reservation._id}>
                  <td>{reservation.userId.username}</td>
                  {""}
                  <td>{reservation.listingId.title}</td>
                  {""}
                  <td>
                    {new Date(reservation.checkInDate).toLocaleDateString()}
                  </td>
                  {""}
                  <td>
                    {new Date(reservation.checkOutDate).toLocaleDateString()}
                  </td>
                  {""}
                  <td>
                    <button
                      className="delete-button"
                      onClick={() =>
                        handleDelete(reservation._id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ListingFooter2 />
    </HostReservationWrapper>
  );
};

export default HostReservertions;

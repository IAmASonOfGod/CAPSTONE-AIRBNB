import React, { useState } from "react";
import { PageWrapperHeaderContainer } from "./PageWrapperHeader.styled.js";
import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as DropDown } from "./DropDown.svg";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../Context/LoginContext.tsx";
import { useDropDownContext } from "../../Context/DropDownContext";
import { useProfileSection } from "../../Context/ProfileSectionContext";
import { useReservationContext } from "../../Context/ReservationContext.jsx";

const PageWrapperHeader = () => {
  const { fetchUserReservations } = useReservationContext();
  const { loggedInUser, logoutUser } = useLoginContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { handleRoleSelection } = useProfileSection();
  const {
    isProfileDropdownOpen,
    toggleProfileDropdown,
    isHostDropdownOpen,
    toggleHostDropdown,
  } = useDropDownContext();

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logoutUser();
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <PageWrapperHeaderContainer>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          <Logo />
        </div>
        {loggedInUser ? (
          <div className="profile-section">
            <div className="welcome-message">
              <p>Welcome, {loggedInUser.username}</p>
            </div>
            <div className="profile-dropdown" onClick={toggleProfileDropdown}>
              <DropDown />
              {isProfileDropdownOpen && (
                <div className="logout-dropdown" onClick={handleLogout}>
                  <p>Logout</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="profile-section">
            <div className="welcome-message">
              <p>Welcome, User</p>
            </div>
            <div className="profile-dropdown" onClick={toggleProfileDropdown}>
              <DropDown />
              {isProfileDropdownOpen && (
                <div
                  className="dropdown"
                  onClick={() => handleRoleSelection("user")}
                >
                  <p>User Login</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* <div className="filters">
        <div
          className="view-reservation"
          onClick={() => {
            fetchUserReservations(loggedInUser._id);
            navigate("/UserReservations");
          }}
        >
          <button>View Reservations</button>
        </div>
      </div> */}
    </PageWrapperHeaderContainer>
  );
};

export default PageWrapperHeader;

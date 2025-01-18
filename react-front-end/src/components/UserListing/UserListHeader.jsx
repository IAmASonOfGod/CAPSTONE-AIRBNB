import React, { useState } from "react";
import { UserListheaderContainer } from "./UserListHeader.styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as DropDown } from "./DropDown.svg";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../Context/LoginContext.tsx";
import { useDropDownContext } from "../../Context/DropDownContext";
import { useProfileSection } from "../../Context/ProfileSectionContext";

const UserListHeader = () => {
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
    <UserListheaderContainer>
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
    </UserListheaderContainer>
  );
};

export default UserListHeader;

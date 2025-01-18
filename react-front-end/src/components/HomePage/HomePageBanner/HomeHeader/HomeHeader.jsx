import React from "react";
import { HomeHeaderContainer } from "./HomeHeader.styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as Line } from "./Line.svg";
import { ReactComponent as Globe } from "./Globe.svg";
import { ReactComponent as Menu } from "./Menu.svg";
import { ReactComponent as Avatar } from "./Avatar.svg";
import { useDropDownContext } from "../../../../Context/DropDownContext";
import { useProfileSection } from "../../../../Context/ProfileSectionContext";
import { useLoginContext } from "../../../../Context/LoginContext.tsx";

const HomeHeader = () => {
  const {
    isProfileDropdownOpen,
    toggleProfileDropdown,
    isHostDropdownOpen,
    toggleHostDropdown,
  } = useDropDownContext();

  const { handleRoleSelection } = useProfileSection();

  const { loggedInUser, logoutUser } = useLoginContext();

  return (
    <HomeHeaderContainer>
      <div className="airbnb-logo-container">
        <Logo />
      </div>
      <div className="nav-links">
        <div className="places-to-stay">
          <p>Places to stay</p>
          <Line />
        </div>
        <div className="experiences">
          <p>Experiences</p>
        </div>
        <div className="online-experiences">
          <p>Online Experiences</p>
        </div>
      </div>
      <div className="login-section">
        {loggedInUser ? (
          <>
            <div className="welcome-message">
              <p>Welcome, {loggedInUser.username}</p>
            </div>
            <div className="globe">
              <Globe />
            </div>
            <div className="profile-dropdown" onClick={toggleProfileDropdown}>
              <Menu />
              <Avatar />
              {isProfileDropdownOpen && (
                <div className="logout-dropdown" onClick={logoutUser}>
                  <p>Logout</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="become-a-host" onClick={toggleHostDropdown}>
              <p>Become a host</p>

              {isHostDropdownOpen && (
                <div
                  className="host-dropdown"
                  onClick={() => handleRoleSelection("host")}
                >
                  <p>Host Login</p>
                </div>
              )}
            </div>
            <div className="globe">
              <Globe />
            </div>
            <div className="profile-dropdown" onClick={toggleProfileDropdown}>
              <Menu />
              <Avatar />
              {isProfileDropdownOpen && (
                <div
                  className="dropdown"
                  onClick={() => handleRoleSelection("user")}
                >
                  <p>User Login</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;

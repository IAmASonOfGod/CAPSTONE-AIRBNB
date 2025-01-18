import React, { useState } from "react";
import { HostListheaderContainer } from "./HostListHeader.styled";
import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as DropDown } from "./DropDown.svg";
import { useLoginContext } from "../../../Context/LoginContext.tsx";
import { useNavigate } from "react-router-dom";

const HostListHeader = () => {
  const { loggedInUser, logoutUser } = useLoginContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <HostListheaderContainer>
      <div className="logo" onClick={() => navigate("/")}>
        <Logo />
      </div>
      <div className="right-dropdown-menu">
        <p>{loggedInUser ? loggedInUser.username : "Host name"}</p>{" "}
        <div onClick={toggleDropdown}>
          <DropDown />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div onClick={handleLogout}>Logout</div>
          </div>
        )}
      </div>
    </HostListheaderContainer>
  );
};

export default HostListHeader;

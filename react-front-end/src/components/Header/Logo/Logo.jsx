import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AirbnbLogo } from "./AirBnB-Logo.svg";
import { LogoContainer } from "./Logo.styled";
import { useProfileSection } from "../../../Context/ProfileSectionContext";

const AppHeaderLogo = () => {
  const { resetVisibility } = useProfileSection();

  return (
    <header>
      <LogoContainer onClick={resetVisibility}>
        <AirbnbLogo />
      </LogoContainer>
    </header>
  );
};

export default AppHeaderLogo;

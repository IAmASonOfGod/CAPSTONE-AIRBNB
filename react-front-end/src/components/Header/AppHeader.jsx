import React from "react";
import { useLocation } from "react-router-dom"; 
import { HeaderContainer } from "./header.styled";
import Logo from "./Logo/Logo";
import AirbnbSearch from "./AirbnbSearch/AirbnbSearch";
import ProfileSection from "./ProfileSection/ProfileSection";

const AppHeader = () => {
  const location = useLocation(); 
  const isHomepage = location.pathname === "/";

  return (
    <HeaderContainer isHomepage={isHomepage}>
      <Logo />
      <AirbnbSearch />
      <ProfileSection />
    </HeaderContainer>
  );
};

export default AppHeader;

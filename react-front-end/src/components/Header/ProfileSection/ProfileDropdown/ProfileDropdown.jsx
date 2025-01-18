import React from "react";
import { StyledProfileDropdown } from "./ProfileDropdown.styled";
import { ReactComponent as Menu } from "./Menu.svg";
import { ReactComponent as Avatar } from "./Avatar.svg";
import { useProfileSection } from "../../../../Context/ProfileSectionContext";

const ProfileDropdown = () => {
  const { handleUserLogin } = useProfileSection();

  return (
    <StyledProfileDropdown onClick={handleUserLogin}>
      <Menu />
      <Avatar />
    </StyledProfileDropdown>
  );
};

export default ProfileDropdown;

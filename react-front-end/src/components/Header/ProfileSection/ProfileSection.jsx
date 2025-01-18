import React, { useEffect } from "react";
import { ProfileSectionContainer } from "./ProfileSection.styled";
import { ReactComponent as Globe } from "./Globe.svg";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { useProfileSection } from "../../../Context/ProfileSectionContext";

const ProfileSection = () => {
  const { handleBecomeAHost, isProfileSectionVisible } =
    useProfileSection();


  return (
    isProfileSectionVisible && (
      <ProfileSectionContainer>
        <button onClick={handleBecomeAHost}>
          <h1>Become a host</h1>
        </button>
        <Globe />
        <ProfileDropdown />
      </ProfileSectionContainer>
    )
  );
};

export default ProfileSection;

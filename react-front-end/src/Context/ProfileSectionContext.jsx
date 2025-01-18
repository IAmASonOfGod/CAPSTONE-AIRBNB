import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSectionContext = createContext();

const ProfileSectionProvider = ({ children }) => {
  const [role, setRole] = useState("guest");
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    navigate("/Login");
  };

  console.log("role has been selected");

  return (
    <ProfileSectionContext.Provider value={{ role, handleRoleSelection }}>
      {children}
    </ProfileSectionContext.Provider>
  );

};

export const useProfileSection = () => useContext(ProfileSectionContext);

export default ProfileSectionProvider;

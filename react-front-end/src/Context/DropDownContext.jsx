import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 


const DropDownContext = createContext();

export const useDropDownContext = () => {
  return useContext(DropDownContext);
};

export const DropDownProvider = ({ children }) => {

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isHostDropdownOpen, setIsHostDropdownOpen] = useState(false);

    const navigate = useNavigate(); 
    
    const handleLogoClick = () => {
      navigate("/"); 
    };


  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  };

  const toggleHostDropdown = () => {
    setIsHostDropdownOpen((prevState) => !prevState);
  };

  return (
    <DropDownContext.Provider
      value={{
        isProfileDropdownOpen,
        toggleProfileDropdown,
        isHostDropdownOpen,
        toggleHostDropdown,
        handleLogoClick,
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

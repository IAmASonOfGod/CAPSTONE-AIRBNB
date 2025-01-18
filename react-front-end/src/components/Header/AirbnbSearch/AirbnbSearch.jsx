import React from "react";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./AirbnbSearch.styled";
import { ReactComponent as SearchLogo } from "./SearchLogo.svg";
import { useProfileSection } from "../../../Context/ProfileSectionContext";

const AirbnbSearch = () => {
  const { isSearchBarVisible } = useProfileSection();

  return (
    isSearchBarVisible && (
      <SearchContainer>
        <SearchInput type="text" placeholder="Start your search" />
        <SearchIcon>
          <SearchLogo />
        </SearchIcon>
      </SearchContainer>
    )
  );
};

export default AirbnbSearch;

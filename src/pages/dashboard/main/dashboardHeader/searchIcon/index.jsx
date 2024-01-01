import React from "react";
import { SearchDiv, SearchInput } from "./style";
import SearchIcon from "assets/svg/search-icon.svg";
import { Div } from "GlobalStyles/spotrrStyles/style";

export default function Search({
  type,
  width,
  setSearchClicked,
  searchInFocus,
  setShowSearchContent,
  placeholder,
}) {
  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <SearchDiv width={width}>
      {type === "overlay_search" ? (
        <SearchInput
          placeholder={placeholder}
          onChange={(e) => setShowSearchContent(e.target.value)}
          autoFocus
        />
      ) : (
        <SearchInput placeholder={placeholder} onFocus={searchInFocus} />
      )}
      <Div onClick={() => type === "overlay_search" && handleSearch()}>
        <img src={SearchIcon} alt="search" />
      </Div>
    </SearchDiv>
  );
}

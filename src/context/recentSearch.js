import React, { useState, createContext, useContext } from "react";

export const RecentSearchContext = createContext();

export default function RecentSearchText({ children }) {
  const [showRecentSearch, setShowRecentSearch] = useState(false);
  const [searchContent, setShowSearchContent] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const values = {
    showRecentSearch,
    setShowRecentSearch,
    setShowSearchContent,
    setSearchClicked,
    searchClicked,
    searchContent,
  };

  return (
    <RecentSearchContext.Provider value={values}>
      {children}
    </RecentSearchContext.Provider>
  );
}

export const useRecentSearchContext = () => useContext(RecentSearchContext);

import React from "react";
import Filters from "./Filters";
import { CategoriesHeadDiv, CategoryheaderDiv, CSearch } from "./style.js";
import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";

const Search = ({
  searchheader,
  filter,
  setFilter,
  showSearchFilter,
  searchtitle,
}) => {
  return (
    <CategoriesHeadDiv>
      {showSearchFilter && (
        <CategoryheaderDiv>
          <SpottrP fs={"16px"} fw="600" color="#274B89">
            Transaction
          </SpottrP>
          <Div>
            <CSearch
              onChange={(e) => setFilter(e.target.value)}
              placeholder={searchtitle}
              value={filter || ""}
            />
          </Div>
        </CategoryheaderDiv>
      )}
    </CategoriesHeadDiv>
  );
};

export default Search;

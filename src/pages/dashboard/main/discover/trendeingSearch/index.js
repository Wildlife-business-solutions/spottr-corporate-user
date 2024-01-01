import React from "react";
import { TopicTitle, TopSellersDiv } from "../../searchrequests/style";
import { Div } from "GlobalStyles/spotrrStyles/style";
import {
  topSellersData,
  bestRatingData,
  searchdata,
} from "../../common/common";
import BestRating from "../../searchrequests/toprating";
import TopSellers from "../../searchrequests/topseller";
import Ads from "../ads/index";
import TrendingProducts from "../products/index";
import { SearchTags } from "../../home/style";
import Tag from "../../searchrequests/tag";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserProfile } from "store/corporateUserDetails/corporateUserDetailsReducer";
import { addCurrentData } from "store/dashboardData/dashboardDataReducer";

const TrendingSearch = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRedirectProduct = (data) => {
    dispatch(addCurrentData(data));
    history.push({
      key: "ac3df4", // not with HashHistory!
      pathname: `/dashboard/productpage/${data.categoryId}`,
      search: "?product",
    });
  };

  const handleRedirectProfile = (data) => {
    history.push({
      pathname: `/dashboard/profile`,
      search: "?profile",
    });
    dispatch(setUserProfile(data));
  };

  return (
    <div>
      <>
        <SearchTags>
          {searchdata.map((tag, i) => (
            <Tag key={i} icon={tag.icon} tag={tag.title} />
          ))}
        </SearchTags>
        <TopSellersDiv>
          <TopicTitle>Top Sellers</TopicTitle>
          <Div display="flex">
            {topSellersData.map((seller, id) => (
              <Div
                width="50%"
                cursor="pointer"
                onClick={() => handleRedirectProfile(seller)}>
                <TopSellers
                  key={id}
                  image={seller.image}
                  bg={seller.bg}
                  name={seller.name}
                  location={seller.location}
                  total={seller.total}
                />
              </Div>
            ))}
          </Div>
        </TopSellersDiv>
        <TopSellersDiv>
          <TopicTitle>Best Rating</TopicTitle>
          <Div display="flex">
            {bestRatingData.map((seller, i) => (
              <Div
                width="33%"
                cursor="pointer"
                onClick={() => handleRedirectProfile(seller)}>
                <BestRating
                  key={i}
                  image={seller.image}
                  bg={seller.bg}
                  name={seller.name}
                  location={seller.location}
                  total={seller.total}
                  rating={seller.rating}
                />
              </Div>
            ))}
          </Div>
        </TopSellersDiv>
        <TopicTitle>Trending</TopicTitle>
        <TrendingProducts handleRedirectProduct={handleRedirectProduct} />
        <Ads />
      </>
    </div>
  );
};

export default TrendingSearch;

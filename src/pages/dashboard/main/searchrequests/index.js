import SearchReqHeader from "../search/Search";
import React from "react";
import {
  SearchreqBody,
  SearchTags,
  TopicTitle,
  TopSellersDiv,
  TopSellersContainerLg,
  BestRatings,
} from "./style.js";
import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import Tag from "./tag";
import TopSellers from "./topseller";
import BestRating from "./toprating";
import TrendingProducts from "../discover/products";
// import Memberproduct from '../discover/products/memberproduct';
import Ads from "../discover/ads";
import { useAdminModalContext } from "context/AdminModalContext";
import Searchdetail from "./searchdetail";
import Memberproduct from "./memberproduct";
import { useRecentSearchContext } from "context/recentSearch";
import RecentSearch from "./recent";
import { bestRatingData, searchdata, topSellersData } from "../common/common";
import { useHistory } from "react-router-dom";
import { setUserProfile } from "store/corporateUserDetails/corporateUserDetailsReducer";
import backArrow from "assets/svg/backArrow.svg";
import { useDispatch } from "react-redux";
import useOnclickOutside from "react-cool-onclickoutside";

const Searchrequest = () => {
  const { showmodal, setShowModal } = useAdminModalContext();
  const { showRecentSearch, searchClicked, setSearchClicked } =
    useRecentSearchContext();

  React.useEffect(() => {
    if (showRecentSearch) {
      setSearchClicked(false);
    }
  }, [showRecentSearch]);

  const history = useHistory();
  const dispatch = useDispatch();

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    handleCloseModal();
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleRedirectProductPage = () => {
    // dispatch(addCurrentData(data));
    history.push({
      key: "ac3df4", // not with HashHistory!
      pathname: `/dashboard/productpage/${1}`,
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
    <>
      {showmodal && <Searchdetail show={showmodal} close={handleCloseModal} />}
      <Div
        ref={ref}
        cursor="pointer"
        margin="10px 0px 0px 0px"
        onClick={() => history.goBack()}
        width="100px"
        display={"flex"}>
        <img src={backArrow} alt="icon" />
        <p style={{ fontSize: "15px", color: "#274889", marginLeft: "15px" }}>
          Go back
        </p>
      </Div>
      <SearchreqBody>
        <SearchReqHeader />
        <Div
          display="flex"
          justify="space-between"
          padding="20px 0"
          gap="25px"
          width="75%">
          <Div
            width="40%"
            backgroundColor="#fff"
            br="11px"
            height="950px"
            padding="25px">
            <SearchTags>
              {searchdata.map((tag, i) => (
                <Tag key={i} icon={tag.icon} tag={tag.title} />
              ))}
            </SearchTags>

            {showRecentSearch ? (
              <RecentSearch />
            ) : (
              <>
                <TopSellersDiv>
                  <TopicTitle>Top Sellers</TopicTitle>
                  <TopSellersContainerLg>
                    {topSellersData.map((seller, id) => (
                      <Div
                        cursor="pointer"
                        onClick={() => handleRedirectProfile(seller)}
                        width="50%">
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
                  </TopSellersContainerLg>
                </TopSellersDiv>
                <TopSellersDiv>
                  <TopicTitle>Best Rating</TopicTitle>
                  <BestRatings>
                    {bestRatingData.map((seller, i) => (
                      <Div
                        cursor="pointer"
                        width="33%"
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
                  </BestRatings>
                </TopSellersDiv>
                <TopicTitle>Trending</TopicTitle>
                <TrendingProducts />
                <Ads />
              </>
            )}
          </Div>
          {searchClicked && (
            <Div
              width="60%"
              height="auto"
              padding="25px"
              backgroundColor="#fff"
              br="11px">
              <Div display="flex" color="#7D7D7D">
                <SpottrP>Showing 2 results for</SpottrP>
                <SpottrP p="0 0 0 7px" color="#274b89">
                  "Cloths"
                </SpottrP>
              </Div>
              <Div padding="16px 0 0 0">
                <Div
                  onClick={() =>
                    showRecentSearch
                      ? handleOpenModal()
                      : handleRedirectProductPage()
                  }>
                  <Memberproduct />
                </Div>
                <Ads />
                <Memberproduct />
                <Memberproduct />
                <Ads />
              </Div>
            </Div>
          )}
        </Div>
      </SearchreqBody>
    </>
  );
};

export default Searchrequest;

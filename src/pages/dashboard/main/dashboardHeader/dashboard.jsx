import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useCorporateProduct } from "context/addProduct";
import { useRecentSearchContext } from "context/recentSearch";

import Search from "./searchIcon";
import SingleMenu from "./singleMenu";
import { HeaderContainer, NotificationDiv } from "./style";
import AddWhite from "assets/svg/addwhite.svg";
import Bell from "assets/svg/mainNotifi.svg";
import Message from "assets/svg/messages.svg";
import { headerMenuData } from "./menu";
import {
  Button,
  Div,
  Img,
  SpottrLink,
  SpottrP,
} from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/utils/appColors";
import menuCloseBtn from "assets/svg/closeBtn.svg";
import {
  MESSAGES,
  SEARCHREQUEST,
} from "../../../../utilities/static/route-const";
import NotificationModal from "../discover/modal/NotificationModal";

export default function DashboardHeader() {
  const [subHeaderMenu, setSubHeaderMenu] = useState(0);
  const { corporateProduct, setCorporateProduct } = useCorporateProduct();
  const { setShowRecentSearch, setShowSearchContent, setSearchClicked } =
    useRecentSearchContext();
  const [searchFocus, setSearchFocus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  function handleNotification() {
    setShowModal(true);
  }

  function productModal() {
    setCorporateProduct({
      ...corporateProduct,
      showProductModal: true,
    });
  }

  const searchInFocus = () => {
    setSearchFocus(true);
    setShowRecentSearch(false);
    history.push(SEARCHREQUEST);
  };

  const closeSearchInEscape = (e) => {
    if (e.code === "Escape") {
      setSearchFocus(false);
      setShowRecentSearch(true);
      setShowSearchContent("");
    }
  };

  const closeSearchInFocus = (e) => {
    setSearchFocus(false);
    setShowRecentSearch(true);
    // setSearchClicked(false)
    setShowSearchContent("");
  };

  return (
    <HeaderContainer>
      <Div display="flex" alignI="center">
        <Search placeholder={"Type a keyword"} searchInFocus={searchInFocus} />
        {searchFocus && (
          <Div
            onKeyUpCapture={closeSearchInEscape}
            pos="absolute"
            display="flex"
            justify="flex-start"
            alignI="center"
            width="100%"
            height="110px"
            padding="0 0 0 20%"
            backgroundColor="hsla(0, 0%, 0%, 0.51)"
            style={{ top: "0", right: "0", zIndex: "0" }}>
            <Search
              setSearchClicked={setSearchClicked}
              width={"495px"}
              placeholder="Search for anything..."
              setShowSearchContent={setShowSearchContent}
              type="overlay_search"
            />
            <Div
              pos="absolute"
              style={{ left: "48%", top: "45px" }}
              onClick={closeSearchInFocus}>
              <Img
                src={menuCloseBtn}
                width="14px"
                height="14px"
                m="6px 0"
                alt="Close Search"
              />
            </Div>
          </Div>
        )}

        <Div display="flex" wrap="wrap" alignI="center" padding="0 0 0 25px">
          {headerMenuData.map((menu, i) => (
            <div onClick={() => setSubHeaderMenu(i)}>
              <SingleMenu
                key={i}
                text={menu.text}
                link={menu.link}
                icon={menu.icon}
                active={subHeaderMenu === i ? "menu-active" : ""}
              />
            </div>
          ))}
        </Div>
      </Div>
      <NotificationDiv>
        <Div cursor="pointer" onClick={handleNotification} mr="10px">
          <Img src={Bell} height="20px" width="20px" alt="Notification Bell" />
        </Div>
        <SpottrLink to={MESSAGES} display="flex">
          <Img src={Message} height="20px" width="20px" alt="Message" />
          <SpottrP fw="600" ml="10px" fs="12px">
            Messages
          </SpottrP>
        </SpottrLink>
      </NotificationDiv>
      <Button
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        p="10px"
        w="110px"
        br="3px"
        fw="bold"
        bc={Colors.primary}
        color={Colors.white}
        onClick={productModal}>
        <Img src={AddWhite} alt="Message" /> Add New
      </Button>
      {showModal && (
        <NotificationModal show={showModal} close={() => setShowModal(false)} />
      )}
    </HeaderContainer>
  );
}

import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useCorporateProduct } from "context/addProduct";
import { useRecentSearchContext } from "context/recentSearch";

import Search from "./searchIcon";
import SingleMenu from "./singleMenu";
import { HeaderContainer, NotificationDiv } from "./style";
import AddWhite from "assets/svg/addwhite.svg";
import Avatar from "assets/svg/avatar.svg";
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
  PROFILE,
  SEARCHREQUEST,
} from "../../../../utilities/static/route-const";
import NotificationModal from "../discover/modal/NotificationModal";
import { LoginText } from "pages/signin/Login/style";
import { LabelText } from "components/onboading/inputField/style";
import { Column } from "../common/style";
import { Row } from "react-bootstrap";
import MessagingModal from "../discover/modal/NotificationModal/messagingModal";

export default function DashboardHeader() {
  const [subHeaderMenu, setSubHeaderMenu] = useState(0);
  const { corporateProduct, setCorporateProduct } = useCorporateProduct();
  const { setShowRecentSearch, setShowSearchContent, setSearchClicked } =
    useRecentSearchContext();
  const [searchFocus, setSearchFocus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMessagingModal, setShowMessagingModal] = useState(false);
  const history = useHistory();

  function handleNotification() {
    setShowModal(true);
  }
  function handleMessaging() {
    setShowMessagingModal(true);
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
    <>      
    <Div width="100%" padding="0px 0px 20px 0px" marginTop="20px">
      <Row width="100%">
        <Column size={6}>
          <h4>Corporate Account</h4>
          <p>Dangote Limited PLC</p>  
        </Column>

        <Column size={6}>
          <NotificationDiv style={{ float: "right" }}>
        <Div cursor="pointer" onClick={handleNotification} mr="10px">
          <Img src={Bell} height="20px" width="20px" alt="Notification Bell" />
        </Div>
        {/* <SpottrLink to={MESSAGES} display="flex"> */}
        <Div cursor="pointer" onClick={handleMessaging} mr="10px">
          <Img src={Message} height="20px" width="20px" alt="Message" />
          </Div>
        {/* </SpottrLink> */}
      <SpottrLink to={PROFILE} display="flex">
        <Img src={Avatar} height="50px" width="50px" alt="Message" />
      </SpottrLink>
      {showModal && (
        <NotificationModal show={showModal} close={() => setShowModal(false)} />
      )}
      {showMessagingModal && (
        <MessagingModal show={showMessagingModal} close={() => setShowMessagingModal(false)} />
      )}
      </NotificationDiv>

        </Column>
      </Row>
    </Div>


    <Div width="100%" padding="0px 0px 10px 0px">
    <Row width="100%">
            <Column size={6}>
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

        
      </Div>
            </Column>

            <Column size={6}>
              <small style={{ float: "right" }}>+ add new categories</small>
            </Column>
        </Row>
        <hr/>
      
      
    </Div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useCorporateMenu } from "context/corporateMenu";
import BigMenu from "./bigMenu";

import { PROFILE } from "utilities/static/route-const";
import Colors from "GlobalStyles/utils/appColors";
import {
  Div,
  Img,
  SpottrLink,
  SpottrP,
  Button,
} from "GlobalStyles/spotrrStyles/style";
import {
  BigMenuItemsContainer,
  MenuContainer,
  MenuToggleContainer,
  UserInfoMenuContainer,
} from "./style";
import HomeIcon from "assets/svg/shortlogo.svg";
import menuToggle from "assets/svg/navbarOpenBtn.svg";
import menuCloseBtn from "assets/svg/closeBtn.svg";
import defaultAvatar from "assets/svg/default-avatar.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAllData } from "store/authorize/authorizeReducer";
import { clearSecureStorage } from "utilities/js/helpers";
import { menuData } from "./menuData";
import { useLocation } from "react-router-dom";

export default function Menu() {
  const { corporateMenu, setCorporateMenu } = useCorporateMenu();
  const { data } = useSelector((state) => state.authorize);
  const dispatch = useDispatch();
  const [navStatus, setNavStatus] = useState(true);
  const [userprofile, setUserProfile] = useState(data);
  const location = useLocation();

  function onActiveClick(name) {
    setCorporateMenu(() => {
      const menu = corporateMenu.map((men) => {
        if (name === men.text) {
          return {
            ...men,
            isActive: true,
          };
        } else {
          return {
            ...men,
            isActive: false,
          };
        }
      });
      return [...menu];
    });
  }

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setCorporateMenu(menuData);
    }
  }, [location.pathname]);

  const handleCloseBigSideNav = () => {
    setNavStatus(false);
  };
  const handleOpenBigSideNav = () => {
    setNavStatus(true);
  };

  const logout = () => {
    clearSecureStorage();
    dispatch(
      setAllData({ isAuth: false, token: "", refreshToken: "", data: {} })
    );
    // setUser({
    //   ...user,
    //   isAuth: false,
    //   token: "",
    //   refreshToken: "",
    //   data: {},
    // });
  };

  useEffect(() => {
    setUserProfile(data);
  }, [data]);

  return (
    <Div>
      <MenuToggleContainer onClick={handleOpenBigSideNav} open={navStatus}>
        <Img src={menuToggle} alt="Open Btn" />
      </MenuToggleContainer>
      <MenuContainer open={navStatus}>
        <Div
          display="flex"
          justify="space-between"
          alignI="center"
          padding="0 0 0 8px">
          <Img src={HomeIcon} alt="Spottr" h="60px" w="60px" />
          <Div onClick={handleCloseBigSideNav} cursor="pointer">
            <Img
              src={menuCloseBtn}
              width="15px"
              height="15px"
              alt="Close Side nav"
            />
          </Div>
        </Div>
        
        <BigMenuItemsContainer>
          {corporateMenu.map((menu, i) => (
            <div onClick={() => onActiveClick(menu.text)}>
              <BigMenu
                link={menu.link}
                text={menu.text}
                key={i}
                isActive={menu.isActive}
                icon={menu.icon}
              />
            </div>
          ))}
          <Div bbm="1.5px solid #E7E7E7" padding="35px 0 0 0" />
          <Div
            display="flex"
            justify="space-between"
            padding="15px 20px 55px 20px">
            {/* <SpottrP fw="600" fs="14px" mt="1px" color={Colors.ligterGrey}>
              Terms of service
            </SpottrP> */}
            <Button bc="rgba(0, 0, 0, 0)" onClick={logout}>
              <SpottrP fw="600" fs="14px" mt="1px" color={Colors.primary}>
                Logout
              </SpottrP>
            </Button>
          </Div>
          <Div display="flex" justify="center" padding="0 0 20px 0">
            <SpottrP fs="11px" color={Colors.primary}>
              Spottr 0.0.2
            </SpottrP>
          </Div>
        </BigMenuItemsContainer>
      </MenuContainer>
    </Div>
  );
}

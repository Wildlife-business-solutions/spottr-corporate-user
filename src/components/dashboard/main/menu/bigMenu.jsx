import React from "react";
import { Div, SpottrNavLink, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { MenuIcon, MenuItem, MenuText, MenuIconContainer } from "./style";
import Colors from "GlobalStyles/utils/appColors";

export default function BigMenu({ icon, text, isActive, link }) {
  return (
    <SpottrNavLink to={link}>
      <center></center>
      <MenuItem className={isActive && "activeLink"}>
        <MenuIconContainer>
          {/* {!isActive && <MenuIcon src={icon} />} */}
          <MenuIcon src={icon} />
        </MenuIconContainer>
        
          <MenuText>{text}</MenuText>
      </MenuItem>
    </SpottrNavLink>
  );
}

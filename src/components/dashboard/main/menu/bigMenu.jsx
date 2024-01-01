import React from "react";
import { Div, SpottrNavLink, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { MenuIcon, MenuItem, MenuText, MenuIconContainer } from "./style";
import Colors from "GlobalStyles/utils/appColors";

export default function BigMenu({ icon, text, isActive, link }) {
  return (
    <SpottrNavLink to={link}>
      <MenuItem className={isActive && "activeLink"}>
        <MenuIconContainer>
          {/* {!isActive && <MenuIcon src={icon} />} */}
          <MenuIcon src={icon} />
        </MenuIconContainer>
        <Div display="flex" justify="space-between">
          <MenuText>{text}</MenuText>{" "}
          {text === "Refer and Earn" && (
            <Div
              margin="0 0px 0 45px"
              br="3px"
              padding="2px 4px"
              backgroundColor={"rgba(95, 193, 70, 0.19)"}>
              <SpottrP fs="10px" color={Colors.green} fw="600">
                New
              </SpottrP>
            </Div>
          )}
        </Div>
      </MenuItem>
    </SpottrNavLink>
  );
}

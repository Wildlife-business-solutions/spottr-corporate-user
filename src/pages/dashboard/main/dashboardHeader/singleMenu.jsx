import { Img, SpottrLink, SpottrP } from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/utils/appColors";
import React from "react";
import { SingleMenuDiv } from "./style";

export default function SingleMenu({ icon, link, text, active }) {
  return (
    <SpottrLink to={link} textAlign="center">
      <SingleMenuDiv className={active !== "" ? active : ""}>
        <Img width="20px" height="20px" src={icon} alt={text} />
        <SpottrP color={Colors.primary} fw="600" fs="11.8px">
          {text}
        </SpottrP>
      </SingleMenuDiv>
    </SpottrLink>
  );
}

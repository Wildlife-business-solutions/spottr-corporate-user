import { Img, SpottrLink, SpottrP } from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/utils/appColors";
import { SingleMenuDiv } from "pages/dashboard/main/dashboardHeader/style";
import React from "react";


export default function RandomSingle({ icon, link, text }) {
  return (
    <SpottrLink to={link}>
      <SingleMenuDiv>
        <Img width="25px" height="25px" src={icon} alt={text} />
        <SpottrP color={Colors.primary} fs="10px" mt="-7px" fw="300">{text}</SpottrP>
      </SingleMenuDiv>
    </SpottrLink>
  );
}

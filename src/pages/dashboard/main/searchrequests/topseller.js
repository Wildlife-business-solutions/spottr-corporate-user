import React from "react";
import {
  DetailsDiv,
  LocationText,
  NameText,
  TopsellerImage,
  TopSellersContainer,
  TotalDiv,
  TotalText,
} from "./style";
import LadyPic from "assets/svg/lady.svg";
import pin from "assets/svg/pin.svg";
import { Div } from "GlobalStyles/spotrrStyles/style";

export default function Customer({
  image = { LadyPic },
  bg = "blues",
  name = "John Tommy",
  location = "Lagos, Nigeria",
  total = "4,509",
}) {
  return (
    <TopSellersContainer bg={bg}>
      <Div display="flex" height="100%" margin="0px 0px 0px 10px">
        <TopsellerImage src={image} alt="seller" />
      </Div>
      <DetailsDiv>
        <Div>
          <NameText>{name}</NameText>
          <LocationText>{location}</LocationText>
        </Div>
        <TotalDiv>
          <img src={pin} alt="pin" />
          <TotalText>{total} items bought</TotalText>
        </TotalDiv>
      </DetailsDiv>
    </TopSellersContainer>
  );
}

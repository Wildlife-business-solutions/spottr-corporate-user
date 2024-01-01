import {
  Div,
  HeightSpacer,
  Img,
  SpottrP,
} from "GlobalStyles/spotrrStyles/style";
import React from "react";
import image from "assets/opImage.png";
import Colors from "GlobalStyles/utils/appColors";
import Divider from "GlobalStyles/dividerLine";
import smallToken from "assets/svg/small-token.svg";
import usergroupIcon from "assets/svg/usergroupIcon.svg";
import smallDot from "assets/svg/newTasksdot.svg";

function SingleTaskItemActive({
  title,
  amount,
  address,
  statusBgColor,
  statusTextColor,
  statusText,
}) {
  return (
    <Div
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
      backgroundColor="#FFF"
      padding="10px 20px"
      width="26%"
      height="136px"
      br="5px"
      border="1px solid rgba(154, 159, 191, 0.25)">
      <Div display="flex" gap="10px">
        <Img w="70px" height="70px" br="3px" src={image} alt={image} />
        <Div
          margin="0px 0px 0px 5px"
          width="100%"
          display="flex"
          flexDirection="column">
          <Div display="flex" flexDirection="column">
            <SpottrP fs="13px" fw="bold" color={Colors.darkblue}>
              {title}
            </SpottrP>
            <Div
              br="3px"
              padding="5px 10px"
              width="90px"
              backgroundColor={Colors.lightGreen}>
              <SpottrP fs="12px">N4,800,000</SpottrP>
            </Div>
          </Div>
          <Div
            width="100%"
            display="flex"
            justify="space-between"
            alignI="center"
            margin="12px 0px 0px 0px">
            <Div display="flex">
              <SpottrP fs="12px" fw="bold" mr="5px" color={Colors.ligterGrey}>
                Coin Eqv:
              </SpottrP>
              <Img src={smallToken} alt="red-dot" />
              <SpottrP fs="12px" fw="bold" ml="2px" color={Colors.ligterGrey}>
                {" "}
                150
              </SpottrP>
            </Div>
            <SpottrP fs="12px" fw="bold" color={Colors.ligterGrey}>
              Hold for more option
            </SpottrP>
          </Div>
        </Div>
      </Div>
      <HeightSpacer h="10px" />
      <Divider />
      <HeightSpacer h="3px" />
      <Div display="flex" justify="space-between">
        <Div display="flex" alignI="center">
          <Img src={usergroupIcon} alt="red-dot" width="15px" height="15px" />
          <Img src={smallDot} alt="red-dot" width="10px" height="10px" />
          <SpottrP fs="12px" fw="bold" mr="3px" color={Colors.ligterGrey}>
            100 slot left
          </SpottrP>
          <Img src={smallDot} idth="10px" height="10px" alt="red-dot" />
          <SpottrP fs="12px" fw="bold" ml="3px" color={Colors.ligterGrey}>
            2 mins ago
          </SpottrP>
        </Div>
        <Div backgroundColor={statusBgColor} padding="5px 20px" br="3px">
          <SpottrP fs="12px" fw="bold" color={statusTextColor}>
            {statusText === "New" ? "02:33min left" : statusText}
          </SpottrP>
        </Div>
      </Div>
    </Div>
  );
}

export default SingleTaskItemActive;

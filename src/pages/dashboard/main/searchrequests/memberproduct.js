import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import image from "assets/svg/userIcon.svg";
import Colors from "GlobalStyles/utils/appColors";
import rating from "assets/svg/rate.svg";
import accept from "assets/svg/accept.svg";
import decline from "assets/svg/decline.svg";
import { LoginButton } from "pages/signin/Login/style";

const Memberproduct = ({
  setShowPopup,
  showPopup,
  request,
  setIsAccepted,
  showSend,
  setShowSend,
  customerOffer,
  isAccepted,
}) => {
  const handleClicked = () => {
    if (request === "send") {
      // setShowSend(true);
      setIsAccepted(true);
    }
    if (request === "receive") {
      setShowPopup(true);
    }
  };

  const handleDisable = () => {
    setShowPopup(false);
    setShowSend(false);
  };

  return (
    <Div
      //   border="0.96px solid rgba(154, 159, 191, 0.25)"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.07)"
      backgroundColor="#FFF"
      padding="8px 20px"
      width="100%"
      // height="85px"
      margin="10px 0"
      br="5px"
      onClick={handleClicked}
      cursor={true}
      position="relative">
      <Div display="flex" pos="relative">
        {(showPopup || showSend) && (
          <Div
            pos="absolute"
            display="flex"
            padding="5px 25px 0 25px"
            justify={isAccepted ? "center" : "space-between"}
            alignI="center"
            br="100px"
            backgroundColor="#fff"
            width="316px"
            height="70px"
            boxShadow="0 0 25px 25px rgba(0, 0, 0, 0.07)"
            style={{ zIndex: 5, left: "15%", top: "18px" }}>
            {isAccepted ? (
              <SpottrP color="#39B54A" fw="bold">
                Accepted
              </SpottrP>
            ) : (
              <>
                <LoginButton
                  bg="transparent"
                  onClick={() => setIsAccepted(true)}>
                  <Img src={accept} />
                </LoginButton>
                <LoginButton bg="transparent" onClick={() => handleDisable()}>
                  <Img src={decline} />
                </LoginButton>
              </>
            )}
          </Div>
        )}
        <Div pos="relative">
          <Img w="50px" h="50px" br="3px" src={image} alt={image} />
          <Div pos="absolute" style={{ top: "37px", left: "9px" }}>
            <Img w="32px" h="32px" br="3px" src={rating} alt="rating" />
            <Div
              fs="9px"
              fw="bold"
              color="#fff"
              pos="absolute"
              style={{ top: "8px", left: "8px" }}>
              4.5
            </Div>
          </Div>
        </Div>
        <Div
          margin="0px 0px 0px 10px"
          width="100%"
          display="flex"
          flexDirection="column">
          <Div>
            <SpottrP fs="13px" fw="bold" color={Colors.darkblue}>
              Multi-Colored Children’s Sportwear
            </SpottrP>
            <Div display="flex" padding="5px 0 0 0" fw="bold" fs="10px">
              <SpottrP color="#274B89">Available Quantity: {10}</SpottrP>
              <SpottrP color="#274B89" p="0 0 0 10px">
                Unit: {"Hr"}
              </SpottrP>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div bbm="1px solid #E7E7E7" padding="8px 0" />
      <Div
        display="flex"
        justify="space-between"
        alignI="center"
        padding="6px 0">
        <Div
          display="flex"
          alignI="center"
          fs="10px"
          fw="bold"
          color={Colors.ligterGrey}>
          <SpottrP>Lagos, Nigeria</SpottrP>
          <SpottrP p="0 0 0 6px">03 Aug 2020 : 01:05PM</SpottrP>
        </Div>

        {isAccepted ? (
          <SpottrP
            fw="bold"
            p="5px 10px"
            color="#39B54A"
            fs="10px"
            bg="hsla(128, 52%, 47%, 0.24)">
            Accepted
          </SpottrP>
        ) : (
          <Div br="3px" padding="3px 6px" backgroundColor={Colors.lightGreen}>
            <SpottrP fs="10px" fw="bold">
              {customerOffer === true ? "Customer offer" : "N4800000"}
            </SpottrP>
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default Memberproduct;

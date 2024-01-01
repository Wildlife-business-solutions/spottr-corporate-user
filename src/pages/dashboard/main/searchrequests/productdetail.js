import React from "react";
import Singleproduct from "./singleproduct";

import { Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";
import { MapArea } from "./style";
import { LoginButton } from "pages/signin/Login/style";
import Info from "assets/svg/info.svg";
import Message from "assets/svg/message.svg";
import Calls from "assets/svg/call.svg";
import Customoffer from "./customoffer";
import accept from "assets/svg/accept.svg";
import decline from "assets/svg/decline.svg";

const Productdetail = ({ action, requireLogistics }) => {
  // const inputstyle = { padding: '10px 0 5px 0', border: 'none', fontSize: '20px', borderBottom: '1px solid #275b89', width: '400px', fontFamily: 'Nunito' }

  const [hasCustomOffer, setHasCustomOffer] = React.useState(true);
  const [showAccept, setShowAccept] = React.useState(true);
  const [isAccepted, setIsAccepted] = React.useState(false);

  const handleDisable = () => {
    setShowAccept(false);
  };

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <Div
      display="flex"
      flexDirection="column"
      justify="space-between"
      pos="relative">
      {
        <MapArea>
          <iframe
            title="map"
            width="100%"
            height="152"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=spottr&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"></iframe>
        </MapArea>
      }
      <Div pos="absolute" width="100%" style={{ top: "100px", left: "12%" }}>
        <Singleproduct />
      </Div>
      <Div
        display="flex"
        justify="center"
        alignI="center"
        padding="15% 0 0 0"
        fw="bold">
        <SpottrP fs="36px" color="#274b89">
          N4,800,000
        </SpottrP>
        <SpottrP fs="16px" color="rgba(0, 0, 0, 0.38)">
          /kg
        </SpottrP>
      </Div>
      <Div
        ta="center"
        width="460px"
        margin="0 auto"
        padding="27px 0 0 0"
        fs="12px">
        <SpottrP tAlign="left" fw="bold">
          Description:
        </SpottrP>
        <SpottrP tAlign="left" color="rgba(0,0,0,0.6)" p="20px 0 0 0">
          For regular goods for good exchange, the exchange area shows a list of
          goods that have been indicated for trading and then any user who has a
          new good to be traded for another comes to the exchange and indicates
          their good.
        </SpottrP>
        <LoginButton
          bg="#274B89"
          disabled={!isAccepted ? true : false}
          wbtn="300px"
          mg="30px auto 20px auto"
          onClick={action}>
          Pay Now
        </LoginButton>
      </Div>

      {hasCustomOffer ? (
        <Customoffer />
      ) : (
        <>
          <Div
            ta="left"
            padding="20px 0"
            br="3px"
            margin="45px auto 0 auto"
            border="1px solid rgba(96, 100, 112, 0.1)"
            width="460px">
            <SpottrP fw="bold" fs="14px" color="#274B89" p="0 0 0 85px">
              Create Request
            </SpottrP>
            <SpottrP fs="11.55px" color="#274B89" p="20px 0 0 30px">
              Quantity
            </SpottrP>
            <Div padding="0 0 0 30px">
              <input
                autoFocus
                className="qstyle"
                placeholder="Optional"
                // style={inputstyle}
              />
            </Div>
            <Div ta="center" margin="25px 0 0 0">
              <LoginButton wbtn="257px" hg="48px">
                Send Request
              </LoginButton>
            </Div>
          </Div>
        </>
      )}

      <Div
        display="flex"
        justify="space-between"
        alignI="center"
        width="470px"
        margin="-35px auto 0 auto">
        <Img src={Calls} w="150px" h="150px" />
        <Img src={Message} w="150px" h="150px" />
        <Img src={Info} w="150px" h="150px" />
      </Div>
      <Div display="flex" width="100%" justify={"center"}>
        {showAccept && (
          <Div
            display="flex"
            padding="5px 25px 0 25px"
            alignI="center"
            justify={"center"}
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
                <LoginButton bg="transparent" onClick={handleAccept}>
                  <Img src={accept} />
                </LoginButton>
                <LoginButton bg="transparent" onClick={() => handleDisable()}>
                  <Img src={decline} />
                </LoginButton>
              </>
            )}
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default Productdetail;

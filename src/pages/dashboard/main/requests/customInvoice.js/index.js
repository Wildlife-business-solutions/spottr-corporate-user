import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { SpottrP } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";

const CustomInvoice = ({
  handleCustomOffer,
  setCustomOffer,
  customOffer,
  inputstyle,
}) => {
  return (
    <Div width="28%">
      <Div
        display="flex"
        width="100%"
        alignI="center"
        br="100px"
        justify="space-between"
        backgroundColor="#fff"
        padding="16px 25px"
        boxShadow="0px 4px 15px rgba(0, 0, 0, 0.07)">
        <SpottrP color="#AFAFAF">Issue custom offer?</SpottrP>
        <Div display="flex" width="50%">
          <LoginButton
            bld="400"
            p="5px 15x"
            wbtn="71px"
            hg="41px"
            col="#274b89"
            br="100px"
            bg="transparent"
            mg="0 10px 0 0"
            fz="13px"
            onClick={handleCustomOffer}>
            No
          </LoginButton>
          <LoginButton
            bld="400"
            p="5px 15x"
            wbtn="71px"
            bg="#274B89"
            hg="41px"
            br="100px"
            fz="13px"
            onClick={() => setCustomOffer(true)}>
            Yes
          </LoginButton>
        </Div>
      </Div>
      {customOffer && (
        <Div
          width="100%"
          margin="25px 0"
          br="22px"
          height="480px"
          backgroundColor="#fff"
          padding="26px 35px"
          boxShadow="0px 4px 15px rgba(0, 0, 0, 0.07)">
          <SpottrP color="#274b89" fw="bold" tAlign="center" m="0 0 25px 0">
            Create custom invoice
          </SpottrP>
          <Div>
            <input
              autoFocus
              className="qstyle"
              placeholder="Enter Quantity"
              style={inputstyle}
            />
            <input
              className="qstyle"
              placeholder="Enter Amount"
              style={inputstyle}
            />
            <input
              className="qstyle"
              placeholder="Enter Unit (hrs, kg, tonnes)"
              style={inputstyle}
            />
            <input
              className="qstyle"
              placeholder="Enter Description"
              style={inputstyle}
            />
            <LoginButton
              bld="bold"
              p="5px 15x"
              wbtn="100%"
              bg="#274B89"
              hg="55px"
              fz="13px"
              mg="16px 0 12px 0">
              Send
            </LoginButton>
            <LoginButton
              onClick={() => setCustomOffer(false)}
              bld="bold"
              p="5px 15x"
              wbtn="100%"
              hg="55px"
              col="#274b89"
              br="100px"
              bg="transparent"
              mg="0 10px 0 0"
              fz="13px">
              Cancel
            </LoginButton>
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default CustomInvoice;

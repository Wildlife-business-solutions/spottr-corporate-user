import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import Colors from "GlobalStyles/utils/appColors";
import Memberproduct from "../../searchrequests/memberproduct";

const Receivedreqs = ({
  setShowPopup,
  showPopup,
  setIsAccepted,
  isAccepted,
  request,
}) => {
  return (
    <Div>
      <Div
        display="flex"
        alignI="center"
        justify="space-between"
        fs="12px"
        margin="40px 0px">
        <Div display="flex">
          <SpottrP>Sort by:</SpottrP>
          <SpottrP p="0 0 0 6px" color={Colors.primary}>
            Date
          </SpottrP>
        </Div>
        <SpottrP fw="bold" color={Colors.primary}>
          More options
        </SpottrP>
      </Div>
      <Memberproduct
        setShowPopup={setShowPopup}
        showPopup={showPopup}
        isAccepted={isAccepted}
        setIsAccepted={setIsAccepted}
        request={request}
      />

      <Memberproduct />
      <Memberproduct />
    </Div>
  );
};

export default Receivedreqs;

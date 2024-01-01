import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React, { useState } from "react";
import Colors from "GlobalStyles/utils/appColors";
import Memberproduct from "../../searchrequests/memberproduct";

const SentReqs = ({
  setShowPopup,
  setCustomOffer,
  customerOffer,
  isAccepted,
  setIsAccepted,
  request,
}) => {
  const [showSend, setShowSend] = useState(false);
  return (
    <Div>
      <Div display="flex" alignI="center" justify="space-between" fs="12px">
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
        setIsAccepted={setIsAccepted}
        setShowSend={setShowSend}
        showSend={showSend}
        customerOffer={true}
        isAccepted={isAccepted}
        request={request}
        setShowPopup={setShowPopup}
      />
      <Memberproduct
        setIsAccepted={setIsAccepted}
        isAccepted={isAccepted}
        showSend={showSend}
        customerOffer={false}
        setShowSend={setShowSend}
        setShowPopup={setShowPopup}
      />
    </Div>
  );
};

export default SentReqs;

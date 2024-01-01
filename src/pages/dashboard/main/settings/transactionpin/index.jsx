import React from "react";
import { Div, SpottrP, Button } from "GlobalStyles/spotrrStyles/style";
import PinInput from "components/UI/PinInput";

function Transactionpin() {
  return (
    <Div
      width="420px"
      height="400px"
      backgroundColor="#fff"
      br="8px"
      padding="40px 25px">
      <Div display="flex" justify="space-between" margin="0px 0px 14px 0px">
        <Div />
        <Button bc="#274B89" color="#fff" p="5px 25px" br="4px">
          Done
        </Button>
      </Div>
      <Div>
        <SpottrP color="#274b89" fs="13px" ml="20px" mr="20px">
          Set Transaction PIN
        </SpottrP>
        <SpottrP color="#274b89" fs="18px" fw="bold" p="25px 20px 0 20px">
          Transaction PIN
        </SpottrP>
        <PinInput />
        <SpottrP
          tAlign="center"
          color="rgba(59, 59, 59, 0.7)"
          fs="12px"
          p="50px 45px">
          Kindly input the transaction PIN you registered while setting up your
          profile
        </SpottrP>
      </Div>
    </Div>
  );
}

export default Transactionpin;

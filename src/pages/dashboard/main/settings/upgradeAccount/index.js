import React, { useState } from "react";
import { Button, Div, Input, SpottrP } from "GlobalStyles/spotrrStyles/style";
import backArrow from "assets/svg/backArrow.svg";
import { Img } from "../../../../../GlobalStyles/spotrrStyles/style";
import ToggleSwitch from "../../../../../components/dashboard/main/switch/index";

const UpgradeAccount = () => {
  const [onSwitch, setOnSwitch] = useState(false);
  return (
    <Div
      width="100%"
      min_width="450px"
      height="480px"
      backgroundColor="#fff"
      br="8px"
      padding="40px 30px">
      <SpottrP color="#274b89" fs="18px" fw="bold">
        <Img m="0px 20px 0px 0px" src={backArrow} />
        Update Account Detail
      </SpottrP>
      <Div margin="14px 0px 0px 0px" display="flex" justify="flex-end">
        <Button
          h="40px"
          w="30%"
          bc="#274B89"
          color="#fff"
          p="5px 25px"
          br="4px">
          Done
        </Button>
      </Div>

      <Div>
        <Div
          margin="25px 20px 30px 20px"
          display="flex"
          justify="space-between">
          <SpottrP color="#274b89" fs="16px" fw="bold">
            Enter Bank details
          </SpottrP>
          <Div>
            {" "}
            <ToggleSwitch
              checkedVal={onSwitch}
              handleSwitch={(e) => setOnSwitch(e.target.checked)}
            />
          </Div>
        </Div>

        <Input
          bg="#F8F8F8"
          dis="none"
          p="0 20px"
          pcol="#C4C4C4"
          mar="15px 0 10px 0"
          hg="54px">
          <input
            type="number"
            // value={lastname}
            // onChange={handlelastname}
            placeholder="Account Number"
          />
        </Input>

        <Input
          bg="#F8F8F8"
          dis="none"
          p="0 20px"
          pcol="#C4C4C4"
          mar="15px 0 10px 0"
          hg="54px">
          <input
            type="text"
            // value={lastname}
            // onChange={handlelastname}
            placeholder="Select Bank"
          />
        </Input>
      </Div>
    </Div>
  );
};

export default UpgradeAccount;

import React from "react";
import { Div, Img, SpottrH, SpottrP } from "GlobalStyles/spotrrStyles/style";
import forwarrow from "assets/svg/bluearrow.svg";
import Colors from "GlobalStyles/utils/appColors";
import Filters from '../search/Filters'


function SettingsItem({ label, arrow, switchToggle, col }) {
  return (
    <Div display="flex" width="100%" justify="space-between" padding="0px 25px 0px 0px" cursor={true}>
      <Div display="flex" alignI="center" width="400px" justify="space-between">
        <SpottrH color={label === "Allow Biometrics" ? "#C4C4C4" : Colors.primary} fw="bold" fs="13px" display="flex">
          <p>{label}</p>
          {label === "Upgrade Account" && (
            <Div backgroundColor={"hsla(10, 75%, 65%, 0.58)"} br="3px" margin="0px 12px">
              <SpottrP color={Colors.labelred} p="2px 5px" fs="8px">Basic</SpottrP>
            </Div>
          )}
        </SpottrH>
        {
          label === "Set Currency" && (
            <Div>
              <Filters
                col="transparent"
                // action={handleChangeForAdminRole}
                options={["NGN", "USD"]}
              />
            </Div>
          )
        }
      </Div>
      <Div>
        {arrow && <Img src={forwarrow} alt="forwarrow" />}
        {switchToggle && switchToggle}
      </Div>
    </Div>
  );
}

export default SettingsItem;

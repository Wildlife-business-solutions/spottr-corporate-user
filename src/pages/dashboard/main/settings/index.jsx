import React, { useState } from "react";
import ToggleSwitch from "components/dashboard/main/switch";
import Divider from "GlobalStyles/dividerLine";
import SettingsItem from "./settingsItem";
import PasswordSet from "./passwordset";
import Transactionpin from "./transactionpin";
import Opportunities from "./opportunities";
import UpgradeAccount from "./upgradeAccount";
import SettingsHeader from "../search/Search";
import { ANALYSIS } from "../../../../utilities/static/route-const";
import { Div, SpottrP, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { SettingsContainer } from "./style";
import backArrow from "assets/svg/backArrow.svg";
import { useHistory } from "react-router-dom";
import Ownership from "./wallet";

function SettingsPage() {
  // const history = useHistory();
  const [onSwitch, setOnSwitch] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(0);
  const history = useHistory();
  function handleSettingsMenuChange(item) {
    setSettingsMenu(item);
  }
  // console.log("History", history);
  return (
    <Div cursor="pointer" padding="0 0 30px 0">
      <SettingsHeader searchheader="Settings" />
      <Div onClick={() => history.goBack()} width="100px" display={"flex"}>
        <img src={backArrow} alt="icon" />
        <p style={{ fontSize: "15px", color: "#274889", marginLeft: "15px" }}>
          Go back
        </p>
      </Div>
      <br />
      <Div display="flex" width="75%">
        <SettingsContainer>
          <Div padding="20px 15px">
            <SpottrP fs="11px" p="10px 0" fw="bold">
              Preferences
            </SpottrP>
            <Div
              padding="10px 0px 20px 0"
              cursor="pointer"
              bbm="1px solid #e4e4e4">
              <SettingsItem label="Set Currency" arrow={false} />
            </Div>
            <Div padding="15px 0px 20px 0">
              <SettingsItem
                label="Push Notifications"
                switchToggle={
                  <ToggleSwitch
                    checkedVal={onSwitch}
                    handleSwitch={(e) => setOnSwitch(e.target.checked)}
                  />
                }
              />
            </Div>
            <Div padding="10px 0px 20px 0" bbm="1px solid #e4e4e4">
              <SettingsItem
                label="Email Notifications"
                switchToggle={
                  <ToggleSwitch
                    handleSwitch={(e) => setOnSwitch(e.target.checked)}
                  />
                }
              />
            </Div>
            <Div padding="15px 0px 20px 0">
              <SettingsItem
                label="Sounds"
                switchToggle={
                  <ToggleSwitch
                    handleSwitch={(e) => setOnSwitch(e.target.checked)}
                  />
                }
              />
            </Div>

            <Div
              padding="10px 0px"
              cursor="pointer"
              bbm="1px solid #e4e4e4"
              onClick={() => handleSettingsMenuChange(4)}>
              <SettingsItem label="Upgrade Account" arrow={true} />
            </Div>
            <Div margin="30px 0 0 0" bbm="1px solid #e4e4e4">
              <SpottrP fs="11px" p="10px 0" fw="bold">
                Wallet
              </SpottrP>
              <Div
                cursor="pointer"
                padding="0 0 12px 0"
                onClick={() => handleSettingsMenuChange(0)}>
                <SettingsItem label="Wallet Settings" arrow={true} />
              </Div>
            </Div>
            <Div margin="30px 0 0 0" backgroundColor="" bbm="1px solid #e4e4e4">
              <SpottrP fs="11px" p="10px 0" fw="bold">
                Security
              </SpottrP>
              <Div cursor="pointer" onClick={() => handleSettingsMenuChange(1)}>
                <SettingsItem label="Password" arrow={true} />
              </Div>
              <Div
                padding="10px 0px"
                backgroundColor=""
                margin="15px 0 0 0"
                cursor="pointer"
                onClick={() => handleSettingsMenuChange(2)}>
                <SettingsItem label="Set Transaction PIN" arrow={true} />
              </Div>
            </Div>

            <Div padding="15px 0px 20px 0">
              <SettingsItem
                label="Allow Biometrics"
                switchToggle={
                  <ToggleSwitch
                    handleSwitch={(e) => setOnSwitch(e.target.checked)}
                  />
                }
              />
            </Div>
            <Div margin="30px 0 0 0" backgroundColor="">
              <SpottrP fs="11px" p="10px 0" fw="bold">
                Data
              </SpottrP>
              <SpottrLink to={ANALYSIS}>
                <Div
                  padding="10px 0px"
                  cursor="pointer"
                  onClick={() => handleSettingsMenuChange(3)}>
                  <SettingsItem label="Dashboard Analysis" arrow={true} />
                </Div>
              </SpottrLink>
              <Div
                onClick={() => handleSettingsMenuChange(5)}
                padding="10px 0px 20px 0"
                cursor="pointer">
                <SettingsItem label="Deactivate account" arrow={true} />
              </Div>
            </Div>

            <Divider />
          </Div>
        </SettingsContainer>
        <Div margin="0 0 0 20px" width="50%">
          {settingsMenu === 0 && <UpgradeAccount />}
          {settingsMenu === 1 && <PasswordSet />}
          {settingsMenu === 2 && <Transactionpin />}
          {settingsMenu === 4 && <Opportunities />}
          {settingsMenu === 5 && <Ownership />}
        </Div>
      </Div>
    </Div>
  );
}

export default SettingsPage;

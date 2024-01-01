import {
  Button,
  Div,
  Img,
  SpottrH,
  SpottrP,
} from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/utils/appColors";
import React from "react";
import { WalletAreaDiscover } from "./style";
import buyCoin from "assets/svg/buy.svg";
import withdrawCoin from "assets/svg/withdraw.svg";
import eye from "assets/svg/eye.svg";
import addIcon from "assets/svg/add.svg";
import Coinarea from "../coinsarea";
function DiscoverWallarea({ action }) {
  return (
    <WalletAreaDiscover>
      <Div padding="0 15px">
        <SpottrH color={Colors.primary} fs="18px" m="30px 0">
          Wallet
        </SpottrH>
        <Div display="flex" justify="space-between">
          <Div
            display="flex"
            justify="space-around"
            alignI="center"
            width="300px"
            height="120px"
            backgroundColor={Colors.primary}
            br="10px"
            onClick={action}>
            <Div>
              <SpottrP color={Colors.white} p="0 0 6px 0">
                Current Balance
              </SpottrP>
              <SpottrH color={Colors.white} fs="25px" fw="bold ">
                N3,847,895
              </SpottrH>
            </Div>
            <Div>
              <Img src={eye} height="23px" width="23px" alt="buy coin" />
            </Div>
          </Div>
          <Coinarea />
        </Div>

        <Div margin="20px 0 10px 0" display="flex" alignI="center">
          <Button mr="10px" br="3px" bc="#ECF7FF" p="8px 10px">
            <Div display="flex" alignI="center">
              <Img
                src={withdrawCoin}
                height="20px"
                width="20px"
                alt="buy coin"
              />
              <SpottrP ml="2px">Withdraw</SpottrP>
            </Div>
          </Button>
          <Button mr="10px" br="3px" bc="#ECF7FF" p="8px 10px">
            <Div display="flex" alignI="center">
              <Img src={buyCoin} height="20px" width="20px" alt="buy coin" />{" "}
              <SpottrP ml="5px">Buy coins</SpottrP>
            </Div>
          </Button>
          <Button
            br="20px"
            bc={Colors.white}
            bs=" 5.63636px 9.32px 27px rgba(39, 75, 137, 0.12)"
            p="10px">
            <Div display="flex" alignI="center">
              <Img src={addIcon} height="13px" width="13px" alt="buy coin" />
              <SpottrP ml="5px" fs="11px" color={Colors.primary} fw="500">
                {" "}
                Fund Wallet
              </SpottrP>
            </Div>
          </Button>
        </Div>
      </Div>
    </WalletAreaDiscover>
  );
}

export default DiscoverWallarea;

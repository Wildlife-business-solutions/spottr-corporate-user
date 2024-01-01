import { Div, Img, SpottrH, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import {
  CurrenciesItemsCliqToken,
  CurrenciesItemsFiat,
  CurrenciesItemsSUSD,
} from "./style";
import fiat from "assets/svg/fiat.svg";
import cliqToken from "assets/svg/cliq.svg";
import usd from "assets/svg/usd.svg";
import eye from "assets/svg/blueEye.svg";
import Colors from "GlobalStyles/utils/appColors";

function TransactionCurrencies() {
  return (
    <div>
      <CurrenciesItemsFiat>
        <Div width="100%" display="flex" justify="space-between" alignI="center" mb="20px">
          <Div width="150px" display="flex">
            <Img src={fiat} alt="Fiat Wallet" />
            <SpottrP color={Colors.primary} ml="15px">Fiat Wallets</SpottrP>
          </Div>
          <Div  display="flex">
            {/* <Img src={fiat} alt="Fiat Wallet" /> */}
          </Div>
        </Div>
        <Div width="100%" display="flex" justify="space-between" alignI="center">
          <Div width="150px" display="flex">
            <SpottrH fs="20px" color={Colors.primary}>N3,847,895</SpottrH>
          </Div>
          <Div  display="flex" cursor="pointer">
            <Img src={eye} height="20px"  width="20px" alt="SUSD eye" />
          </Div>
        </Div>
      </CurrenciesItemsFiat>
      <CurrenciesItemsCliqToken>
      <Div width="100%" display="flex" justify="space-between" alignI="center" mb="20px">
          <Div width="150px" display="flex">
            <Img src={cliqToken} alt="Fiat Wallet" />
            <SpottrP color={Colors.primary} ml="15px">Click Token</SpottrP>
          </Div>
          <Div  display="flex">
            {/* <Img src={fiat} alt="Fiat Wallet" /> */}
          </Div>
        </Div>
        <Div width="100%" display="flex" justify="space-between" alignI="center">
          <Div width="150px" display="flex">
            <SpottrH fs="20px" color={Colors.primary}>N3,847,895</SpottrH>
          </Div>
          <Div  display="flex" cursor="pointer">
            <Img src={eye} height="20px"  width="20px" alt="SUSD eye" />
          </Div>
        </Div>
      </CurrenciesItemsCliqToken>
      <CurrenciesItemsSUSD>
      <Div width="100%" display="flex" justify="space-between" alignI="center" mb="20px">
          <Div width="150px" display="flex">
            <Img src={usd} alt="Fiat Wallet" />
            <SpottrP color={Colors.primary} ml="15px">SUSD</SpottrP>
          </Div>
          <Div  display="flex">
            {/* <Img src={fiat} alt="Fiat Wallet" /> */}
          </Div>
        </Div>
      <Div width="100%" display="flex" justify="space-between" alignI="center">
          <Div width="150px" display="flex">
            <SpottrH fs="20px" color={Colors.primary}>N3,847,895</SpottrH>
          </Div>
          <Div  display="flex" cursor="pointer">
            <Img src={eye} height="20px"  width="20px" alt="SUSD eye" />
          </Div>
        </Div>
      </CurrenciesItemsSUSD>
    </div>
  );
}

export default TransactionCurrencies;

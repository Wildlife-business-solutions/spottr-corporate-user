import React from "react";
import { CancelBtn, Coincontent, CoinItemContainer } from "./style";
import fiatMoney from "assets/svg/fiat.svg";
import cliqMoney from "assets/svg/cliq.svg";
import usdMoney from "assets/svg/usd.svg";
import upgreen from "assets/svg/upgreen.svg";
import downred from "assets/svg/downred.svg";
import Filters from "../../search/Filters";
import { Div, Img, SpottrH, SpottrP } from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/utils/appColors";
import Divider from "GlobalStyles/dividerLine";
function Coinarea() {
  return (
    <Coincontent>
      <Div display="flex" justify="flex-end" padding="0 0 10px 0">
        <Filters
          options={["NGN", "USD"]}
          col="transparent"
          // show="none"
          wd="60px"
          // lt="388px"
          // setCurrency={setCurrency}
        />
      </Div>
      <CoinItemContainer>
        <Div display="flex" alignI="center">
          <Img width="20px" height="20px" src={fiatMoney} alt="Fiat Money" />
          <SpottrP ml="15px" fs="12px" color={Colors.primary}>
            Fiat Wallet
          </SpottrP>
        </Div>
        <Div display="flex" flexDirection="column">
          <Div display="flex" justify="flex-end">
            <Img src={upgreen} alt="down" width="15px" height="15px" />
          </Div>
          <SpottrH fs="18px" fw="bold" color={Colors.primary}>
            $456,890
          </SpottrH>
        </Div>
        <Div display="flex" width="100%" justify="flex-end" alignI="center">
          <SpottrP fs="9px" color={Colors.primary}>
            350.87 CT
          </SpottrP>
          <SpottrP ml="10px" mr="3px" fs="7px" color={Colors.primary}>
            34%
          </SpottrP>
          {/* <img src={downred} alt="down" width='15px' height='15px' style={{marginTop:"-3px"}}/> */}
        </Div>
        <Divider />
      </CoinItemContainer>
      <CoinItemContainer>
        <Div display="flex" alignI="center">
          <Img width="20px" height="20px" src={cliqMoney} alt="Fiat Money" />
          <SpottrP ml="15px" fs="12px" color={Colors.primary}>
            Cliq Token
          </SpottrP>
        </Div>
        <Div>
          <Div mb="-8px" mt="-10px" display="flex" justify="flex-end">
            <Img src={upgreen} alt="down" width="15px" height="15px" />
          </Div>
          <SpottrH fs="18px" fw="bold" color={Colors.primary}>
            $567.78
          </SpottrH>
        </Div>
        <Div
          display="flex"
          width="100%"
          justify="flex-end"
          alignI="center"
          mt="-5px"
          mb="5px">
          <SpottrP fs="9px" color={Colors.primary}>
            350.87 CT
          </SpottrP>
          <SpottrP ml="10px" mr="3px" fs="7px" color={Colors.primary}>
            34%
          </SpottrP>
          {/* <img src={downred} alt="down" width='15px' height='15px' style={{marginTop:"-3px"}}/> */}
        </Div>
        <Divider />
      </CoinItemContainer>
      <CoinItemContainer>
        <Div display="flex" alignI="center">
          <Img width="20px" height="20px" src={usdMoney} alt="USD Money" />
          <SpottrP ml="15px" fs="12px" color={Colors.primary}>
            SUSD
          </SpottrP>
        </Div>
        <Div>
          <SpottrH fs="18px" fw="bold" color={Colors.primary}>
            $286
          </SpottrH>
        </Div>
        <Div
          display="flex"
          width="100%"
          justify="flex-end"
          alignI="center"
          mt="-5px"
          mb="5px">
          <SpottrP fs="9px" color={Colors.primary}>
            350.87 CT
          </SpottrP>
          <SpottrP ml="10px" mr="3px" fs="7px" color={Colors.primary}>
            34%
          </SpottrP>
          <img
            src={downred}
            alt="down"
            width="15px"
            height="15px"
            style={{ marginTop: "-3px" }}
          />
        </Div>
        <Divider />
        <CancelBtn>
          <button>Cancel</button>
        </CancelBtn>
      </CoinItemContainer>
    </Coincontent>
  );
}

export default Coinarea;

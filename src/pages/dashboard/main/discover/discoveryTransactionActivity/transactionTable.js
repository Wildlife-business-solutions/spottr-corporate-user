import React from "react";
import {
  Button,
  Div,
  Img,
  SpottrH,
  SpottrP,
} from "GlobalStyles/spotrrStyles/style";
import Divider from "GlobalStyles/dividerLine";
import downred from "assets/svg/downred.svg";
import usdMoney from "assets/svg/usd.svg";
import { Coincontent, CoinItemContainer } from "../coinsarea/style";
import cliqMoney from "assets/svg/cliq.svg";
import fiatMoney from "assets/svg/fiat.svg";
import Filters from "../../search/Filters";

const TransactionTable = () => {
  return (
    <Div padding="30px 0px 0px 0px">
      <Div justify="space-between" display="flex">
        <div>
          <SpottrP>
            Sort by : <span>Date</span>
          </SpottrP>
        </div>
        <div>
          <SpottrP>Mark all as read</SpottrP>
        </div>
      </Div>
      <Div margin="24px 0px 0px 0px">
        <CoinItemContainer>
          <Div display="flex" alignI="center">
            <Img width="20px" height="20px" src={fiatMoney} alt="Fiat Money" />
            <SpottrP fw="700" color="#000" ff="'Nunito'" ml="15px" fs="15px">
              Adewale Adedamola
            </SpottrP>
          </Div>
          <Div display="flex" flexDirection="column">
            <Div display="flex" justify="flex-end">
              {/* <Img src={upgreen} alt="down" width="15px" height="15px" /> */}
            </Div>
            <SpottrH mt="5px" mb="5px" fw="600" fs="11px" color={"#FF4B3E"}>
              NGN 500
            </SpottrH>
          </Div>
          <Div display="flex" width="100%" justify="flex-end" alignI="center">
            <SpottrP mt="5px" mb="5px" fs="9px" color={"#929AA7"}>
              350.87 CT
            </SpottrP>

            {/* <img src={downred} alt="down" width='15px' height='15px' style={{marginTop:"-3px"}}/> */}
          </Div>
          <Divider />
        </CoinItemContainer>
        <CoinItemContainer>
          <Div display="flex" alignI="center">
            <Img width="20px" height="20px" src={fiatMoney} alt="Fiat Money" />
            <SpottrP fw="700" color="#000" ff="'Nunito'" ml="15px" fs="15px">
              Adewale Adedamola
            </SpottrP>
          </Div>
          <Div display="flex" flexDirection="column">
            <Div display="flex" justify="flex-end">
              {/* <Img src={upgreen} alt="down" width="15px" height="15px" /> */}
            </Div>
            <SpottrH mt="5px" mb="5px" fw="600" fs="11px" color={"#39B54A;"}>
              NGN 500
            </SpottrH>
          </Div>
          <Div display="flex" width="100%" justify="flex-end" alignI="center">
            <SpottrP mt="5px" mb="5px" fs="9px" color={"#929AA7"}>
              350.87 CT
            </SpottrP>

            {/* <img src={downred} alt="down" width='15px' height='15px' style={{marginTop:"-3px"}}/> */}
          </Div>
          <Divider />
        </CoinItemContainer>
        <CoinItemContainer>
          <Div display="flex" alignI="center">
            <Img width="20px" height="20px" src={cliqMoney} alt="Fiat Money" />
            <SpottrP fw="700" color="#000" ff="'Nunito'" ml="15px" fs="15px">
              Adewale Adedamola
            </SpottrP>
          </Div>
          <Div>
            <Div mb="-8px" mt="-10px" display="flex" justify="flex-end">
              {/* <Img src={upgreen} alt="down" width="15px" height="15px" /> */}
            </Div>
            <SpottrH mt="5px" mb="5px" fw="600" fs="11px" color={"#FF4B3E"}>
              NGN 500
            </SpottrH>
          </Div>
          <Div
            display="flex"
            width="100%"
            justify="flex-end"
            alignI="center"
            mt="-5px"
            mb="5px">
            <SpottrP mt="5px" mb="5px" fs="9px" color={"#929AA7"}>
              350.87 CT
            </SpottrP>

            {/* <img src={downred} alt="down" width='15px' height='15px' style={{marginTop:"-3px"}}/> */}
          </Div>
          <Divider />
        </CoinItemContainer>
        <CoinItemContainer>
          <Div display="flex" alignI="center">
            <Img width="20px" height="20px" src={usdMoney} alt="USD Money" />
            <SpottrP fw="700" color="#000" ff="'Nunito'" ml="15px" fs="15px">
              Adewale Adedamola
            </SpottrP>
          </Div>
          <Div>
            <SpottrH mt="5px" mb="5px" fw="600" fs="11px" color={"#39B54A;"}>
              NGN 500
            </SpottrH>
          </Div>
          <Div
            display="flex"
            width="100%"
            justify="flex-end"
            alignI="center"
            mt="-5px"
            mb="5px">
            <SpottrP mt="5px" mb="5px" fs="9px" color={"#929AA7"}>
              350.87 CT
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
          <Div ta="center" width="100%">
            <Button color="#274B89" bc="none" mt="14px">
              View All
            </Button>
          </Div>
        </CoinItemContainer>
      </Div>
    </Div>
  );
};

export default TransactionTable;

import ModalContent from "components/UI/ModalContent";
import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import binance from "assets/binance.png"

function BuycoinsPage() {
  

  return (
    <Div pos="fixed" display="flex" justify="center"
    alignI="center" backgroundColor="rgba(0,0,0,0.4)" width="81%" height="100%" style={{top: 0, right: 0}}>
      <ModalContent
        br="24px"
        wd="350px"
        hg="300px"
        modalHeader=""
        disp="flex"
      >
        <a href="https://www.binance.com" style={{textDecoration: 'none'}}>
          <Div display="flex" alignI="center" padding="0 20px 15px 20px" justify="space-between" width="260px" bbm="2px solid rgba(0,0,0,0.2)">
            <Img src={binance} w="30px" h="30px"/>
            <SpottrP color="#274b89">Buy on binance</SpottrP>
          </Div>
        </a>
        <a href="https://www.binance.com" style={{textDecoration: 'none'}}>
          <Div display="flex" alignI="center" padding="10px 20px 15px 20px" justify="space-between" width="260px" bbm="2px solid rgba(0,0,0,0.2)">
            <Img src={binance} w="30px" h="30px"/>
            <SpottrP color="#274b89">Buy on binance</SpottrP>
          </Div>
        </a>
        <a href="https://www.binance.com" style={{textDecoration: 'none'}}>
          <Div display="flex" alignI="center" padding="10px 20px 15px 20px" justify="space-between" width="260px" bbm="2px solid rgba(0,0,0,0.2)">
            <Img src={binance} w="30px" h="30px"/>
            <SpottrP color="#274b89">Buy on binance</SpottrP>
          </Div>
        </a>
      </ModalContent>
    </Div>
  );
}

export default BuycoinsPage;

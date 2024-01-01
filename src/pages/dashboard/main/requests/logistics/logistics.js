import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import truck from "assets/svg/truck.svg";

const Logistics = () => {
  return (
    <Div
      width="100%"
      height="auto"
      padding="15px 20px 15px 20px"
      backgroundColor="#ECF7FF"
      margin="10px 0">
      <Div display="flex" alignI="center" justify="space-between">
        <Div display="flex" alignI="center">
          <Img src={truck} />
          <Div padding="0 0 0 15px">
            <SpottrP fs="17px" fw="bold" color="#061E48">
              Logistics
            </SpottrP>
            <SpottrP tr="uppercase" fs="8px" fw="bold">
              Jumia NG
            </SpottrP>
          </Div>
        </Div>
        <SpottrP fs="26px" fw="bold" color="#274B89">
          N4,500
        </SpottrP>
      </Div>
      <Div bbm="1px solid #E7E7E7" padding="5px 0"></Div>
      <Div
        display="flex"
        justify="space-between"
        fs="8px"
        padding="8px 0"
        color="#929AA7">
        <Div display="flex">
          <SpottrP fs="10px">45 km from Pickup</SpottrP>
          <SpottrP fs="10px" p="0 0 0 10px">
            50 min estimation time
          </SpottrP>
        </Div>
        <SpottrP fs={"10px"} fw="bold" color="#274B89">
          N500km
        </SpottrP>
      </Div>
    </Div>
  );
};

export default Logistics;

import React from "react";
import { Div, Img } from "GlobalStyles/spotrrStyles/style";
import Basic from "assets/svg/basic.svg";
import Corporate from "assets/svg/corp.svg";
import Pro from "assets/svg/pro.svg";

const Opportunities = () => {
  return (
    <Div
      min_width="500px"
      width="100%"
      alignI="baseline"
      backgroundColor="#fff"
      br="8px"
      padding="15px 25px"
      display="flex"
      justify="space-between"
      wrap="wrap">
      <Div>
        <Div>
          <Img src={Basic} alt="basic" />
        </Div>
        <Div>
          <Img src={Pro} alt="pro" />
        </Div>
      </Div>

      <Div margin="0px 0px 0px 25px">
        <Img src={Corporate} alt="corporate" />
      </Div>
    </Div>
  );
};

export default Opportunities;

import React from "react";
import { Div, Img } from "GlobalStyles/spotrrStyles/style";
import { SpottrP } from "GlobalStyles/spotrrStyles/style";
import Ellipse from "assets/Ellipse.png";
import ReferTab from "./referTab";
import TaskProduct from "./taskProduct";

const DiscoverRefer = () => {
  return (
    <div>
      <Div justify="space-between" display="flex" alignI="center">
        <div>
          <SpottrP>Task</SpottrP>
        </div>
        <Div fs="34px">=</Div>
      </Div>
      <Div margin="24px 0px 16px 0px" display="flex">
        <Div width="25%" margin="0px 6px">
          <Img m="0px 6px" w="90%" src={Ellipse} />
          <SpottrP fs="10px" fa="center" color="#061E48" fw="700">
            John Tommy
          </SpottrP>
        </Div>
        <Div width="25%" margin="0px 6px">
          <Img m="0px 6px" w="90%" src={Ellipse} />
          <SpottrP fs="10px" fa="center" color="#061E48" fw="700">
            John Tommy
          </SpottrP>
        </Div>
        <Div width="25%" margin="0px 6px">
          <Img m="0px 6px" w="90%" src={Ellipse} />
          <SpottrP fs="10px" fa="center" color="#061E48" fw="700">
            John Tommy
          </SpottrP>
        </Div>
        <Div width="25%" margin="0px 8px" display="flex" alignI="flex-end">
          <SpottrP fs="10px" fa="center" color="#061E48" fw="700">
            View All
          </SpottrP>
        </Div>
      </Div>
      <ReferTab />
      <TaskProduct />
    </div>
  );
};

export default DiscoverRefer;

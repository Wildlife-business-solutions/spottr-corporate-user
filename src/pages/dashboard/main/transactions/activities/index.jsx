import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import { ItemContainerTransaction } from "./style";
import circleWithArrowDown from "assets/svg/cusIcon.svg";
import Divider from "GlobalStyles/dividerLine";
import Colors from "GlobalStyles/utils/appColors";
function TransactionActivities() {
  return (
    <div>
      <ItemContainerTransaction>
        <Img src={circleWithArrowDown} alt="Transaction" />
        <Div width="120px">
          <SpottrP>You deposited</SpottrP>
          <SpottrP fs="11px" color={Colors.ligterGrey} mt="5px">Cash</SpottrP>
        </Div>
        <Div width="150px">
          <SpottrP>@adedamola456</SpottrP>
          <SpottrP fs="11px" color={Colors.ligterGrey} mt="5px">Username:</SpottrP>
        </Div>
        <Div width="170px">
          <SpottrP>tdg87wdgh7udh32bd...</SpottrP>
          <SpottrP fs="11px" color={Colors.ligterGrey} mt="5px">Trsanction ID:</SpottrP>
        </Div>
        <Div width="100px" height="100%">
          <SpottrP color={Colors.green}>NGN 500</SpottrP>
          <SpottrP fs="11px" color={Colors.ligterGrey} mt="5px">12/03/20</SpottrP>
        </Div>
      </ItemContainerTransaction>
      <Divider/>
    </div>
  );
}

export default TransactionActivities;

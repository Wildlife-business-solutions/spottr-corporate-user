import React from "react";
import ProductItem from "components/dashboard/main/productMenuitem";
import { DASHBOARDHOME } from "../../../../utilities/static/route-const";
import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import backArrow from "assets/svg/backArrow.svg";

function SavedPage() {
  return (
    <Div margin="30px 0">
      <SpottrLink to={DASHBOARDHOME}>
        <Div width="100px" display={"flex"}>
          <img src={backArrow} alt="icon" />
          <p style={{ fontSize: "15px", color: "#274889", marginLeft: "15px" }}>
            Go back
          </p>
        </Div>
      </SpottrLink>
      <Div
        display="flex"
        wrap="wrap"
        width="1100px"
        justify="space-between"
        alignI="center"
        backgroundColor="rgba(255,255,255,0.5)"
        padding="20px 30px"
        margin="50px 0">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Div>
    </Div>
  );
}

export default SavedPage;

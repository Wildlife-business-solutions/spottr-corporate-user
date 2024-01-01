import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React, { useState } from "react";

// import closeBtn from "assets/svg/closeBtn.svg";
import Colors from "GlobalStyles/utils/appColors";
import TrendingProducts from "../products";
import Ads from "../ads";

function Trending() {
  const [showAd, setShowAd] = useState(true);
  return (
    <Div>
      <SpottrP color={Colors.primary} fw="bold" p="0 0 15px">
        Trending
      </SpottrP>
      <TrendingProducts />
      {showAd && <Ads action={setShowAd} />}
    </Div>
  );
}

export default Trending;

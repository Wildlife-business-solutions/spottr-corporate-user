import React from "react";
import { WalletBoxDiv, PriceArea, ViewArea, Eye } from "./style";
import dropdown from "assets/svg/down.svg";
import eye from "assets/svg/blueEye.svg";

export default function WalletBox({
  icon,
  walletName,
  walletAmount,
  currency,
}) {
  return (
    <WalletBoxDiv>
      <PriceArea>
        <div style={{ display: "flex" }}>
          <img src={icon} alt="fiatIcon" />
          <p>{walletName}</p>
        </div>
        <h1>₦{walletAmount?.toFixed(2)}</h1>
      </PriceArea>
      <ViewArea>
        <div>
          <p>{currency}</p>
          <img src={dropdown} alt="drop" />
        </div>
        <Eye src={eye} alt="show" />
      </ViewArea>
    </WalletBoxDiv>
  );
}

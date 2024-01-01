import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import loss from "assets/mem/lossd.svg";
import gain from "assets/mem/gainu.svg";

const PaymentType = ({
  walletId,
  coin,
  type,
  amount,
  rate,
  percent,
  curr,
  action,
}) => {
  // console.log(curr)
  return (
    <Div
      onClick={action}
      style={{ cursor: "pointer" }}
      display="flex"
      justify="space-between"
      alignI="center"
      bbm="1px solid #E7E7E7"
      padding="20px 0 15px 25px">
      <Div display="flex" justify="space-between" alignI="center">
        <img src={coin} alt="coin type" />
        <p style={{ paddingLeft: "10px", color: "#274B89", fontSize: "12px" }}>
          {type}
        </p>
      </Div>
      <Div display="flex" flexDirection="column" alignI="flex-end">
        <h3 style={{ color: "#274B89" }}>
          {curr === "usd" ? "$" : curr === "ngn" ? "N" : "N"}
          {amount}
        </h3>
        <Div display="flex" alignI="center">
          <small style={{ fontSize: "12px" }}>{0} CT</small>
          <Div display="flex" alignI="center">
            <small style={{ fontSize: "12px", padding: "0 5px" }}>
              {percent}%
            </small>
            <img src={percent < 10 ? loss : gain} alt="loss or gain" />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default PaymentType;

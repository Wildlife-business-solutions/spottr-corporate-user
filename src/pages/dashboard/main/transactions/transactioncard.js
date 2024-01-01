import React from "react";
import Loader from "react-loading-skeleton";
import Singlecard from "./singlecard";
import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { WALLET } from "../../../../utilities/static/route-const";
import fiat from "assets/svg/fiat.svg";
import cliq from "assets/svg/cliq.svg";
import susd from "assets/svg/usd.svg";

const Transactioncard = ({ header, walletdata, isLoading }) => {
  console.log(walletdata);
  return (
    <>
      <Div
        width="700px"
        border="1px solid #E1EFFB"
        br="15px"
        padding="15px 25px"
        fs="13px"
        fw="bold"
        color="#274B89"
        margin=" 20px 0 0 0">
        <Div display="flex" justify="space-between">
          <p>{header}</p>
          <SpottrLink
            to={WALLET}
            style={{ fontWeight: "100", color: "#274B89" }}>
            See all
          </SpottrLink>
        </Div>
        <Div display="flex" justify="space-between" padding="10px 0">
          {isLoading ? (
            <>
              <Loader count={1} width={200} height={150} />
              <Loader count={1} width={200} height={150} />
              <Loader count={1} width={200} height={150} />
            </>
          ) : (
            <>
              {walletdata.map((trxn, index) => (
                <Singlecard
                  key={index}
                  type={trxn.name}
                  isLoading={isLoading}
                  image={
                    trxn.name === "SUSD"
                      ? susd
                      : trxn.name === "Fiat Wallet"
                      ? fiat
                      : trxn.name === "Cliq Token"
                      ? cliq
                      : null
                  }
                  amount={trxn.balance}
                  payment={trxn.payment}
                  activities={trxn.transactions}
                  bg={trxn.color}
                />
              ))}
            </>
          )}
        </Div>
      </Div>
    </>
  );
};

export default Transactioncard;

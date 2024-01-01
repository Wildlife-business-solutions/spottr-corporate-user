import React from "react";
import Card from "./card";
import { useAdminModalContext } from "context/AdminModalContext";
import Sendcoins from "./sendcoins";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import withdraw from "assets/svg/withdraw.svg";
import depositIcon from "assets/deposit.png";
import send from "assets/svg/send.svg";
import buy from "assets/svg/buy.svg";
import fiat from "assets/svg/fiat.svg";
import cliq from "assets/svg/cliq.svg";
import susd from "assets/svg/usd.svg";
import Withdrawcoins from "./withdrawcoins";
import DynamicModal from "components/modals/dynamicModal";
import TransactionDetailModal from "./Modal Content/transactionDetailModal";

const Walletcards = ({
  showUserTransaction,
  type,
  hasBrd,
  amount,
  bg,
  handleWithdrawModal,
  showsendcoins,
  handleOpenTransactionDetail,

  handleCloseModal,
  withdrawcoins,
  handleSendCoinsModal,
  dynamicText,
  transactionDetailModal,
  walletData,
  activity,
  hasActivity,
}) => {
  const btnalign = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const { showmodal } = useAdminModalContext();

  return (
    <>
      {showsendcoins && (
        <Sendcoins show={showmodal && showsendcoins} close={handleCloseModal} />
      )}

      {withdrawcoins && (
        <Withdrawcoins
          paymenttypes={walletData}
          show={showmodal && withdrawcoins}
          close={handleCloseModal}
        />
      )}
      {transactionDetailModal && (
        <DynamicModal
          width={"600px"}
          show={showmodal && transactionDetailModal}
          close={handleCloseModal}>
          <TransactionDetailModal dynamicText={dynamicText} />
        </DynamicModal>
      )}

      <Div
        border={hasBrd ? `0.5px solid ${bg}` : "none"}
        boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
        width={hasActivity ? "50%" : "100%"}
        br="8px"
        padding={hasActivity ? "15px" : "0px"}>
        <Card
          type={type}
          image={
            type === "SUSD"
              ? susd
              : type === "Cliq Token"
              ? cliq
              : type === "Fiat Wallet"
              ? fiat
              : ""
          }
          amount={amount}
          bg={bg}
          transactionHistory={showUserTransaction}
        />
        {type === "Cliq Token" && hasActivity ? (
          <Div display="flex" gap="20px" margin="15px 0 0 0">
            <LoginButton
              wbtn="50%"
              hg="50px"
              col="#000"
              bg="#ECF7FF"
              style={btnalign}
              onClick={handleSendCoinsModal}>
              <img src={send} alt="send coins" />
              <small style={{ fontWeight: "100", paddingLeft: "15px" }}>
                Send Coins
              </small>
            </LoginButton>
            <LoginButton
              wbtn="50%"
              hg="50px"
              col="#000"
              bg="#ECF7FF"
              style={btnalign}>
              <img src={buy} alt="buy coins" />
              <small style={{ fontWeight: "100", paddingLeft: "15px" }}>
                Buy Coins
              </small>
            </LoginButton>
          </Div>
        ) : null}
        {type === "Fiat Wallet" && hasActivity && (
          <Div
            margin="15px 0 0 0"
            display="flex"
            height="100%"
            gap="10px"
            flexDirection="column"
            width="35%">
            <LoginButton
              onClick={handleWithdrawModal}
              style={btnalign}
              bg="#ECF7FF"
              wbtn="100%"
              col="100%"
              hg="50px"
              backgroundColor="#ECF7FF">
              <img src={withdraw} alt="withdraw money" />
              <small style={{ fontWeight: "100", paddingLeft: "15px" }}>
                Withdraw
              </small>
            </LoginButton>
          </Div>
        )}
        {hasActivity ? (
          <Div
            style={{ maxHeight: "230px", overflowY: "scroll" }}
            margin="15px 0 0 0">
            {activity?.map((act, index) => (
              <Div
                key={index}
                padding="10px 20px"
                margin="10px 0 0 0"
                display="flex"
                cursor={"pointer"}
                justify="space-between"
                alignI="center"
                onClick={() => handleOpenTransactionDetail(act.type)}
                bbm="1px solid #E7E7E7">
                <Div display="flex" justify="space-between" alignI="flex-start">
                  <Div height="25px" width="25px">
                    <img
                      src={depositIcon}
                      alt="deposit coin"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </Div>
                  <Div padding="0 0 0 15px">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      You {act?.activity}
                    </p>
                    <small
                      style={{ color: "#929AA7", textTransform: "capitalize" }}>
                      {act?.type === "debit" ? "withdraw" : "deposited"}
                    </small>
                  </Div>
                </Div>
                <Div ta="right">
                  <p
                    style={{
                      color: act?.type === "debit" ? "#FF4B3E" : "#39B54A",
                      fontSize: "13px",
                    }}>
                    {type === "Fiat Wallet" ? "N" : ""}
                    {act?.amount}
                  </p>
                  <small
                    style={{
                      color: "#929AA7",
                      textTransform: "capitalize",
                      fontSize: "10px",
                    }}>
                    {/* {act?.createdAt.split("T")[0]} */}
                    {act?.createdAt}
                  </small>
                </Div>
              </Div>
            ))}
          </Div>
        ) : null}

        {hasActivity ? (
          <Div
            ta="center"
            padding="25px 0 0 0"
            color="#274b89"
            fs="12px"
            fw="bold">
            Open full log
          </Div>
        ) : (
          ""
        )}
      </Div>
    </>
  );
};

export default Walletcards;

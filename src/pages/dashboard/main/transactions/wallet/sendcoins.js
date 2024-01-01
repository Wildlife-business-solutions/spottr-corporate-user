import React, { useState } from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import Filters from "../../search/Filters";
import { Input } from "../style";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import cliq from "assets/svg/cliq.svg";
import card from "assets/svg/card.svg";
import wallet from "assets/svg/wallet.svg";
import bitcoin from "assets/svg/btc.svg";

const Sendcoins = ({ show, close }) => {
  const [amountToPay, setAmount] = useState(0);
  const [showContentModal, setshowContentModal] = useState("sendCoins");

  React.useEffect(() => {
    setshowContentModal("sendCoins");
  }, [show]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const showUserDetails = () => {
    setshowContentModal("userDetails");
  };

  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        isClosing={true}
        close={close}
        br="24px"
        p="50px"
        wd="100%"
        hg="400px"
        mwd="500px"
        modalHeader="">
        {showContentModal === "sendCoins" && (
          <>
            <Div padding="0 30px">
              <Div color="#274b89" fs="17px" ta="left">
                <small>Send cliq tokens</small>
              </Div>
              <Div color="#274b89" fs="20px" ta="left" padding="20px 0">
                <p>Input Amount of coins</p>
              </Div>
              <Div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    border: "none",
                    textalign: "right",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderBottom: "2px solid grey",
                  }}
                  onChange={handleAmountChange}
                  value={amountToPay}
                />
              </Div>
              <Div padding="15px 0 0 0" margin="0 -10px -10px 0">
                <small style={{ color: "#c4c4c4", fontSize: "12px" }}>
                  Fee:
                </small>
                <small style={{ color: "#274B89", fontSize: "12px" }}>
                  {" "}
                  N0
                </small>
              </Div>
              <Div padding="5px 0 25px 0">
                <small style={{ color: "#c4c4c4", fontSize: "12px" }}>
                  You are sending:
                </small>
                <small style={{ color: "#274B89", fontSize: "12px" }}>
                  {" "}
                  {amountToPay} Tokens
                </small>
              </Div>
              <LoginButton bg="#274B89" wbtn="100%" onClick={showUserDetails}>
                Continue
              </LoginButton>
            </Div>
          </>
        )}

        {showContentModal === "userDetails" && (
          <>
            <Div padding="0 30px">
              <Div
                display="flex"
                justify="space-between"
                color="#274b89"
                padding="25px 0 25px 0">
                <small>User details</small>
                {/* <small style={{cursor: 'pointer'}} onClick={}>Back</small> */}
              </Div>
              <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4">
                <input placeholder="User Name" />
              </Input>
              {/* <Filters
                wd="100%"
                title=""
                hg="55px"
                col="transparent"
                pl="20px"
                bg="#ECF7FF"
                swd="100%"
                options={["Select Bank", "GTBank", "First Bank"]}
              /> */}
              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="20px 0 0 0"
                onClick={close}>
                Continue
              </LoginButton>
            </Div>
          </>
        )}

        {showContentModal === "bankingInfo" && (
          <>
            <Div padding="0 40px">
              <Div
                display="flex"
                justify="space-between"
                color="#274b89"
                padding="25px 0 25px 0">
                <small>Bank Transfer</small>
                {/* <small style={{cursor: 'pointer'}} onClick={}>Back</small> */}
              </Div>
              <Input bg="#F8F8F8" dis="none" pcol="#C4C4C4">
                <input placeholder="Account Number" />
              </Input>
              <Filters
                wd="100%"
                title=""
                hg="55px"
                col="transparent"
                pl="20px"
                bg="#ECF7FF"
                swd="100%"
                options={["Select Bank", "GTBank", "First Bank"]}
              />
              <LoginButton bg="#274B89" wbtn="100%" mg="20px 0 0 0">
                Continue
              </LoginButton>
            </Div>
          </>
        )}

        {showContentModal === "trnxStatus" && (
          <>
            <Div padding="0 40px">
              <Div
                color="#274b89"
                fs="20px"
                ta="center"
                padding="40px 0 20px 0">
                <p>Transaction Successful!</p>
                <Div padding="20px 0" color="rgba(59, 59, 59, 0.7)">
                  Florem impsum donor sit ament a Florem impsum donor sit ament
                  a
                </Div>
              </Div>
              <LoginButton wbtn="100%" mg="50px 0 0 0">
                Perform Another Transaction
              </LoginButton>
            </Div>
          </>
        )}
      </ModalContent>
    </AdminBackdrop>
  );
};

export default Sendcoins;

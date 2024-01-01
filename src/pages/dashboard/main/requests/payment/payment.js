import React, { useState } from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import Filters from "../../search/Filters";
import { Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";
import wallet from "assets/svg/wallet.svg";
import card from "assets/svg/card.svg";
import moneybag from "assets/svg/moneybag.svg";
import savedeal from "assets/svg/save.svg";
import fiat from "assets/svg/fiat.svg";
import susd from "assets/svg/usd.svg";
import cliq from "assets/svg/small-token.svg";
import { LoginButton } from "pages/signin/Login/style";
import PinInput from "../../../../../components/UI/PinInput";
import BrandColors from "../../../../../GlobalStyles/utils/colors";

const Payment = ({ show, close, handleUserRating, setRating }) => {
  const [walletTypes, setWalletTypes] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [paymentTypes, setPaymentTypes] = useState(true);
  const [showTrxnpin, setTrxnPin] = useState(false);

  const showWalletTypes = () => {
    setWalletTypes(true);
    setPaymentTypes(false);
    setShowBalance(false);
  };

  const handleBalance = () => {
    setShowBalance(true);
    setWalletTypes(false);
    setPaymentTypes(false);
    setTrxnPin(false);
  };

  const handleTrxnPin = () => {
    setShowBalance(true);
    setWalletTypes(false);
    setPaymentTypes(false);
    setTrxnPin(true);
  };

  const handleCancel = () => {
    setWalletTypes(false);
    setPaymentTypes(true);
  };

  return (
    <AdminBackdrop
      dis={setRating ? "none" : "flex"}
      showAdminModal={show}
      bg={
        showBalance || showTrxnpin
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(0, 0, 0, 0.4)"
      }>
      <ModalContent
        close={close}
        br="24px"
        // wd="377px"
        hg="470px"
        mwd=""
        modalHeader=""
        p="20px  45px"
        disp={showBalance || showTrxnpin ? "none" : "flex"}>
        <Div display="flex" justify="space-between" padding="0 0 45px 0">
          <SpottrP style={{ fontSize: "14px", color: "#274B89" }}>
            Select payment method
          </SpottrP>
          <Filters
            options={["NGN", "USD"]}
            col="transparent"
            // show="none"
            wd="60px"
            // lt="515px"
            // action={(e) => setCurrency(e.target.value)}
          />
        </Div>
        {paymentTypes && (
          <Div>
            <Div
              onClick={showWalletTypes}
              display="flex"
              justify="space-between"
              gap="150px"
              alignI="center"
              color="#274b89"
              bbm="1px solid #E7E7E7"
              cursor={true}>
              <Div display="flex" padding="15px 0 25px 0">
                <Img src={wallet} />
                <SpottrP p="0 0 0 10px" fw="bold">
                  Pay from Wallet
                </SpottrP>
              </Div>
              <SpottrP>N0</SpottrP>
            </Div>
            <Div
              display="flex"
              justify="space-between"
              alignI="center"
              color="#274b89"
              bbm="1px solid #E7E7E7"
              cursor={true}>
              <Div display="flex" padding="15px 0 25px 0">
                <Img src={card} />
                <SpottrP p="0 0 0 10px" fw="bold">
                  Pay with card
                </SpottrP>
              </Div>
              <SpottrP>N150 Fee</SpottrP>
            </Div>
            <Div
              display="flex"
              justify="space-between"
              alignI="center"
              color="#274b89"
              bbm="1px solid #E7E7E7"
              cursor={true}>
              <Div display="flex" padding="15px 0 25px 0">
                <Img src={moneybag} />
                <SpottrP p="0 0 0 10px" fw="bold">
                  Pay on Credit
                </SpottrP>
              </Div>
              <SpottrP>10% interest</SpottrP>
            </Div>
            <Div
              display="flex"
              color="#274b89"
              bbm="1px solid #E7E7E7"
              cursor={true}
              padding="15px 0 25px 0">
              <Img src={savedeal} />
              <SpottrP p="0 0 0 10px" fw="bold">
                Save this Deal
              </SpottrP>
            </Div>
            <SpottrP
              p="25px 0"
              fw="bold"
              color="#274b89"
              onClick={close}
              cursor={true}>
              Cancel
            </SpottrP>
          </Div>
        )}

        {walletTypes && (
          <Div>
            <Div
              onClick={handleBalance}
              display="flex"
              justify="space-between"
              alignI="center"
              color="#274b89"
              gap="120px"
              bbm="1px solid #E7E7E7"
              cursor={true}>
              <Div display="flex" padding="15px 0 25px 0">
                <Img src={fiat} />
                <SpottrP p="0 0 0 10px" fw="bold">
                  Fiat Wallet
                </SpottrP>
              </Div>
              <Div>
                <SpottrP fw="bold">N0</SpottrP>
                <Div
                  display="flex"
                  color="#5E7398"
                  fs="10px"
                  padding="8px 0 0 0">
                  <SpottrP>10 CT</SpottrP>
                  <SpottrP p="0 0 0 10px">8.46%</SpottrP>
                </Div>
              </Div>
            </Div>
            <Div
              display="flex"
              justify="space-between"
              alignI="center"
              color="#274b89"
              bbm="1px solid #E7E7E7"
              cursor={true}>
              <Div display="flex" padding="15px 0 25px 0">
                <Img src={cliq} w="23px" h="23px" />
                <SpottrP p="0 0 0 10px" fw="bold">
                  Cliq Token
                </SpottrP>
              </Div>
              <Div>
                <SpottrP fw="bold">N0</SpottrP>
                <Div
                  display="flex"
                  color="#5E7398"
                  fs="10px"
                  padding="8px 0 0 0">
                  <SpottrP>10 CT</SpottrP>
                  <SpottrP p="0 0 0 10px">0.5%</SpottrP>
                </Div>
              </Div>
            </Div>
            <Div
              display="flex"
              justify="space-between"
              alignI="center"
              color="#274b89"
              bbm="1px solid #E7E7E7"
              cursor={true}>
              <Div display="flex" padding="15px 0 25px 0">
                <Img src={susd} />
                <SpottrP p="0 0 0 10px" fw="bold">
                  SUSD
                </SpottrP>
              </Div>
              <Div>
                <SpottrP fw="bold">N0</SpottrP>
                <Div
                  display="flex"
                  color="#5E7398"
                  fs="10px"
                  padding="8px 0 0 0">
                  <SpottrP>6 CT</SpottrP>
                  <SpottrP p="0 0 0 10px">10.67%</SpottrP>
                </Div>
              </Div>
            </Div>
            <SpottrP
              p="25px 0"
              fw="bold"
              color="#274b89"
              onClick={handleCancel}
              cursor={true}>
              Cancel
            </SpottrP>
          </Div>
        )}
      </ModalContent>
      {showBalance && (
        <Div display="flex">
          <Div
            color="#fff"
            display="flex"
            flexDirection="column"
            justify="center"
            padding="0 35px 0 35px"
            backgroundColor="#274B89"
            ta="left"
            height="100px"
            width="285px"
            br="10px">
            <SpottrP fs="12px">Current Balance:</SpottrP>
            <Div alignI="center" justify="space-between" display="flex">
              <SpottrP fw="bold" fs="24px">
                N3,874,560
              </SpottrP>
              <SpottrP fw="bold">e</SpottrP>
            </Div>
          </Div>
          {!showTrxnpin && (
            <Div
              padding="55px 40px"
              height="409px"
              width="375px"
              br="15px"
              backgroundColor="#fff"
              margin="0 0 0 20px"
              boxShadow="0px 0px 10px rgba(39, 75, 137, 0.25)">
              <Div
                color="#274b89"
                display="flex"
                justify="space-between"
                alignI="center">
                <SpottrP fs="13px">{"Send Cliq Token > Input amount"}</SpottrP>
                <SpottrP
                  fw="bold"
                  fs="13px"
                  cursor={true}
                  onClick={showWalletTypes}>
                  Back
                </SpottrP>
              </Div>
              <Div ta="center" padding="55px 0 0 0">
                <SpottrP color="rgba(59, 59, 59, 0.7)" fs="12px">
                  Total Cost
                </SpottrP>
                <SpottrP color="#274b89" fs="36px" fw="bold">
                  N4,800,000
                </SpottrP>
              </Div>
              <Div padding="40px 0 0 0" fs="12px">
                <Div display="flex" justify="center">
                  <SpottrP>Fee:</SpottrP>
                  <SpottrP p="0 0 0 3px" fw="bold" color="#274b89">
                    N800
                  </SpottrP>
                </Div>
                <Div display="flex" justify="center">
                  <SpottrP>We will deduct:</SpottrP>
                  <SpottrP p="0 0 0 3px" fw="bold" color="#274b89">
                    N400
                  </SpottrP>
                </Div>
                <LoginButton
                  wbtn="100%"
                  bg={BrandColors.brandBlue}
                  mg="35px 0 0 0"
                  onClick={handleTrxnPin}>
                  Continue
                </LoginButton>
              </Div>
            </Div>
          )}

          {showTrxnpin && (
            <Div
              padding="55px 40px"
              height="409px"
              width="400px"
              br="15px"
              backgroundColor="#fff"
              margin="0 0 0 20px"
              boxShadow="0px 0px 10px rgba(39, 75, 137, 0.25)">
              <Div
                color="#274b89"
                display="flex"
                justify="space-between"
                alignI="center">
                <SpottrP color="#274b89" fs="13px">
                  Transaction confirmation
                </SpottrP>
                <SpottrP
                  fw="bold"
                  fs="13px"
                  cursor={true}
                  onClick={() => setTrxnPin(false)}>
                  Back
                </SpottrP>
              </Div>
              <SpottrP color="#274b89" fs="18px" fw="bold" p="25px 20px 0 20px">
                Transaction PIN
              </SpottrP>
              <PinInput />
              <SpottrP
                tAlign="center"
                color="rgba(59, 59, 59, 0.7)"
                fs="12px"
                p="15px 45px">
                Kindly input the transaction PIN you registered while setting up
                your profile
              </SpottrP>
              <LoginButton
                wbtn="100%"
                bg={BrandColors.brandBlue}
                mg="20px 0 0 0"
                onClick={handleUserRating}>
                Continue
              </LoginButton>
            </Div>
          )}
        </Div>
      )}
    </AdminBackdrop>
  );
};

export default Payment;

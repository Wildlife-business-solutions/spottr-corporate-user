import React, { useState } from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Div } from "GlobalStyles/spotrrStyles/style";
import Filters from "../../search/Filters";
import { LoginButton } from "pages/signin/Login/style";
import PaymentType from "./paymenttype";
import card from "assets/svg/card.svg";
import bitcoin from "assets/svg/btc.svg";
import bank from "assets/svg/bank.svg";
import copy from "assets/svg/copy.svg";
import eth from "assets/svg/eth.svg";
import ltc from "assets/svg/ltc.svg";
import progress from "assets/svg/progress.svg";
import report from "assets/svg/report.svg";
import back from "assets/svg/back.svg";
import share from "assets/svg/share.svg";
import providus from "assets/svg/providus.svg";

const Fundwallet = ({ show, close, paymenttypes }) => {
  const [currency, setCurrency] = useState("NGN");
  const [showContentModal, setShowContentModal] = useState("inputAmount");
  const [amountToPay, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const renderwallettofund = () => {
    setShowContentModal("walletToFund");
  };

  const renderpaymentmethod = () => {
    setShowContentModal("paymentMethod");
  };

  const renderpaycard = () => {
    setShowContentModal("payWithCard");
  };

  const renderpaybank = () => {
    setShowContentModal("payWithBank");
  };

  const renderpaycrypto = () => {
    setShowContentModal("payWithCrypto");
  };

  const rendertrxnstatus = () => {
    setShowContentModal("trxnStatus");
  };

  const btnalign = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        isClosing={true}
        close={close}
        br="24px"
        wd="600px"
        hg="auto"
        p="50px"
        modalHeader="">
        {showContentModal === "inputAmount" && (
          <>
            <Div padding="0 30px">
              <Div color="#274b89" fs="20px" ta="left">
                <small>Input Amount</small>
              </Div>

              <Div
                color="hsla(0, 0%, 23%, 0.7)"
                fs="15px"
                ta="left"
                padding="15px 0">
                <p>How much would you like to fund your wallet?</p>
              </Div>
              <Div display="flex" justify="center" padding="20px 0">
                <input
                  type="text"
                  style={{
                    width: "80px",
                    border: "none",
                    textalign: "right",
                    fontSize: "30px",
                    borderBottom: "2px solid grey",
                  }}
                  onChange={handleAmountChange}
                  autoFocus
                  value={amountToPay}
                />
                <Filters
                  options={["NGN", "USD"]}
                  col="transparent"
                  // show="none"
                  wd="60px"
                  // lt="388px"
                  // setCurrency={setCurrency}
                />
              </Div>
              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="50px 0 0 0"
                onClick={renderwallettofund}>
                Continue
              </LoginButton>
            </Div>
          </>
        )}
        {showContentModal === "walletToFund" && (
          <>
            <Div padding="0 40px">
              <Div display="flex" justify="space-between" padding="0 0 45px 0">
                <p style={{ fontSize: "14px", color: "#274B89" }}>
                  Select wallet to fund
                </p>
                <Filters
                  options={["NGN", "USD"]}
                  col="transparent"
                  // show="none"
                  wd="60px"
                  // lt="515px"
                  action={(e) => setCurrency(e.target.value)}
                />
              </Div>
              {paymenttypes.map((payment, i) => (
                <PaymentType
                  key={i}
                  walletId={payment.id}
                  coin={payment.coin}
                  type={payment.name}
                  amount={payment.balance}
                  rate={payment.rate}
                  percent={payment.percent}
                  curr={currency}
                  action={renderpaymentmethod}
                  // renderPayment={() => renderPaymentTransaction(payment.id)}
                />
              ))}
            </Div>
          </>
        )}
        {showContentModal === "paymentMethod" && (
          <>
            <Div
              padding="0 40px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              style={{ cursor: "pointer" }}>
              <Div>
                <Div ta="left" padding="25px 0 25px 0">
                  <small>Select withdrawal destination</small>
                </Div>
                <Div
                  onClick={renderpaycard}
                  color="#274b89"
                  display="flex"
                  justify="space-between"
                  padding="20px"
                  bbm="1px solid #E7E7E7">
                  <Div display="flex" justify="space-between" alignI="center">
                    <img src={card} alt="pay with card" />
                    <Div padding="0 0 0 15px" fw="bold">
                      Pay with card
                    </Div>
                  </Div>
                  <p>N150 Fee</p>
                </Div>
                <Div
                  onClick={renderpaycrypto}
                  color="#274b89"
                  display="flex"
                  justify="space-between"
                  padding="20px"
                  bbm="1px solid #E7E7E7">
                  <Div display="flex" justify="space-between" alignI="center">
                    <img src={bitcoin} alt="pay with bitcoin" />
                    <Div padding="0 0 0 12px" fw="bold">
                      Pay with crypto
                    </Div>
                  </Div>
                  <p>1.2% charge</p>
                </Div>
                <Div
                  onClick={renderpaybank}
                  color="#274b89"
                  display="flex"
                  justify="space-between"
                  padding="20px"
                  bbm="1px solid #E7E7E7">
                  <Div display="flex" justify="space-between" alignI="center">
                    <img src={bank} alt="pay with bank" />
                    <Div padding="0 0 0 15px" fw="bold">
                      Bank Transfer
                    </Div>
                  </Div>
                  <p>N52 charges</p>
                </Div>
              </Div>
              <Div
                padding="50px 0 0 0"
                color="#274b89"
                fw="bold"
                style={{ cursor: "pointer" }}>
                Cancel
              </Div>
            </Div>
          </>
        )}

        {showContentModal === "payWithCard" && (
          <>
            <Div
              padding="0 40px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              style={{ cursor: "pointer" }}>
              <Div
                color="#274b89"
                fs="18px"
                display="flex"
                justify="space-between"
                padding="0 0 40px 0">
                <small>Pay with Card</small>
                <small
                  style={{ fontWeight: "bold" }}
                  onClick={renderpaymentmethod}>
                  Back
                </small>
              </Div>

              <Div color="#274b89" fs="20px" ta="left" padding="20px 0">
                <p>Input Amount</p>
              </Div>
              <Div display="flex" justify="center" padding="30px 0">
                <input
                  type="text"
                  style={{
                    width: "80px",
                    border: "none",
                    textalign: "right",
                    fontSize: "30px",
                    fontWeight: "bold",
                    borderBottom: "2px solid grey",
                  }}
                  onChange={handleAmountChange}
                  value={amountToPay}
                />
                <Filters
                  options={["USD", "NGN"]}
                  col="transparent"
                  show="none"
                  wd="60px"
                  lt="515px"
                  action={(e) => setCurrency(e.target.value)}
                />
              </Div>
              <Div padding="15px 0 0 0" margin="0 -10px -10px 0">
                <small style={{ color: "#c4c4c4", fontSize: "12px" }}>
                  Fee:
                </small>
                <small style={{ color: "#274B89", fontSize: "12px" }}>
                  {" "}
                  N150
                </small>
              </Div>
              <Div padding="5px 0 25px 0">
                <small style={{ color: "#c4c4c4", fontSize: "12px" }}>
                  You will get:
                </small>
                <small style={{ color: "#274B89", fontSize: "12px" }}>
                  {" "}
                  {Number(amountToPay) - 150} Tokens
                </small>
              </Div>
              <LoginButton bg="#274B89" wbtn="100%" onClick={rendertrxnstatus}>
                Continue
              </LoginButton>
            </Div>
          </>
        )}

        {showContentModal === "payWithBank" && (
          <>
            <Div
              padding="45px 40px 0 40px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              style={{ cursor: "pointer" }}>
              <Div
                color="#274b89"
                fs="18px"
                display="flex"
                justify="space-between">
                <small>Bank Transfer</small>
                <small
                  style={{ fontWeight: "bold" }}
                  onClick={renderpaymentmethod}>
                  Back
                </small>
              </Div>

              <Div
                display="flex"
                justify="space-between"
                alignI="center"
                padding="20px 15px">
                <Div display="flex" alignI="center">
                  <img src={providus} alt="providus bank" />
                  <Div color="#274b89" fs="25px" padding="25px 0 0 15px">
                    <Div fw="bold">008761112226</Div>
                    <Div fs="15px" ta="left" padding="12px 0 0 0">
                      Providus Bank
                    </Div>
                    <Div
                      fs="15px"
                      color="rgba(59, 59, 59, 0.7)"
                      display="inline-block">
                      Beneficiary:{" "}
                    </Div>
                    <Div
                      fs="15px"
                      color="#274b89"
                      padding="0 0 0 8px"
                      fw="bold"
                      display="inline-block">
                      {" "}
                      SpottR Limited
                    </Div>
                  </Div>
                </Div>
                <img src={copy} alt="copy number" />
              </Div>

              <Div
                ta="center"
                color="rgba(59, 59, 59, 0.7)"
                fs="15px"
                padding="50px 0 35px 0">
                Kindly make this transaction in 20mins, make sure you keep the
                transaction evidence screenshot incase of any issue
              </Div>
              <LoginButton bg="#274B89" wbtn="100%" onClick={rendertrxnstatus}>
                I have made the transfer
              </LoginButton>
            </Div>
          </>
        )}

        {showContentModal === "payWithCrypto" && (
          <>
            <Div
              padding="40px 40px 0 40px"
              display="flex"
              flexDirection="column"
              justify="space-between"
              style={{ cursor: "pointer" }}>
              <Div
                color="#274b89"
                fs="18px"
                display="flex"
                justify="space-between"
                padding="20px 0 15px 0">
                <small>Pay with Crypto</small>
                <small
                  style={{ fontWeight: "bold" }}
                  onClick={renderpaymentmethod}>
                  Back
                </small>
              </Div>

              <Div
                display="flex"
                justify="space-between"
                alignI="center"
                padding="12px 15px"
                bbm="1px solid #E7E7E7">
                <Div display="flex" flexDirection="column">
                  <img src={bitcoin} alt="bitcoin" />
                  <p style={{ textTransform: "uppercase", paddingTop: "5px" }}>
                    BTC
                  </p>
                </Div>
                <Div color="#274b89" fs="17px" fw="bold">
                  1BvBMSEYstWetqTFn5Au4 m4GFg7xJaNVN2
                </Div>
                <img src={copy} alt="copy transaction details" />
              </Div>
              <Div
                display="flex"
                justify="space-between"
                alignI="center"
                padding="12px 15px"
                bbm="1px solid #E7E7E7">
                <Div display="flex" flexDirection="column">
                  <img src={eth} alt="ethereum" />
                  <p style={{ textTransform: "uppercase", paddingTop: "5px" }}>
                    ETH
                  </p>
                </Div>
                <Div color="#274b89" fs="17px" fw="bold">
                  1BvBMSEYstWetqTFn5Au4 m4GFg7xJaNVN2
                </Div>
                <img src={copy} alt="copy transaction details" />
              </Div>
              <Div
                display="flex"
                justify="space-between"
                alignI="center"
                padding="12px 15px"
                bbm="1px solid #E7E7E7">
                <Div display="flex" flexDirection="column">
                  <img src={ltc} alt="litecoin" />
                  <p style={{ textTransform: "uppercase", paddingTop: "5px" }}>
                    LTC
                  </p>
                </Div>
                <Div color="#274b89" fs="17px" fw="bold">
                  1BvBMSEYstWetqTFn5Au4 m4GFg7xJaNVN2
                </Div>
                <img src={copy} alt="copy transaction details" />
              </Div>

              <Div
                width="300px"
                margin="0 auto"
                fs="12px"
                color="rgba(59, 59, 59, 0.7)"
                padding="35px 0">
                Click on the camera icon to add an image for your new service.
                You can add a maximum of 3 images.
              </Div>
              <LoginButton
                bg="#274B89"
                wbtn="100%"
                mg="40px 0 0 0"
                onClick={rendertrxnstatus}>
                Continue
              </LoginButton>
            </Div>
          </>
        )}

        {showContentModal === "trxnStatus" && (
          <Div padding="0 40px">
            <Div display="flex" justify="space-between" alignI="center">
              <Div display="flex" justify="space-between" alignI="center">
                <img src={progress} alt="transaction progress" />
                <Div color="#FFB211" fs="24px" fw="bold" padding="0 0 0 15px">
                  In progress
                </Div>
              </Div>
              <Div color="#929AA7" fs="8px">
                awaiting confirmation
              </Div>
            </Div>
            <Div color="#274b89" fw="bold" fs="36px" ta="left" margin="10px 0">
              N200000
            </Div>
            <Div display="flex" justify="space-between">
              <Div></Div>
              <LoginButton
                bg="hsla(6, 69%, 53%, 0.06)"
                wbtn="83px"
                hg="30.92px"
                style={btnalign}>
                <img src={report} alt="transaction report" />
                <small
                  style={{
                    fontWeight: "100",
                    paddingLeft: "15px",
                    color: "#FB4D39",
                  }}>
                  Report
                </small>
              </LoginButton>
            </Div>
            <Div margin="15px 0" fs="14px">
              <Div color="#929AA7" ta="left">
                Recipients:
              </Div>
              <Div color="#274b89" ta="left">
                Self
              </Div>
            </Div>
            <Div margin="15px 0" fs="14px">
              <Div color="#929AA7" ta="left">
                Username:
              </Div>
              <Div color="#274b89" ta="left">
                @adedamola
              </Div>
            </Div>
            <Div
              margin="15px 0"
              display="flex"
              justify="space-between"
              width="350px">
              <Div fs="14px">
                <Div color="#929AA7" ta="left">
                  Transaction Fee
                </Div>
                <Div color="#274b89" ta="left">
                  NGN0
                </Div>
              </Div>
              <Div fs="14px">
                <Div color="#929AA7" ta="left">
                  Payment Method
                </Div>
                <Div color="#274b89" ta="left">
                  CLIQ TOKEN
                </Div>
              </Div>
            </Div>
            <Div margin="15px 0" fs="14px">
              <Div color="#929AA7" ta="left">
                Transaction ID:
              </Div>
              <Div color="#274b89" ta="left">
                tdg87wdgh7udh32bd3dh3b
              </Div>
            </Div>
            <Div
              display="flex"
              alignI="center"
              justify="space-between"
              padding="25px 0 0 0"
              style={{ cursor: "pointer" }}>
              <img src={back} onClick={renderwallettofund} alt="go back" />
              <img src={share} alt="share transaction" />
            </Div>
          </Div>
        )}
      </ModalContent>
    </AdminBackdrop>
  );
};

export default Fundwallet;

import React, { useState } from "react";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import TransactionNav from "./transactionnav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputAmount from "./inputamount";
import PaymentTypes from "./paymenttype";
import { LoginButton } from "pages/signin/Login/style";
import { Div } from "GlobalStyles/spotrrStyles/style";
import alert from "assets/mem/alert.svg";
import { Input } from "../style";
import { paymenttypes } from "./data";
import progress from "assets/svg/progress.svg";
import report from "assets/svg/report.svg";
import PinInput from "components/UI/PinInput";

const WalletSettlement = ({ show, close }) => {
  const [showPaymentType, setShowPaymentType] = useState(false);
  const [showInputAmount, setInputAmount] = useState(false);
  const [showTransactionPin, setShowTransactionPin] = useState(false);
  const [amountToPay, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [foundPayment, setFoundPayment] = useState({});
  const [trxnStatus, setTrxnStatus] = useState(false);

  const renderPaymentTransaction = (id) => {
    setFoundPayment(paymenttypes.find((payment) => payment.id === id));
    setInputAmount(true);
    setShowPaymentType(false);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const renderTransactionPin = () => {
    setInputAmount(false);
    setShowPaymentType(false);
    setShowTransactionPin(true);
  };

  const hideTransactionPin = () => {
    setShowPaymentType(true);
    setShowTransactionPin(false);
    setInputAmount(false);
    setAmount("");
  };

  const renderTransactionStatus = () => {
    setShowPaymentType(false);
    setShowTransactionPin(false);
    setInputAmount(false);
    setTrxnStatus(true);
  };

  const btnalign = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const Inprogress = () => {
    return (
      <Div
        display="flex"
        justify="space-between"
        alignI="center"
        width="400px"
        height="auto"
        padding="0 0 0 50px">
        <Div display="flex" justify="space-between">
          <img src={progress} alt="in progress" />
          <Div color="#FFB211" fs="24px" fw="bold" padding="0 0 0 15px">
            In progress
          </Div>
        </Div>
        <Div color="#929AA7" fs="8px">
          awaiting confirmation
        </Div>
      </Div>
    );
  };

  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        close={close}
        br={
          showInputAmount || showTransactionPin || trxnStatus
            ? "24px"
            : "2.22px"
        }
        wd={trxnStatus ? "418px" : "672px"}
        hg={showPaymentType ? "466px" : null}
        mwd="490px"
        modalHeader={
          showPaymentType ? (
            "Select Payment Method"
          ) : showInputAmount ? (
            "Input Amount of coins"
          ) : showTransactionPin ? (
            "Transaction PIN"
          ) : trxnStatus ? (
            <Inprogress />
          ) : (
            "Make Settlement"
          )
        }>
        <div
          style={{
            display:
              showPaymentType ||
              showInputAmount ||
              showTransactionPin ||
              trxnStatus
                ? "none"
                : "block",
          }}>
          <Input bg="#F8F8F8">
            <input placeholder="Input wallet address/username" />
          </Input>
          <Input bg="#ECF7FF" onClick={() => setShowPaymentType(true)}>
            <Div display="flex" justify="space-between" alignI="center">
              <p>Select payment method</p>
              {/* <FontAwesomeIcon icon={faCaretDown} /> */}
            </Div>
          </Input>

          <Div
            display="flex"
            justify="space-between"
            alignI="center"
            margin="0 0 20px 0">
            <img src={alert} alt="alert" />
            <p
              style={{
                fontSize: "14px",
                textalign: "left",
                lineHeight: "22px",
                color: "#274B89",
                paddingLeft: "13px",
              }}>
              Lorem impsum donor sit a met short information about the chosen
              role impsum donor sit a met short information about the chosen
              role
            </p>
          </Div>
        </div>

        {showPaymentType && (
          <PaymentTypes
            renderPaymentTransaction={renderPaymentTransaction}
            setShowPaymentType={setShowPaymentType}
            setCurrency={setCurrency}
            currency={currency}
            showInputAmount={showInputAmount}
          />
        )}

        {showInputAmount && (
          <>
            <TransactionNav
              action={hideTransactionPin}
              titleLeft={`Send ${foundPayment.type} Token`}
              tokenPayment={foundPayment.coin}
            />
            <InputAmount
              handleAmountChange={handleAmountChange}
              amountToPay={amountToPay}
              setCurrency={setCurrency}
              foundPayment={foundPayment}
              renderTransactionPin={renderTransactionPin}
            />
          </>
        )}

        {showTransactionPin && (
          <div>
            <TransactionNav
              action={hideTransactionPin}
              titleLeft={`Transaction Confirmation`}
              showTransactionPin={showTransactionPin}
            />
            <PinInput />
            <Div
              color="rgba(59, 59, 59, 0.7)"
              padding="25px 0 35px 0"
              fs="12px">
              Kindly input the transaction PIN you registered while setting up
              your profile
            </Div>
            <LoginButton
              bg="#274B89"
              wbtn="100%"
              onClick={() => renderTransactionStatus()}>
              Continue
            </LoginButton>
          </div>
        )}

        {trxnStatus && (
          <Div width="350px" margin="0 auto">
            <Div color="#274b89" fw="bold" fs="36px" ta="left" margin="10px 0">
              N200000
            </Div>
            <Div display="flex" justify="space-between">
              <Div />
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
              width="280px">
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
            <Div></Div>
          </Div>
        )}
      </ModalContent>
    </AdminBackdrop>
  );
};

export default WalletSettlement;

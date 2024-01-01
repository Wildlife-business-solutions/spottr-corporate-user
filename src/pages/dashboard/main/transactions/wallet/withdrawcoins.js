import React, { useState } from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import Filters from "../../search/Filters";
import PaymentType from "./paymenttype";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import { paymenttypes } from "./data";
import bank from "assets/svg/bank.svg";
import wallet from "assets/svg/fly.svg";
import spottr from "assets/svg/people.svg";
import PinInput from "components/UI/PinInput";
import { Input } from "../../../../../GlobalStyles/spotrrStyles/style";

const Withdrawcoins = ({ show, close }) => {
  const [inputamount, setinputamount] = useState(true);
  const [selectwallet, setselectwallet] = useState(false);
  const [trxnpin, settrxnpin] = useState(false);
  const [setCurrency] = useState("NGN");
  const [withdrawal, setwithdrawal] = useState(false);
  const [amounttowithdraw, setamounttowithdraw] = useState(0);

  const [showModalContent, setShowModalContent] = useState("inputAmount");

  React.useEffect(() => {
    setShowModalContent("inputAmount");
  }, [show]);

  const handleAmountChange = (e) => {
    setamounttowithdraw(e.target.value);
  };

  const renderBankDetails = () => {
    setShowModalContent("bankDetails");
  };

  // const rendertrxnpin = () => {
  //   setinputamount(false);
  //   setselectwallet(false);
  //   settrxnpin(true);
  //   setwithdrawal(false);
  // };

  // const renderwithdrawal = () => {
  //   setinputamount(false);
  //   setselectwallet(false);
  //   settrxnpin(false);
  //   setwithdrawal(true);
  // };

  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        isClosing={true}
        close={close}
        br="24px"
        wd="600px"
        hg="500px"
        mwd="auto"
        p="50px"
        modalHeader="">
        {showModalContent === "inputAmount" && (
          <>
            <Div padding="0 30px">
              <Div color="#274b89" fs="15px" ta="left">
                <small>Withdraw funds</small>
              </Div>

              <Div color="#274b89" fs="25px" ta="left" padding="15px 0">
                <p>Input amount to withdraw</p>
              </Div>
              <Div display="flex" justify="center" padding="20px 0">
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
                  value={amounttowithdraw}
                />
                <Filters
                  options={["USD", "NGN"]}
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
                onClick={renderBankDetails}>
                Continue
              </LoginButton>
            </Div>
          </>
        )}

        {showModalContent === "bankDetails" && (
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
              <Input p={"15px"} bg="#F8F8F8" dis="none" pcol="#C4C4C4">
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

        {/* {selectwallet && (
          <>
            <Div padding="0 40px">
              <Div display="flex" justify="space-between">
                <p style={{ fontSize: "14px", color: "#274B89" }}>
                  Select Wallet to withdraw from
                </p>
                <Filters
                  options={["USD", "NGN"]}
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
                  walletId={payment?.id}
                  coin={payment?.coin}
                  type={payment?.name}
                  amount={payment?.balance}
                  rate={payment?.rate}
                  percent={payment?.percent}
                  // curr={"NGN"}
                  action={rendertrxnpin}
                  // renderPayment={() => renderPaymentTransaction(payment.id)}
                />
              ))}
            </Div>
          </>
        )} */}

        {/* {trxnpin && (
          <>
            <Div padding="0 30px">
              <Div color="#274b89" fs="15px" ta="left">
                <small>Transaction Confirmation</small>
              </Div>
              <Div
                color="#274b89"
                fs="20px"
                ta="left"
                padding="15px 0"
                fw="bold">
                <p style={{ textTransform: "uppercase" }}>transaction pin</p>
              </Div>
              <PinInput />
              <Div
                color="rgba(59, 59, 59, 0.7)"
                padding="25px 0 35px 0"
                fs="12px">
                Kindly input the transaction PIN you registered while setting up
                your profile
              </Div>
              <LoginButton bg="#274B89" wbtn="100%" onClick={renderwithdrawal}>
                Continue
              </LoginButton>
            </Div>
          </>
        )} */}

        {/* {withdrawal && (
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
                  color="#274b89"
                  display="flex"
                  justify="space-between"
                  padding="20px"
                  bbm="1px solid #E7E7E7">
                  <Div display="flex" justify="space-between" alignI="center">
                    <img src={bank} alt="withdraw to bank" />
                    <Div padding="0 0 0 15px" fw="bold">
                      Local Bank Account
                    </Div>
                  </Div>
                  <p>N150 Fee</p>
                </Div>
                <Div
                  color="#274b89"
                  display="flex"
                  justify="space-between"
                  padding="20px"
                  bbm="1px solid #E7E7E7">
                  <Div display="flex" justify="space-between" alignI="center">
                    <img src={wallet} alt="withdraw to wallet" />
                    <Div padding="0 0 0 15px" fw="bold">
                      Wallet Address
                    </Div>
                  </Div>
                  <p>N150 Fee</p>
                </Div>
                <Div
                  color="#274b89"
                  display="flex"
                  justify="space-between"
                  padding="20px"
                  bbm="1px solid #E7E7E7">
                  <Div display="flex" justify="space-between" alignI="center">
                    <img src={spottr} alt="send to spottr user" />
                    <Div padding="0 0 0 15px" fw="bold">
                      SpottR User
                    </Div>
                  </Div>
                  <p>N150 Fee</p>
                </Div>
              </Div>
              <Div
                padding="50px 0 0 0"
                color="#274b89"
                fw="bold"
                style={{ cursor: "pointer" }}
                onClick={rendertrxnpin}>
                Cancel
              </Div>
            </Div>
          </>
        )} */}
      </ModalContent>
    </AdminBackdrop>
  );
};

export default Withdrawcoins;

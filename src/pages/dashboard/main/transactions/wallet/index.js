import React, { useEffect, useState } from "react";
import Loader from "react-loading-skeleton";
import { useAdminModalContext } from "context/AdminModalContext";
import WalletHeader from "../../search/Search";
import Walletitems from "./walletitems";
import Walletsettlement from "./walletsettlement";
import Withdrawcoins from "./withdrawcoins";
import Fundwallet from "./fundwallet";
import Walletcards from "./walletcards";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import { GETWALLET } from "utilities/static/routes/backend";
import withdraw from "assets/svg/withdraw.svg";
import buy from "assets/svg/buy.svg";
import add from "assets/svg/add.svg";
import eye from "assets/svg/eye.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { SpottrLink } from "../../../../../GlobalStyles/spotrrStyles/style";
import { DASHBOARDHOME } from "utilities/static/route-const";
import backArrow from "assets/svg/backArrow.svg";
import { walletData } from "utilities/constant/walletData";

const Wallet = () => {
  const walletitems = [
    {
      id: "1",
      text: "Display QR Code",
    },
    {
      id: "2",
      text: "Generate Statement",
    },
    // {
    //   text: "Make Settlement",
    //   component: true,
    // },
    {
      id: "3",
      text: "See all transaction activity",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // axios
    //   .get(GETWALLET, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     setTimeout(() => {
    //       setUserWallet(res.data.data);
    //       setIsLoading(false);
    //     }, 5000);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  const btnalign = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const { showmodal, setShowModal } = useAdminModalContext();
  const [transactionDetailModal, setTransactionDetailModal] =
    React.useState(false);
  const [showWalltSettlment, setShowWalltSettlmnt] = useState(false);
  const [showSendCoins, setShowSendCoins] = useState(false);
  const [dynamicText, setDynamicText] = useState("");
  const [withdrawcoins, setwithdrawcoins] = useState(false);
  const [fundwallet, setfundwallet] = useState(false);
  const [hideBalance, setHideBalance] = useState(false);

  // const [showRequiredMoal, setShowRequiredMoal] = useState("")

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSendCoins(false);
    setwithdrawcoins(false);
    setTransactionDetailModal(false);
  };

  const handleOpenModal = (hasComponent) => {
    setShowModal(hasComponent);
    setShowSendCoins(false);
    setShowWalltSettlmnt(true);
  };

  const handleOpenTransactionDetail = (type) => {
    if (type === "credit") {
      setDynamicText("Received");
    }
    if (type === "debit") {
      setDynamicText("Send");
    }
    setShowModal(true);
    setTransactionDetailModal(true);
  };

  const handleSendCoinsModal = () => {
    setShowWalltSettlmnt(false);
    setShowModal(true);
    setShowSendCoins(true);
    setwithdrawcoins(false);
  };

  const handleWithdrawModal = () => {
    setShowWalltSettlmnt(false);
    setShowModal(true);
    setShowSendCoins(false);
    setwithdrawcoins(true);
  };

  const handleFundWalletModal = () => {
    setShowWalltSettlmnt(false);
    setShowModal(true);
    setShowSendCoins(false);
    setwithdrawcoins(false);
    setfundwallet(true);
  };

  return (
    <>
      {showWalltSettlment && (
        <Walletsettlement show={showmodal} close={handleCloseModal} />
      )}

      {fundwallet && (
        <Fundwallet
          paymenttypes={walletData}
          show={showmodal}
          close={handleCloseModal}
        />
      )}
      <Div margin="30px 0px 0px 0px">
        <SpottrLink to={DASHBOARDHOME}>
          <Div width="100px" display={"flex"}>
            <img src={backArrow} alt="icon" />
            <p
              style={{
                fontSize: "15px",
                color: "#274889",
                marginLeft: "15px",
              }}>
              Go back
            </p>
          </Div>
        </SpottrLink>
        {/* <WalletHeader searchheader="Wallet" /> */}

        <Div
          // boxShadow="1px solid #BBC4D4"
          boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
          br="8px"
          width="90%"
          backgroundColor="#fff"
          margin="20px 0px 0px 0px"
          // height="800px"
          // style={{maxHeight: '800px', overflow: 'scroll'}}
          padding="30px 30px 30px 50px">
          <Div color="#274b89" fw="bold">
            Wallet
          </Div>
          <Div
            display="flex"
            width="100%"
            gap="20px"
            height="220px"
            justify="space-between"
            padding="20px 0 0 0"
            alignI="center">
            {!isLoading ? (
              <Loader count={1} width={630} height={150} />
            ) : (
              <Div
                display="flex"
                justify="space-between"
                width="75%"
                gap="20px"
                height="inherit"
                boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
                padding="20px 35px"
                br="8px"
                alignI="center">
                <Div
                  width="100%"
                  height="100%"
                  backgroundColor="#274b89"
                  br="10px"
                  padding="24px 35px"
                  style={{ cursor: "pointer" }}>
                  <Div color="#fff" fs="14px" fw="100">
                    Current Balance
                  </Div>
                  <Div
                    color="#fff"
                    fw="bold"
                    display="flex"
                    justify="space-between"
                    fs="30px">
                    <p>
                      N3,847,895
                      {/* {hidebalance
                      ? "***********"
                      : walletData?.reduce(
                          (prev, curr) => prev + curr.balance,
                          0
                        )} */}
                    </p>
                    <img
                      src={eye}
                      onClick={() => setHideBalance(!hideBalance)}
                      alt="view balance"
                    />
                  </Div>
                  <LoginButton
                    onClick={handleFundWalletModal}
                    br="100px"
                    bg="#fff"
                    fz="9px"
                    wbtn="101px"
                    hg="50px"
                    col="#274b89"
                    style={{
                      float: "right",
                      width: "40%",
                      margin: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <img src={add} alt="fund wallet" />
                    <small
                      style={{
                        fontWeight: "100",
                        paddingLeft: "5px",
                        fontSize: "12px",
                      }}>
                      Fund Wallet
                    </small>
                  </LoginButton>
                </Div>
              </Div>
            )}
            {!isLoading ? (
              <Loader count={1} width={460} height={150} />
            ) : (
              <Div
                display="flex"
                boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
                padding="15px"
                ta="center"
                br="8px"
                width="40%"
                height="inherit"
                wrap="wrap"
                justify="flex-start"
                alignI="center">
                {walletitems?.map((item, index) => (
                  <Walletitems
                    key={item.id}
                    content={item.text}
                    component={item.component}
                    handleWithdrawModal={handleWithdrawModal}
                    handleOpenModal={handleOpenModal}
                  />
                ))}
              </Div>
            )}
          </Div>
          <Div
            display="flex"
            padding="15px 0"
            margin="25px 0 0 0"
            // wrap="wrap"
            width="100%"
            gap="20px"
            alignI="flex-start">
            {!isLoading ? (
              <>
                <Loader count={1} width={346} height={203} />
                <Loader count={1} width={346} height={203} />
                <Loader count={1} width={346} height={203} />
              </>
            ) : (
              walletData?.map((walletType, index) => (
                <Walletcards
                  key={index}
                  type={walletType.name}
                  image={walletType.image}
                  hasBrd={false}
                  hasActivity={true}
                  amount={walletType.balance}
                  activity={walletType.transactions}
                  bg={walletType.color}
                  handleCloseModal={handleCloseModal}
                  handleOpenTransactionDetail={handleOpenTransactionDetail}
                  showsendcoins={showSendCoins}
                  handleWithdrawModal={handleWithdrawModal}
                  walletData={walletData}
                  dynamicText={dynamicText}
                  transactionDetailModal={transactionDetailModal}
                  withdrawcoins={withdrawcoins}
                  handleSendCoinsModal={handleSendCoinsModal}
                />
              ))
            )}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Wallet;

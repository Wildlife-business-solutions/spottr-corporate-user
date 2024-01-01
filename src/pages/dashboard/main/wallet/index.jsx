import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BlueBox from "./BlueBox";
import {
  AmountArea,
  ButtonArea,
  HistoryArea,
  OptionsContainer,
  StatementArea,
  WalletsContainer,
  WalletText,
  WalletTop,
} from "./style";
import WalletButton from "./WalletButton";
import withdraw from "assets/svg/withdraw.svg";
import buyCoins from "assets/svg/buy.svg";
import Options from "./options/Options";
import { GETWALLET, GETWALLETHISTORY } from "utilities/static/routes/backend";
import History from "./history";
// import fiat from "assets/fiat.svg";
// import cliq from "assets/cliq.svg";
// import susd from "assets/susd.svg";
import { ReactComponent as Spinner } from "assets/svg/spinner.svg";
import WalletContext from "context/wallet";
import Goback from "components/dashboard/main/goBack";
import { useSelector } from "react-redux";

function WalletPage() {
  const { token } = useSelector((state) => state.authorize);
  const [wallets, setWallets] = useState([]);
  // const [mount] = useState(0)
  const history = useHistory();
  const memoizedOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // function getHistory(){
  //     wallets.forEach(wallet=>{
  //         fetch(GETWALLETHISTORY(wallet.walletTypeId), memoizedOptions)
  //         .then(res=> res.json())
  //         .then(data=>{
  //             console.log('Data',data)
  //             // setWallets(data.data)
  //         })
  //     })
  // }

  // useEffect(()=>{
  //     getWallets()
  //     getHistory()
  // },[])

  useEffect(() => {
    // fetch(GETWALLET, memoizedOptions)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setWallets(data.data);
    //     console.log(data);
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //   });
  }, []);

  // wallets?.forEach((wallet) => {
  //   fetch(GETWALLETHISTORY(wallet.walletTypeId), memoizedOptions)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Data", data);
  //       // setWallets(data.data)
  //     });
  // });

  return (
    <WalletContext>
      <WalletsContainer>
        <Goback handleGoback={history.goBack} />
        <WalletText>Wallets</WalletText>
        {/* {console.log('wallets',wallets)}
            {console.log('mount',mount)} */}
        <WalletTop>
          <AmountArea>
            <BlueBox />
            <ButtonArea>
              <WalletButton icon={withdraw} text="Withdraw" />
              <WalletButton icon={buyCoins} text="Buy coins" />
            </ButtonArea>
          </AmountArea>
          <StatementArea>
            <OptionsContainer>
              <Options text="Display QR code" />
              <Options text="Open Loan log" />
            </OptionsContainer>
            <OptionsContainer>
              <Options text="Generate Statement" />
              <Options text="See all trasnaction activity" />
            </OptionsContainer>
          </StatementArea>
        </WalletTop>
        <HistoryArea>
          {wallets?.length !== 0 ? (
            <Spinner />
          ) : (
            <>
              <History
                // icon={fiat}
                currency="NGN"
                walletName={wallets[0]?.name}
                walletAmount={wallets[0]?.balance}
              />
              <History
                // icon={cliq}
                currency="NGN"
                walletName={wallets[1]?.name}
                walletAmount={wallets[1]?.balance}
              />
              <History
                // icon={susd}
                currency="NGN"
                walletName={wallets[2]?.name}
                walletAmount={wallets[2]?.balance}
              />
            </>
          )}
        </HistoryArea>
      </WalletsContainer>
    </WalletContext>
  );
}

export default WalletPage;

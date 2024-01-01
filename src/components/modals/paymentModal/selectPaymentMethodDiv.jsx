import React from "react";
import { Div, Img } from "GlobalStyles/spotrrStyles/style";
import Filters from "pages/dashboard/main/search/Filters";
import { ModalSubTitle } from "GlobalStyles/spotrrStyles/style";
import WalletImage from "assets/svg/wallet1.svg";
import CardImage from "assets/svg/card.svg";
import MoneyBagImage from "assets/svg/moneybag.svg";
import BookmarkImage from "assets/svg/bookmark.svg";
import Colors from "GlobalStyles/appColors";

export default function SelectPaymentMethodDiv(props) {
  const handleSelectWallet = () => {
    props.setPage(1);
  };
  const handleSelectCard = () => {
    props.setPage(1);
  };
  const handleSelectPaylater = () => {
    props.modalClosed();
  };
  const handleSelectSaveDeal = () => {
    props.modalClosed();
  };
  return (
    <Div minHeight="350px">
      <Div display="flex" justify="space-between" margin="0 0 50px 0">
        <ModalSubTitle>Select payment method</ModalSubTitle>
        <Filters
          options={["USD", "NGN"]}
          col="transparent"
          wd="60px"
          action={(e) => props.setCurrency(e.target.value)}
        />
      </Div>
      <Div display="flex" bbm="1px solid #e4e4e4" padding="20px 0">
        <Img src={WalletImage} h="24px" w="24px" m="0 10px" />
        <Div
          display="flex"
          justify="space-between"
          width="100%"
          color={Colors.primary}
          fw="bold"
          cursor="pointer"
          onClick={handleSelectWallet}>
          <Div>Pay from Wallet</Div>
          <Div>N345,684,909</Div>
        </Div>
      </Div>
      <Div display="flex" bbm="1px solid #e4e4e4" padding="20px 0">
        <Img src={CardImage} h="24px" w="24px" m="0 10px" />
        <Div
          display="flex"
          justify="space-between"
          width="100%"
          color={Colors.primary}
          fw="bold"
          cursor="pointer"
          onClick={handleSelectCard}>
          <Div>Pay from card</Div>
          <Div>N150 Fee</Div>
        </Div>
      </Div>
      <Div display="flex" bbm="1px solid #e4e4e4" padding="20px 0">
        <Img src={MoneyBagImage} h="24px" w="24px" m="0 10px" />
        <Div
          display="flex"
          justify="space-between"
          width="100%"
          color={Colors.primary}
          fw="bold"
          cursor="pointer"
          onClick={handleSelectPaylater}>
          <Div>Buy Now Pay Later</Div>
          <Div>4% interest</Div>
        </Div>
      </Div>
      <Div display="flex" bbm="1px solid #e4e4e4" padding="20px 0">
        <Img src={BookmarkImage} h="24px" w="24px" m="0 10px" />
        <Div
          display="flex"
          justify="space-between"
          width="100%"
          color={Colors.primary}
          fw="bold"
          cursor="pointer"
          onClick={handleSelectSaveDeal}>
          <Div>Save this Deal</Div>
        </Div>
      </Div>
    </Div>
  );
}

import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Input, Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import check from "assets/svg/senticon.svg";

const CheckAvailability = ({ show, close, header }) => {
  return (
    <AdminBackdrop handleClickAdminModal={close} showAdminModal={show}>
      <ModalContent
        close={close}
        isClosing={false}
        wd=""
        hg="auto"
        mwd="410px"
        br="10px"
        modalHeader="">
        <Div padding="25px   25px 0px 25px">
          <SpottrP color="#274B89" fs="20px" tAlign="center">
            {header}
          </SpottrP>

          <SpottrP mt="24px" color="#4C596F" fs="20px">
            Someone is searching for Toyota Corolla 2010 on Spottr. Is this
            product available?
          </SpottrP>
        </Div>
        <Div border="1px solid lightgray" display="flex" margin="24px 0px 0px">
          <LoginButton onClick={close} col="black" bg="white" wbtn="100%">
            No
          </LoginButton>
          <LoginButton bg="#274B89" wbtn="100%%">
            Yes
          </LoginButton>
        </Div>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default CheckAvailability;

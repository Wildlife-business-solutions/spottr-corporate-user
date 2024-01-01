import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Input, Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import check from "assets/svg/senticon.svg";

const AdMapPin = ({ show, close, header }) => {
  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        close={close}
        isClosing={true}
        wd=""
        hg="440px"
        mwd="377px"
        br="23px"
        modalHeader="">
        <Div padding="20% 25px 35px 25px">
          <SpottrP color="#274B89" fs="14px" tAlign="left">
            {header}
          </SpottrP>
          <Input p="0 0 0 15px" hg="53px">
            <input type="text" placeholder="Input No of days" />
          </Input>
          <Input pos="relative" p="0 0 0 15px" hg="53px">
            <input type="text" placeholder="Amount" />
            <Img
              w="20px"
              h="20px"
              src={check}
              style={{ position: "absolute", right: "10px", top: "15px" }}
            />
          </Input>
          <SpottrP color="#274b89" fs="12px">
            Type in your correct number of hours/days (max out at 365 days) and
            input your preferred amount :)
          </SpottrP>
          <LoginButton bg="#274B89" wbtn="100%" mg="16% 0 0 0">
            Check Out
          </LoginButton>
        </Div>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default AdMapPin;

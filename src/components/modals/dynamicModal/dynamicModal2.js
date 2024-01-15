import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Input, Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";

const DynamicModal2 = ({ height, width, show, close, header, children }) => {
  return (
    <AdminBackdrop
      bg="rgb(31 31 31 / 70%)"
      handleClickAdminModal={close}
      showAdminModal={show}>
      <ModalContent
        close={close}
        isClosing={false}
        wd={width ? width : ""}
        hg={height ? height : "auto"}
        mwd={width ? width : "400px"}
        br="5px"
        modalHeader="">
        <Div padding="8px 25px">
          <SpottrP color="#274B89" fs="20px" tAlign="left">
            {header}
          </SpottrP>
          <Div margin="20px 0px" ta={"left"} fs={"30px"}>
            {children}
          </Div>
        </Div>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default DynamicModal2;

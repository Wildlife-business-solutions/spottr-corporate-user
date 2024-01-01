import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import { DialogContent } from "./style";
import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";

const Dialog = ({ show, close, proceed, dialoghead, dialogcontent }) => {
  return (
    <AdminBackdrop showAdminModal={show}>
      <DialogContent>
        <Div padding="10px 30px 30px 30px">
          <SpottrP tAlign="center" color="#061E48" fw="700">
            {dialoghead}
          </SpottrP>
          <Div padding="30px 10px" ta="center" color="#4C596F" fs="13px">
            {dialogcontent}
          </Div>
        </Div>
        <Div display="flex" width="100%">
          <LoginButton
            wbtn="50%"
            bg="#DADCE1"
            col="#000"
            br="0px"
            onClick={close}>
            No
          </LoginButton>
          <LoginButton bg="#274B89" wbtn="50%" br="0px" onClick={proceed}>
            Yes
          </LoginButton>
        </Div>
      </DialogContent>
    </AdminBackdrop>
  );
};

export default Dialog;

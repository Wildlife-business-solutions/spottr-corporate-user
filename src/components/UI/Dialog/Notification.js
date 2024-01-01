import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import DialogContent from "components/UI/AdminModal";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";

const Notification = ({ show, close, notifhead, notifcontent }) => {
  return (
    <AdminBackdrop close={close} showAdminModal={show}>
      <DialogContent>
        <Div ta="center" color="#061E48">
          {notifhead}
        </Div>
        <Div padding="30px 10px" ta="center" color="#4C596F" fs="13px">
          {notifcontent}
        </Div>

        <LoginButton bg="#274B89" wbtn="100%" br="0px" onClick={close}>
          Close
        </LoginButton>
      </DialogContent>
    </AdminBackdrop>
  );
};

export default Notification;

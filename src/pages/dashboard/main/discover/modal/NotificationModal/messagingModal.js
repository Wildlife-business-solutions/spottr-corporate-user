import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Input, Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import check from "assets/svg/senticon.svg";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import Hug from "assets/svg/hug.svg";
import Divider from "GlobalStyles/dividerLine";

const MessagingModal = ({ show, close, header }) => {

    let content = [];

    for (let index = 0; index < 4; index++) {
      content.push(<Div>
        <Div display="flex" padding="10px 0" justify="space-between">
          <Img src={Hug} height="30px" width="30px" alt="Message" />
          <Div style={{ textAlign: 'left', marginLeft: '15px' }}>
            <Div fs="15px" color="#274B89" fw="bold" alignI="left">New Member Request</Div>
            <Div fs="12px" color="#979797" fw="bold" alignI="left">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</Div>
            <Div fs="10px" color="#919191" fw="bold" alignI="left">4 minutes ago</Div>

          </Div>
        </Div>

        <Divider />
      </Div>);
      
    }

  return (
    <AdminBackdrop handleClickAdminModal={close} showAdminModal={show}>
      <ModalContent
        close={close}
        // isClosing={true}
        wd="500px"
        hg="auto"
        br="5px"

        modalHeader="">
        <Div padding="25px" >
          <Div display="flex" justify="space-between">
            <Div fs="20px" color="#274B89" fw="bold" alignI="left">Messaging</Div>
            <Div fs="13px" color="#274B89" fw="bold" alignI="left">Mark all as read</Div>

          </Div>

          {content}

        </Div>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default MessagingModal;

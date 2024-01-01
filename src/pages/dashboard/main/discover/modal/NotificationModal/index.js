import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Input, Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";
import check from "assets/svg/senticon.svg";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

const NotificationModal = ({ show, close, header }) => {
  return (
    <AdminBackdrop handleClickAdminModal={close} showAdminModal={show}>
      <ModalContent
        close={close}
        isClosing={true}
        wd=""
        hg="auto"
        mwd="410px"
        br="10px"
        modalHeader="">
        <Div padding="25px   25px 0px 25px">
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify>
            <Tab eventKey="home" title="Home">
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="profile" title="Profile">
              {/* <Sonnet /> */}
              Avanish
            </Tab>
          </Tabs>
        </Div>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default NotificationModal;

import React from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import Productdetail from "./productdetail";

const Searchdetail = ({ show, close }) => {
  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        close={close}
        isClosing={true}
        wd="600px"
        hg="auto"
        mwd="600px"
        modalHeader="">
        <Productdetail modal="true" />
      </ModalContent>
    </AdminBackdrop>
  );
};

export default Searchdetail;

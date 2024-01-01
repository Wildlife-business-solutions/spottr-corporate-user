import React from "react";
import {
  CloseAdminModal,
  ModalHeader,
  ContentBody,
  ModalBodyMain,
  ModalChildren,
} from "./style";
import closebtn from "assets/svg/closeadninbtn.svg";

const ModalContent = ({
  children,
  close,
  modalHeader,
  br,
  hg,
  overflowY,
  bg,
  wd,
  mwd,
  dis,
  isClosing,
  p,
  disp,
}) => {
  return (
    <ContentBody
      overflowY={overflowY}
      bg={bg}
      mwd={mwd}
      br={br}
      hg={hg}
      wd={wd}
      p={p}
      disp={disp}>
      {isClosing && (
        <CloseAdminModal>
          <div onClick={close}>
            <img src={closebtn} alt="Close button" />
          </div>
        </CloseAdminModal>
      )}
      <ModalBodyMain dis={dis}>
        <ModalHeader>{modalHeader}</ModalHeader>
        <ModalChildren>{children}</ModalChildren>
      </ModalBodyMain>
    </ContentBody>
  );
};

export default ModalContent;

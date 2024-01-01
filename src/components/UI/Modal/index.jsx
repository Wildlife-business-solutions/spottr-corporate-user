import React from "react";
import {
  Container,
  OuterContainer,
  CancelSection,
  IconContainer,
} from "./style";
import Success from "assets/svg/success.svg";
import Error from "assets/svg/error.svg";
import closebtn from "assets/svg/closeadninbtn.svg";
import { ContentBody } from "../ModalContent/style";

const Modal = (props) => {
  return (
    <OuterContainer show={props.show}>
      <Container
        padding={props.padding}
        show={props.show}
        mwidth={props.mwidth}
        minHeight={props.minHeight}
        width={props.width}
        top={props.top}
        height={props.height}>
        {props.showClose ? (
          <CancelSection>
            <div onClick={props.modalClosed}>
              <img src={closebtn} alt="Close button" />
            </div>
          </CancelSection>
        ) : (
          <></>
        )}
        <IconContainer>
          {props.icon === "success" ? <img src={Success} alt="icon" /> : null}
          {props.icon === "error" ? <img src={Error} alt="icon" /> : null}
        </IconContainer>
        <ContentBody
          wd={props.page === 4 && "90%"}
          mar={props.page === 4 && "auto"}
          mh="85vh"
          p="0px"
          overflowY={props.overflowY}>
          {props.children}
        </ContentBody>
      </Container>
    </OuterContainer>
  );
};

export default Modal;

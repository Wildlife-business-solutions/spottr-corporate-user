import React, { useEffect } from "react";
import { Container, Paragraph } from "./style";
import SuccessIcon from "assets/svg/success.svg";
import ErrorIcon from "assets/svg/error.svg";

const Toast = ({ icon, description, showModal, setShowModal }) => {
  useEffect(() => {
    let timer;
    if (showModal === true) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showModal, setShowModal]);

  return (
    <Container showModal={showModal} bgColor={icon === "success"}>
      <img
        src={`${
          icon === "success" ? SuccessIcon : icon === "error" ? ErrorIcon : null
        }`}
        alt=""
      />
      <Paragraph style={{ color: "white" }}>{description} </Paragraph>
      <p
        onClick={() => setShowModal(false)}
        style={{ color: "white", cursor: "pointer" }}>
        X
      </p>
    </Container>
  );
};

export default Toast;

import React from "react";
import { Container } from "./style";

const Backdrop = (props) =>
  props.show ? <Container onClick={props.clicked}></Container> : null;

export default Backdrop;

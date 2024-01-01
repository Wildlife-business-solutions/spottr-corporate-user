import React from "react";
import { Div } from "../../../GlobalStyles/spotrrStyles/style";
import styled from "styled-components";

const PinDigit = styled.input``;
const inputstyle = {
  width: "25%",
  textAlign: "center",
  border: "none",
  background: "transparent",
  fontSize: "24px",
};

export default function PinInput() {
  return (
    <Div
      display="flex"
      height="55px"
      width="100%"
      backgroundColor="#f8f8f8"
      br="8px"
      margin="15px 0 0 0">
      <PinDigit type="text" placeholder="*" style={inputstyle} maxLength="1" />
      <PinDigit type="text" placeholder="*" style={inputstyle} maxLength="1" />
      <PinDigit type="text" placeholder="*" style={inputstyle} maxLength="1" />
      <PinDigit type="text" placeholder="*" style={inputstyle} maxLength="1" />
    </Div>
  );
}

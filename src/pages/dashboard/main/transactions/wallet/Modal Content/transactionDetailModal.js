import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { LoginButton } from "pages/signin/Login/style";

import progress from "assets/svg/progress.svg";
import report from "assets/svg/report.svg";

import back from "assets/svg/back.svg";
import share from "assets/svg/share.svg";

const TransactionDetailModal = ({ dynamicText }) => {
  const btnalign = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Div padding="0 40px">
      <Div display="flex" justify="space-between" alignI="center">
        <Div display="flex" justify="space-between" alignI="center">
          {/* <img src={progress} alt="transaction progress" /> */}
          <Div
            color={dynamicText === "Send" ? "red" : "green"}
            fs="24px"
            fw="bold"
            padding="0 0 0 15px">
            {dynamicText}
          </Div>
        </Div>
        <Div color="#929AA7" fs="8px">
          awaiting confirmation
        </Div>
      </Div>
      <Div color="#274b89" fw="bold" fs="36px" ta="left" margin="10px 0">
        N200000
      </Div>
      <Div display="flex" justify="space-between">
        <Div></Div>
        <LoginButton
          bg="hsla(6, 69%, 53%, 0.06)"
          wbtn="83px"
          hg="30.92px"
          style={btnalign}>
          <img src={report} alt="transaction report" />
          <small
            style={{
              fontWeight: "100",
              paddingLeft: "15px",
              color: "#FB4D39",
            }}>
            Report
          </small>
        </LoginButton>
      </Div>
      <Div margin="15px 0" fs="14px">
        <Div color="#929AA7" ta="left">
          Recipients:
        </Div>
        <Div color="#274b89" ta="left">
          Self
        </Div>
      </Div>
      <Div margin="15px 0" fs="14px">
        <Div color="#929AA7" ta="left">
          Username:
        </Div>
        <Div color="#274b89" ta="left">
          @adedamola
        </Div>
      </Div>
      <Div margin="15px 0" display="flex" justify="space-between">
        <Div fs="14px">
          <Div color="#929AA7" ta="left">
            Transaction Fee
          </Div>
          <Div color="#274b89" ta="left">
            NGN0
          </Div>
        </Div>
        <Div fs="14px">
          <Div color="#929AA7" ta="left">
            Payment Method
          </Div>
          <Div color="#274b89" ta="left">
            CLIQ TOKEN
          </Div>
        </Div>
      </Div>
      <Div margin="15px 0" fs="14px">
        <Div color="#929AA7" ta="left">
          Transaction ID:
        </Div>
        <Div color="#274b89" ta="left">
          tdg87wdgh7udh32bd3dh3b
        </Div>
      </Div>
      <Div
        display="flex"
        alignI="center"
        justify="space-between"
        padding="25px 0 0 0"
        style={{ cursor: "pointer" }}>
        <img src={back} alt="go back" />
        <img src={share} alt="share transaction" />
      </Div>
    </Div>
  );
};

export default TransactionDetailModal;

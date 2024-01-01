import React from "react";
import { InputAmountBody } from "../style";
import { Div } from "GlobalStyles/spotrrStyles/style";
import Filters from "../../search/Filters";
import { LoginButton } from "pages/signin/Login/style";

const InputAmount = ({
  handleAmountChange,
  amountToPay,
  setCurrency,
  renderTransactionPin,
  payment,
}) => {
  return (
    <InputAmountBody>
      <Div
        display="flex"
        justify="space-between"
        alignI="center"
        width="30%"
        margin="20px auto">
        <input
          type="text"
          style={{
            width: "80px",
            border: "none",
            textalign: "right",
            fontSize: "30px",
            fontWeight: "bold",
            borderBottom: "2px solid grey",
          }}
          onChange={handleAmountChange}
          value={amountToPay}
        />
        <Filters
          options={["Unit"]}
          col="transparent"
          show="none"
          wd="60px"
          lt="388px"
          setCurrency={setCurrency}
        />
      </Div>
      <Div padding="15px 0 0 0" margin="0 -10px -10px 0">
        <small style={{ color: "#c4c4c4", fontSize: "12px" }}>Fee:</small>
        <small style={{ color: "#274B89", fontSize: "12px" }}> N0</small>
      </Div>
      <Div padding="5px 0 35px 0">
        <small style={{ color: "#c4c4c4", fontSize: "12px" }}>
          You are sending:
        </small>
        <small style={{ color: "#274B89", fontSize: "12px" }}>
          {" "}
          {amountToPay || 0} {payment} Tokens
        </small>
      </Div>

      <LoginButton
        bg="#274B89"
        wbtn="100%"
        onClick={() => renderTransactionPin()}>
        Continue
      </LoginButton>
    </InputAmountBody>
  );
};

export default InputAmount;

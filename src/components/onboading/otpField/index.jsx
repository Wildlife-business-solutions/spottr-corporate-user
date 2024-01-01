import { useRegContext } from "context/RegContext";
import React, { useEffect, useState } from "react";
import { LabelText } from "../inputField/style";
import { OTPContainer, OTPInput } from "./style";
import { useDispatch } from "react-redux";

export default function OTPField() {
  const { setRegData } = useRegContext();
  const dispatch = useDispatch();
  const [inputOtp, setInputOtp] = useState({
    first: "",
    second: "",
    third: "",
    forth: "",
    fifth: "",
    sixth: "",
  });
  const [endNum, setEndNum] = useState(0);

  function handleOTP(e) {
    setInputOtp({
      ...inputOtp,
      [e.target.name]: e.target.value,
    });
    if (e.target.value && e.target.id.slice(3) !== "5") {
      document
        .getElementById(`otp${parseInt(e.target.id.slice(3)) + 1}`)
        .focus();
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 8 && e.target.id.slice(3) !== "0") {
      if (e.target.id.slice(3) === "5") {
        if (endNum > 0) {
          document
            .getElementById(`otp${parseInt(e.target.id.slice(3)) - 1}`)
            .focus();
        }
        setEndNum(endNum + 1);
      } else {
        document
          .getElementById(`otp${parseInt(e.target.id.slice(3)) - 1}`)
          .focus();
      }
    }
    if (e.target.id.slice(3) === "0") {
      setEndNum(0);
    }
  };

  useEffect(() => {
    const { first, second, third, forth, fifth, sixth } = inputOtp;
    setRegData((prev) => {
      return {
        ...prev,
        form: {
          ...prev.form,
          otp: `${first}${second}${third}${forth}${fifth}${sixth}`,
        },
      };
    });
  }, [inputOtp, setRegData]);

  return (
    <>
      <LabelText show={"block"}>Enter OTP sent to your mail</LabelText>
      <OTPContainer>
        <OTPInput
          onChange={handleOTP}
          onKeyDown={handleKeyDown}
          id="otp0"
          name={"first"}
          maxLength={1}
        />
        <OTPInput
          onChange={handleOTP}
          onKeyDown={handleKeyDown}
          id="otp1"
          name={"second"}
          maxLength={1}
        />
        <OTPInput
          onChange={handleOTP}
          onKeyDown={handleKeyDown}
          id="otp2"
          name={"third"}
          maxLength={1}
        />
        <OTPInput
          onChange={handleOTP}
          onKeyDown={handleKeyDown}
          id="otp3"
          name={"forth"}
          maxLength={1}
        />
        <OTPInput
          onChange={handleOTP}
          onKeyDown={handleKeyDown}
          id="otp4"
          name={"fifth"}
          maxLength={1}
        />
        <OTPInput
          onChange={handleOTP}
          onKeyDown={handleKeyDown}
          id="otp5"
          name={"sixth"}
          maxLength={1}
        />
      </OTPContainer>
    </>
  );
}

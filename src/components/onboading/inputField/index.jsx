import React, { useState } from "react";
import { EyeIcon, Input, InputFieldContainer, LabelText } from "./style";
import Eye from "assets/svg/eye.svg";
import Slash_Eye from "assets/svg/eye_slash.svg";

export default function InputField({
  isDisabled,
  placeholder,
  onBlur,

  value,
  handleFormChange,
  type,
  name,
  displayEye,
  label = "Choose linked account",
  show,
  noTitle = true,
}) {
  const [inputType, setInputType] = useState(type);

  function onClickEye() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  return (
    <>
      {noTitle && <LabelText show={show}>{label}</LabelText>}
      <InputFieldContainer>
        <Input
          placeholder={placeholder}
          type={inputType}
          name={name}
          onChange={handleFormChange}
          value={value}
          onBlur={onBlur}
          disabled={isDisabled}
        />
        {inputType === "text" && (
          <EyeIcon
            onClick={onClickEye}
            display={displayEye}
            src={Eye}
            alt="icon"
          />
        )}
        {inputType === "password" && (
          <EyeIcon
            onClick={onClickEye}
            display={displayEye}
            src={Slash_Eye}
            alt="icon"
          />
        )}
      </InputFieldContainer>
    </>
  );
}

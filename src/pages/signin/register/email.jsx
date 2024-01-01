import React from "react";
import { useRegContext } from "context/RegContext";
import InputField from "components/onboading/inputField";
import BrandColors from "GlobalStyles/utils/colors";
import { RegText } from "../common/style";
import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { LoginText } from "../Login/style";

export default function EmailForm({
  handleFormChange,
  passwordScore,
  setPasswordScore,
}) {
  const { regData } = useRegContext();
  return (
    <>
      <LoginText>Create an account</LoginText>
      
      <InputField
        value={regData.form.email || ""}
        name="email"
        show="block"
        handleFormChange={handleFormChange}
        placeholder="Start typing linked account username with @"
        displayEye={"false"}
        type="text"
        required="true"
      />
      <Div display="flex" justify="center" margin="20px 0 0 0">
      @ABCLIMITED
      </Div>
      {/* <LabelText show="block">Phone Number</LabelText> */}
      {/* <Phone />
      <PasswordForm
        passwordScore={passwordScore}
        setPasswordScore={setPasswordScore}
        handleFormChange={handleFormChange}
      /> */}
      <Div display="flex" justify="center" margin="20px 0 0 0">
        <RegText>
          By entering your username, you agree to the
          <SpottrLink to="/" color={BrandColors.brandColor}>
            {" "}
            Terms of Service & Privacy Policy{" "}
          </SpottrLink>
        </RegText>
      </Div>
    </>
  );
}

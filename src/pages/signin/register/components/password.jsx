import React from "react";
import PasswordStrengthBar from "react-password-strength-bar";

import { useRegContext } from "context/RegContext";
import InputField from "components/onboading/inputField";
import { LabelText } from "components/onboading/inputField/style";

export default function PasswordForm({ handleFormChange, setPasswordScore }) {
  const { regData } = useRegContext();

  return (
    <div style={{ marginTop: "30px" }}>
      <InputField
        value={regData.form.password}
        handleFormChange={handleFormChange}
        show="block"
        label="Create a password"
        name="password"
        placeholder="Enter your password"
        type="password"
        required="true"
      />
      <PasswordStrengthBar
        minLength={6}
        onChangeScore={(score) => setPasswordScore(score)}
        password={regData.form.password}
      />
      <LabelText show="block">12 Characters, Minimum <br/> Includes Number <br/> Symbols <br/> Capital Letter <br/> Lower-Case Letter</LabelText>
    </div>
  );
}

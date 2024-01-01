import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import InputField from "../../../components/onboading/inputField";
import Toast from "../../../components/UI/Toast";
import SigninTitleComponent from "../common/signinTitleComponent";

import Api from "../../../api";
import { RegContainer } from "../common/style";
import { LoginButton } from "../Login/style";
import { GeneralPasswordForm } from "../common/style";
import { LOGIN } from "../../../utilities/static/routes/routes";
import { useSelector } from "react-redux";

export default function ResetPasswordForm() {
  const loginRef = useRef();
  const history = useHistory();
  const [resetData, setResetData] = useState({});
  const user = useSelector((state) => state.authorize);
  const [messageContent, setMessageContent] = useState("");
  const [toastType, setToastType] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    Api.signin
      .resetPassword({
        email: user?.forgotEmail,
        code: resetData?.validationCode,
        password: resetData?.newPassword,
        confirmPassword: resetData?.confirmPassword,
      })
      .then((res) => {
        if (res.status) {
          setToastType("success");
          setMessageContent("Password reset success!");
          history.push(LOGIN);
        } else {
          setIsDisabled(false);
          setToastType("error");
          setMessageContent("Password reset failed!");
        }
      })
      .catch((error) => {
        console.log("ero", error);
        setIsDisabled(false);
        setToastType("error");
        setMessageContent("Network Error");
      });
    setShowModal(true);
  };

  React.useEffect(() => {
    console.log(user, "useruser");
    console.log(resetData, "resetData");
    if (
      !!user.forgotEmail &&
      !!resetData.validationCode &&
      !!resetData.newPassword &&
      !!resetData.confirmPassword
    ) {
      setIsDisabled(false);
    }
  }, [resetData, user]);

  const handleFormChange = (e) => {
    setResetData({ ...resetData, [e.target.name]: e.target.value });
  };

  return (
    <RegContainer>
      <SigninTitleComponent title="Reset Password" />
      <GeneralPasswordForm>
        <InputField
          label="Email Address"
          value={user.forgotEmail}
          name="newPassword"
          show="block"
          handleFormChange={handleFormChange}
          displayEye={"false"}
          type="email"
          required="true"
          isDisabled={true}
        />
        <InputField
          label="Confirmation Code"
          value={resetData.validationCode}
          type="number"
          name="validationCode"
          show="block"
          handleFormChange={handleFormChange}
          placeholder="Enter validation code"
          displayEye={"false"}
          required="true"
        />
        <InputField
          label="New Password"
          value={resetData.newPassword}
          name="newPassword"
          show="block"
          handleFormChange={handleFormChange}
          placeholder="Enter new password"
          displayEye={"false"}
          required="true"
        />
        <InputField
          label="Confirm Password"
          value={resetData.confirmPassword}
          name="confirmPassword"
          show="block"
          handleFormChange={handleFormChange}
          placeholder="Enter confirm password"
          displayEye={"false"}
          required="true"
        />
        <LoginButton
          bg="#274B89"
          disabled={isDisabled}
          ref={loginRef}
          onClick={handleSubmit}>
          Submit
        </LoginButton>
      </GeneralPasswordForm>
      <Toast
        icon={toastType}
        description={messageContent}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </RegContainer>
  );
}

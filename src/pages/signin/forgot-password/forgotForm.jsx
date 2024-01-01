import React, { useEffect, useRef, useState } from "react";

import * as EmailValidator from "email-validator";

import Toast from "../../../components/UI/Toast";
import InputField from "../../../components/onboading/inputField";
import SigninTitleComponent from "../common/signinTitleComponent";
import Api from "../../../api";
import { RegContainer } from "../common/style";
import { LoginButton } from "../Login/style";
import { GeneralPasswordForm } from "../common/style";
import { useDispatch, useSelector } from "react-redux";
import { setforgetEmail } from "store/authorize/authorizeReducer";
import { RESETPASSWORD } from "../../../utilities/static/routes/routes";
import { useHistory } from "react-router-dom";

export default function ForgotPasswordForm() {
  const dispatch = useDispatch();
  const { forgotEmail } = useSelector((state) => state.authorize);
  const loginRef = useRef();
  const history = useHistory();
  const [messageContent, setMessgeContent] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [iconName, setIconName] = useState("");

  const handleSubmit = () => {
    const isEmailValidated = EmailValidator.validate(forgotEmail);
    if (!isEmailValidated) {
      setIconName("error");
      setMessgeContent("Please input a valid email");
      setShowModal(true);
      setIsDisabled(false);
    } else {
      Api.signin
        .forgotPassword({ identifier: forgotEmail })
        .then((res) => {
          if (res.status) {
            setIconName("success");
            setMessgeContent("Please check your email.");
            setShowModal(true);
            history.push(RESETPASSWORD);
            setIsDisabled(false);
          }
        })
        .catch((error) => {
          if (error) {
            setIconName("error");
            setMessgeContent("Email address does not exist");
            setShowModal(true);
            setIsDisabled(false);
            setTimeout(
              () =>
                //   dispatch(setAll)
                setforgetEmail(""),
              3000
            );
          }
        });
    }
  };

  const handleFormChange = (e) => {
    dispatch(setforgetEmail(e.target.value));
  };

  useEffect(() => {
    if (!EmailValidator.validate(forgotEmail)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [forgotEmail]);

  return (
    <RegContainer>
      <SigninTitleComponent title="Forgot Password" />
      <GeneralPasswordForm>
        <InputField
          value={forgotEmail}
          name="forgotEmail"
          show="block"
          handleFormChange={handleFormChange}
          placeholder="Enter a correct email address"
          displayEye={"false"}
          type="email"
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
        icon={iconName}
        description={messageContent}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </RegContainer>
  );
}

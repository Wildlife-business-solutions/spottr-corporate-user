import React, { useEffect, useRef, useState } from "react";
import * as EmailValidator from "email-validator";

import { useRegContext } from "context/RegContext";
import { useCorporateUser } from "context/userDetails";

import { DASHBOARD, LOGIN } from "utilities/static/routes/routes";
import SocialButton from "components/onboading/socialButton";
import EmailForm from "./email";
import OTPForm from "./components/otp";
import Toast from "components/UI/Toast/index";
import ContactDetails from "./components/contact-detail";
import Api from "../../../api";
import { LoginButton, LoginText, UseSocials } from "pages/signin/Login/style";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { BackText, RegContainer, SignupForm } from "../common/style";
import backArrow from "assets/svg/backArrow.svg";
import { useHistory } from "react-router";
import PasswordForm from "./components/password";
import CompanyLocation from "./components/company-location";
import DescribeCompany from "./components/describe-company";
import AllSet from "./components/all-set";

export default function RegForm() {
  const { regData, setRegData } = useRegContext();
  const { corporateUser, setCorporateUser } = useCorporateUser();
  const loginRef = useRef("");
  const history = useHistory();
  const [passwordScore, setPasswordScore] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [toastType, setToastType] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { pageCount } = regData;

  function onNext(e) {
    e.preventDefault();
    if (pageCount === 0) {
      const { email, phoneNumber, phoneNumber_withoutCountryCode } =
        regData.form;
      const isEmail = !!email;
      const isPhone = !!phoneNumber;
      const isEmailValidated = EmailValidator.validate(email);
      loginRef.current.textContent = "loading...";
      if (!isEmail) {
        const errorMessage = "please input username";
        setToastType("error");
        setMessageContent(errorMessage);
        setShowModal(true);
        setIsDisabled(false);
        loginRef.current.textContent = "Continue";
        return;
      } else if (!isPhone) {
        // const errorMessage = "please input phone number";
        // setToastType("error");
        // setMessageContent(errorMessage);
        // setShowModal(true);
        // setIsDisabled(false);
        // loginRef.current.textContent = "Continue";
        // return;
      } else if (phoneNumber_withoutCountryCode.length !== 10) {
        // const errorMessage = "Phone number in invalid";
        // setToastType("error");
        // setMessageContent(errorMessage);
        // setShowModal(true);
        // setIsDisabled(false);
        // loginRef.current.textContent = "Continue";
        // return;
      }
      if (!isEmailValidated) {
        // const errorMessage = "please input a valid email";
        // setToastType("error");
        // setMessageContent(errorMessage);
        // setShowModal(true);
        // setIsDisabled(false);
        // loginRef.current.textContent = "Continue";
        // return;
      }
      if (passwordScore < 3) {
        // const errorMessage = "Password not strong enough";
        // setToastType("error");
        // setMessageContent(errorMessage);
        // setShowModal(true);
        // setIsDisabled(false);
        // loginRef.current.textContent = "Continue";
        // return;
      }
      Api.signin.generateOTP({ identifier: regData.form.email }).then((res) => {
        setIsDisabled(false);
        loginRef.current.textContent = "Continue";
        if (res.status === true) {
          const errorMessage = "Otp Generation Succcessful";
          setToastType("success");
          setMessageContent(errorMessage);
        } else if (res.status === false) {
          setToastType("error");
          setMessageContent(res.message);
        }
      });
    }
    if (pageCount === 1) {
      Api.signin
        .verifyOTP({ identifier: regData.form.email, code: regData.form.otp })
        .then((res) => {
          setIsDisabled(false);
          loginRef.current.textContent = "Continue";
          if (res.status === true) {
            const errorMessage = "Otp Validation Succcessful";
            setToastType("success");
            setMessageContent(errorMessage);
            setShowModal(true);
          } else if (res.status === false) {
            setToastType("error");
            setMessageContent(res.message);
            setShowModal(true);
            setIsDisabled(false);
            loginRef.current.textContent = "Continue";
          }
        });
        setIsDisabled(false);
      }
      
      if (pageCount === 3) {
        loginRef.current.textContent = "Continue";
        setIsDisabled(true);
      
    }
    setRegData({
      ...regData,
      pageCount: regData.pageCount + 1,
    });
  }

  function onPrev() {
    if (pageCount === 0) {
      history.push(LOGIN);
    }
    if (pageCount === 3) {
      const err = "Please Continue Registration";
      setToastType("error");
      setMessageContent(err);
      setShowModal(true);
    }
    console.log("first");
    setRegData({
      ...regData,
      pageCount: regData.pageCount - 1,
    });
  }

  function handleFormChange(e) {
    setRegData({
      ...regData,
      form: {
        ...regData.form,
        [e.target.name]: e.target.value,
      },
    });
  }
  window.onpopstate = function () {
    onPrev();
    history.push(LOGIN);
  };

  useEffect(() => {
    if (pageCount === 0) {
      setIsDisabled(false);
    }

    if (pageCount === 1) {
      if (regData?.form?.otp?.length === 6) {
        setIsDisabled(false);
        return;
      }
      setIsDisabled(true);
    }
    if (pageCount === 3) {
      if (
        regData.form.username === "" ||
        regData.form.brandName === "" ||
        regData.form.companyLocation === "" ||
        regData.form.companyDescription === "" ||
        regData.form.contactEmail === "" 
      ) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    }

    if (pageCount === 4) {
      setIsDisabled(false);
    }

    if (pageCount === 5) {
      setIsDisabled(false);
    }
  }, [pageCount, regData, isDisabled]);

  return (
    <RegContainer className={pageCount === 3 && "contactDetail"}>
      {pageCount !== 3 ? (
        <>
          <Div onClick={onPrev} margin="0 0 50px 0" display="flex">
            <img src={backArrow} alt="arrow" />
            <BackText>Go Back</BackText>
          </Div>

          
          
        </>
      ) : null}
      <SignupForm className={pageCount === 3 && "contactDetail"}>
        
        {pageCount === 0 ? (
          <>
            <EmailForm
              handleFormChange={handleFormChange}
              passwordScore={passwordScore}
              setPasswordScore={setPasswordScore}
            />
          </>
        ) : null}

        {pageCount === 1 ? (
          <OTPForm
            setToastType={setToastType}
            setMessageContent={setMessageContent}
            handleFormChange={handleFormChange}
          />
        ) : null}

        {pageCount === 2 ? (
          <>
            <PasswordForm
              passwordScore={passwordScore}
              setPasswordScore={setPasswordScore}
              handleFormChange={handleFormChange}
            />
          </>
        ) : null}

        {pageCount < 2 ? (
          <UseSocials>
            <p>Or use</p>
            <Div display="flex" margin="40px 0" width="100%" justify="center">
              <SocialButton type="fb" />
              <SocialButton type="google" />
            </Div>
          </UseSocials>
        ) : null}
        {pageCount === 3 ? (
          <ContactDetails handleFormChange={handleFormChange} />
        ) : null}

        {pageCount === 4 ? (
          <CompanyLocation handleFormChange={handleFormChange} />
        ) : null}

        {pageCount === 5 ? (
          <DescribeCompany handleFormChange={handleFormChange} />
        ) : null}

        {pageCount === 6 ? (
          <AllSet />
        ) : null}
        <div>
          <LoginButton
            bg="#274B89"
            disabled={isDisabled}
            ref={loginRef}
            onClick={onNext}>
            Continue
          </LoginButton>
        </div>
      </SignupForm>
      <Toast
        icon={toastType}
        description={messageContent}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </RegContainer>
  );
}

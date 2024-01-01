import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

import { useRegContext } from "context/RegContext";
import { useCorporateUser } from "context/userDetails";
import * as EmailValidator from "email-validator";
import InputField from "components/onboading/inputField";
import SocialButton from "components/onboading/socialButton";
import backArrow from "../../../assets/svg/backArrow.svg";
import Toast from "components/UI/Toast";
import { Div } from "GlobalStyles/spotrrStyles/style";
import {
  ErrorMessage,
  ForgotPasswordText,
  FormContainer,
  LoginButton,
  LoginForm,
  LoginText,
  UseSocials,
} from "./style";
import { ONBOARDING } from "utilities/static/routes/routes";
import Api from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { BackText } from "../common/style";
import { setCorporateToken } from "store/corporateUserDetails/corporateUserDetailsReducer";
import { setAllData, setLocation } from "store/authorize/authorizeReducer";

export default function Form() {
  const history = useHistory();
  const [login, setLogin] = useState({});
  const { corporateUser, setCorporateUser } = useCorporateUser();
  const { regData, setRegData } = useRegContext();
  const { data, token, isAuth } = useSelector((state) => state.authorize);

  const dispatch = useDispatch();
  const loginRef = useRef();
  const errRef = useRef("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [errValidate, setErrValidate] = useState({
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleChange(e) {
    if (e.target.name === "identifier") {
      setTouched({ ...touched, email: true });
    }
    if (e.target.name === "password") {
      setTouched({ ...touched, password: true });
    }

    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    });
  }, []);

  useEffect(() => {
    setRegData({
      ...regData,
      pageCount: 0,
    });
    if (touched.email || touched.password) {
      if (!!login.identifier && !!login.password) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
      if (touched.email) {
        if (
          !EmailValidator.validate(login.identifier) &&
          login.identifier !== ""
        ) {
          setErrValidate({ ...errValidate, email: "Invalid Email" });
        }
        if (
          EmailValidator.validate(login.identifier) &&
          login.identifier !== ""
        ) {
          setErrValidate({ ...errValidate, email: "" });
        }
        if (login.identifier === "") {
          setErrValidate({ ...errValidate, email: "Email Required" });
        }
      }
      if (touched.password) {
        if (!passwordValidator(login.password) && login.password !== "") {
          setErrValidate({ ...errValidate, password: "Password not valid" });
        }
        if (passwordValidator(login.password) && login.password !== "") {
          setErrValidate({ ...errValidate, password: "" });
        }
        if (login.password === "") {
          setErrValidate({ ...errValidate, password: "Password required" });
        }
      }
    }
  }, [login, touched]);

  const passwordValidator = (str) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const email = !!login.identifier;
    const password = !!login.password;
    loginRef.current.textContent = "Loading...";
    setIsDisabled(true);
    if (!email || !password) {
      const err = "please fill in all fields";
      loginRef.current.textContent = "Continue";
      setIsDisabled(false);
      setErrMessage(err);
      setShowModal(true);
      return;
    }

    Api.signin
      .login(login)
      .then((res) => {
        loginRef.current.textContent = "Continue";
        setIsDisabled(false);
        if (res?.hasCompletedProfile === false) {
          setRegData({
            ...regData,
            token: res.data.token,
          });
          history.push(ONBOARDING);
        }
        if (res.status === true) {
          //continue login
          console.log(res.data, "allData");
          const { token, refreshToken, user } = res.data;
          const message = "Login Successful";
          setIsDisabled(false);
          setErrMessage(message);
          setShowModal(true);
          // setUser({
          //   isAuth: true,
          //   token,
          //   refreshToken,
          //   data: user,
          // });
          dispatch(
            setAllData({ isAuth: true, token, refreshToken, data: user })
          );
          dispatch(setCorporateToken(token));
          setCorporateUser({
            ...corporateUser,
            token,
          });
        } else if (res.status === false) {
          if (res.message.includes("verify account")) {
            setRegData({
              ...regData,
              pageCount: 1,
              form: {
                email: login.identifier,
              },
            });
            history.push("/join");
            return;
          }
          const err = "email or password is/are incorrect";
          setIsDisabled(false);
          setErrMessage(err);
          setShowModal(true);
        }
      })
      .catch((err) => {
        loginRef.current.textContent = "Continue";
        setIsDisabled(false);
        setErrMessage(err.response.data.message);
        setShowModal(true);
      });
  }

  const handleForgot = () => {
    history.push("/forgot-password");
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/dashboard");
    }
  }, [data, isAuth, history]);

  return (
    <FormContainer>
      <Div onClick={() => history.goBack()} margin="0 0 50px 0" display="flex">
        <img src={backArrow} alt="arrow" />
        <BackText>Go Back</BackText>
      </Div>
      <LoginText>Login to your account</LoginText>
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          value={login.identifier || ""}
          handleFormChange={handleChange}
          placeholder="Email address"
          name="identifier"
          displayEye={"false"}
          type="email"
          required="true"
        />
        {!!errValidate.email && (
          <ErrorMessage> {errValidate.email}</ErrorMessage>
        )}
        <InputField
          value={login.password || ""}
          handleFormChange={handleChange}
          placeholder="Enter your password"
          name="password"
          type="password"
          required="true"
        />
        {!!errValidate.password && (
          <ErrorMessage> {errValidate.password}</ErrorMessage>
        )}
        <Div display="flex" justify="flex-end">
          <ForgotPasswordText onClick={handleForgot}>
            Forgot Password
          </ForgotPasswordText>
        </Div>
        <UseSocials>
          <p>Or use</p>
          <Div
            display="flex"
            margin="15px 0px 45px"
            width="100%"
            justify="center">
            <SocialButton type="fb" />
            <SocialButton type="google" />
          </Div>
        </UseSocials>
        <small style={{ color: "red", textalign: "center" }} ref={errRef} />
        <LoginButton bg="#274B89" disabled={isDisabled} ref={loginRef}>
          Continue
        </LoginButton>
      </LoginForm>
      <Toast
        icon="error"
        description={errMessage}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </FormContainer>
  );
}

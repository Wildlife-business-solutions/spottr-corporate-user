import React from 'react'
import {LoginPageContainer} from "../Login/style";
import LeftLayout from "../../../components/onboading/leftLayout";
import ForgotPasswordForm from "./forgotForm";

export default function ForgotPassword() {

    return (
        <LoginPageContainer>
            <LeftLayout buttonText = 'Login' />
            <ForgotPasswordForm />
        </LoginPageContainer>
    )
}

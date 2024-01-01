import React from 'react'
import LeftLayout from "../../../components/onboading/leftLayout";
import ResetPasswordForm from "./resetFrom";
import {LoginPageContainer} from "../Login/style";

export default function ResetPassword() {
    return (
        <LoginPageContainer>
            <LeftLayout buttonText = 'Login' />
            <ResetPasswordForm />
        </LoginPageContainer>
    )
}
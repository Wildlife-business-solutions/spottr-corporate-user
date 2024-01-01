import React from 'react'

import LeftLayout from 'components/onboading/leftLayout'
import Form from './form'

import {LoginPageContainer} from './style'

export default function Login() {

    return (
        <LoginPageContainer>
            <LeftLayout buttonText = 'Sign Up' />
            <Form />
        </LoginPageContainer>
    )
}

import React from 'react'
import { SocialButtonContainer, SocialIcon, ButtonText } from './style'

import facebook from 'assets/facebook-icon.png'
import google from 'assets/google-icon.png'

export default function SocialButton({type}) {
    const handleSocialLogin = () => {
        //TODO: add the social login api
    }
    return (
        <SocialButtonContainer onClick={handleSocialLogin}>
            <SocialIcon src={type === "fb" ? facebook : google } alt='icon' />
            <ButtonText type={type}>
                {type === "fb" ? "facebook" : "google"}
            </ButtonText>
        </SocialButtonContainer>
    )
}

import React from 'react'
import { ShortProfileDiv } from './style'
import UserIcon from 'assets/svg/userIcon.svg'

export default function ShortProfile() {
    return (
        <ShortProfileDiv>
            <img src={UserIcon} alt='user' />
            <div>
                <h2>Adewale Adedamola</h2>
                <p>@adedamola456</p>
            </div>
        </ShortProfileDiv>
    )
}

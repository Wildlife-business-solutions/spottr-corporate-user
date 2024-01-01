import React from 'react'
import { WalletButtonDiv } from './style'

export default function WalletButton({icon, text}) {
    return (
        <WalletButtonDiv>
            <img src={icon} alt={text} />
            <p>{text}</p>
        </WalletButtonDiv>
    )
}

import React from 'react'
import { OptionsDiv } from './style'

export default function Options({text = 'Display QR code'}) {
    return (
        <OptionsDiv>
            <p>{text}</p>
        </OptionsDiv>
    )
}

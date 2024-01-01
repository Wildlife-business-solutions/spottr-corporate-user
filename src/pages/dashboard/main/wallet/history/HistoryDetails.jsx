import React from 'react'
// import downIcon from 'assets/svg/dropdown.svg'
import downIcon from 'assets/svg/fDrop.svg'
import { DepositText, HistoryDetailsDiv } from './style'

export default function HistoryDetails() {
    return (
        <HistoryDetailsDiv>
            <img src={downIcon} alt='user' />
            <DepositText style={{width:'60%'}}>
                <h2>You Deposited</h2>
                <p>Cash</p>
            </DepositText>
            <DepositText>
                <h3>NGN 500</h3>
                <p>12/02/1998</p>
            </DepositText>
        </HistoryDetailsDiv>
    )
}

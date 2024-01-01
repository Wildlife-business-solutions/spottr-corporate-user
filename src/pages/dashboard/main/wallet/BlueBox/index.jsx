import React from 'react'
import FundButton from './FundButton'
import { BalanceArea, 
         BlueBoxDiv, 
         FundArea} from './style'
import openWhiteEye from 'assets/whiteEye.png'

export default function BlueBox() {
    return (
        <BlueBoxDiv>
            <BalanceArea>
                <p>Current Balance</p>
                <h1>₦3,456,983</h1>
            </BalanceArea>
            <FundArea>
                <img src={openWhiteEye} alt='eye' />
                <FundButton />
            </FundArea>
        </BlueBoxDiv>
    )
}

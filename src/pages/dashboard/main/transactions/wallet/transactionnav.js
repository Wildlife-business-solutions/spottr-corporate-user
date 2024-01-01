import React from 'react'
import { Div } from "GlobalStyles/spotrrStyles/style";

const TransactionNav = ({ titleLeft, action, tokenPayment, showTransactionPin }) => {
    return (
        <Div style={{ top: '75px', left: '110px' }} pos="absolute" display="flex" justify="space-between" alignI="center" width="470px">
            <Div display="flex" justify="space-between" alignI="center">
                {!showTransactionPin && <img src={tokenPayment} alt="alert" />}
                <p style={{ paddingLeft: showTransactionPin ? '0' : '10px', color: '#274B89' }}>{titleLeft}</p>
            </Div>

            <p onClick={action} className="btnBack">Back</p>
        </Div>
    )
}

export default TransactionNav

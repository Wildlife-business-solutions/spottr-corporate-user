import React from 'react'
import { Div } from "GlobalStyles/spotrrStyles/style";

const Singlecard = ({
    image,
    type,
    amount
    // payment,
    // withdrawal,
    // activities,
    // bg
}) => {

    
    return (
        <Div>
            <Div height="83px" width="200px" backgroundColor={type === 'Fiat Wallet' ? 'hsla(88, 50%, 67%, 0.1)' : type === 'Cliq Token' ? 'hsla(7, 100%, 69%, 0.1)' : type === 'SUSD' ? 'hsla(41, 100%, 69%, 0.1)' : ''} br="8px" padding="10px 20px" fw="100" margin="0 0 10px 0">
                <Div display="flex" alignI="center" padding="10px 0">
                    <img src={image} alt="wallet"/>
                    <p style={{textTransform: 'capitalize', paddingLeft: '10px'}}>{type}</p>
                </Div>
                <h3>N{amount}</h3>
            </Div>
            <Div display="flex" justify="space-between" alignI="center" fw="100" padding="3px 5px">
                <p>Payment</p>
                <p style={{ color: '#39B54A' }}>N{0}</p>
            </Div>
            <Div display="flex" justify="space-between" alignI="center" fw="100" padding="3px 5px">
                <p>Withdrawal</p>
                <p style={{ color: '#FF4B3E' }}>N{0}</p>
            </Div>
        </Div>
    )
}

// walletData.reduce((prev, curr) => prev + curr.balance, 0)

export default Singlecard

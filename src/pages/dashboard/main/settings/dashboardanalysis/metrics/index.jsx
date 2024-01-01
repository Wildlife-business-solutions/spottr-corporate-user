import { Div } from 'GlobalStyles/spotrrStyles/style.js'
import React from 'react'
import {MetricsContainer} from './style.js'
import loss from 'assets/mem/loss.svg'
import gain from 'assets/mem/gain.svg'


export default function Metrics({text='search', number=456, percent='20%'}) {
    return (
        <MetricsContainer>
            <p>{text}</p>
            <h2>{number}</h2>
            <Div display='flex' alignI='center'>
                <img src={number < 5 ? loss : gain} alt="loss or gain"/>
                <small style={{paddingLeft: '5px'}}>{percent}</small>
            </Div>
        </MetricsContainer>
    )
}

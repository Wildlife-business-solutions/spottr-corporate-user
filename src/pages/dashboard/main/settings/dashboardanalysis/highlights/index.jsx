import React from 'react'
import { HighlightsDiv, StatDivision } from './style'
import {Div} from 'GlobalStyles/spotrrStyles/style'


export default function Highlights({title="Highlights", first='Account reached', fnumber=5769 , fpercent='-63.8%', second='Opportunities', snumber=30, spercent="8%"}) {
    return (
        <HighlightsDiv>
            <Div display="flex" alignI="center" justify="space-between">
                <h2>{title}</h2>
            </Div>

            <StatDivision>
                <div>
                    <p>{fnumber}</p>
                    <small>{first}</small>
                </div>
                <small>{fpercent}</small>
            </StatDivision>
            <StatDivision>
                <div>
                    <p>{snumber}</p>
                    <small>{second}</small>
                </div>
                <small>{spercent}</small>
            </StatDivision>
        </HighlightsDiv>
    )
}

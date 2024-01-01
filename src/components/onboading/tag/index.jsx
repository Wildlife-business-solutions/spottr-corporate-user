import React from 'react'
import { TagDiv } from './style'

export default function Tag({tag}) {
    return (
        <TagDiv>
            <p>{tag}</p>
            <p>x</p>
        </TagDiv>
    )
}

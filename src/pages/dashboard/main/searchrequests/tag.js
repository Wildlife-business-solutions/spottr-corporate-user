import React from 'react'
import { TagDiv } from './style'

export default function Tag({ icon, tag }) {
    return (
        <TagDiv>
            <img src={icon} alt='img' />
            <p>{tag}</p>
        </TagDiv>
    )
}

import React from 'react'
import {ReactComponent as Dots} from 'assets/svg/dots.svg'
import { TopicDiv } from './style'

export default function TitleHead({title='Best Performances'}) {
    return (
        <TopicDiv>
            <p>{title}</p>
            <Dots />
        </TopicDiv>
    )
}

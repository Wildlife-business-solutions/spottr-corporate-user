import React from 'react'
import { AuthText, AuthTopic, AuthTopicContainer } from './style'
import { Div } from 'GlobalStyles/spotrrStyles/style'

export default function AuthPageTopics({icon, topic, text}) {
    return (
        <AuthTopicContainer>
            <Div 
            display='flex'
            margin= '0 0 10px 0'
            >
                <img src={icon} alt='icon' />
                <AuthTopic>{topic}</AuthTopic>
            </Div>
            <div>
                <AuthText>{text}</AuthText>
            </div>
        </AuthTopicContainer>
    )
}

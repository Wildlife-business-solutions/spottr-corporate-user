import React from 'react'
import {useRegContext} from "../../../context/RegContext";

import AuthPageTopics from './authPageTopics'
import {topicData} from './topicData'
import {LOGIN, SIGNUP} from 'utilities/static/routes/routes'
import {
    CircleContainer,
    InnerCircle,
    LeftLayoutContainer,
    SpottrText,
    WelcomeText, WomanImg
} from './style'
import {SpottrLink} from 'GlobalStyles/spotrrStyles/style'
import {Button, Div, Img} from 'GlobalStyles/spotrrStyles/style'
import HeaderBgSvg from 'assets/svg/headerbg.svg'
import ForwardArrow from 'assets/svg/arrow-forward.svg'

export default function LeftLayout({buttonText}) {
    const {regData} = useRegContext()

    return (
        <LeftLayoutContainer bgType={regData.pageCount !== 3}>
            {regData.pageCount === 3 ?
            <Div>
                <WomanImg src={HeaderBgSvg} alt="woman" />
            </Div>
            : <>
                <CircleContainer>
                    <InnerCircle/>
                </CircleContainer>
                <Div>
                    <WelcomeText>Welcome to</WelcomeText>
                    <SpottrText>Spottr</SpottrText>
                </Div>
                <Div display='flex' wrap='wrap' width='100%' justify='center'>
                    {
                        topicData.map((topic, i) => <AuthPageTopics key={i} topic={topic.topic} icon={topic.icon}
                                                                    text={topic.text}/>)
                    }
                </Div>
                <Div display='flex' alignI='center'>
                    <p>Open your own account</p>
                    <Img src={ForwardArrow} alt='arrow'/>
                    <SpottrLink to={buttonText.toLowerCase() === 'login' ? LOGIN : SIGNUP}>
                        <Button br="20px" w="90px" color="#274B89" p="10px" m='0 15px'>
                            {buttonText}
                        </Button>
                    </SpottrLink>
                </Div>
            </>
            }

        </LeftLayoutContainer>
    )
}

import BrandColors from 'GlobalStyles/utils/colors'
import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const LeftLayoutContainer = styled.div`
    max-width: 50vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${({ bgType }) => bgType ? BrandColors.brandBlue : 'none'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    position: fixed;

    ${media.tablet`
        display: none;
  `}

`

export const WomanImg = styled.img`
    width: 100%;
    height: 100%;
`

export const CircleContainer = styled.div`
    width: 40vw;
    height: 40vw;
    border: 100px solid white;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.07;
    top: -145px;
    left: -20px;
`

export const InnerCircle = styled.div`
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background-color: white;
`

export const WelcomeText = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 47.2431px;
    line-height: 64px;
`
export const SpottrText = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 95.7132px;
    line-height: 131px;
`

export const AuthTopicContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    img{
        width: 24px;
        height: 24px;
    }
`

export const AuthTopic = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin-left: 10px;
`

export const AuthText = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 158.8%;
    color: #C2E0FF;
    margin-left: 4px;
`
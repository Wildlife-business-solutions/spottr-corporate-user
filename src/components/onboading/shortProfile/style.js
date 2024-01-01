import styled from 'styled-components/macro'

export const ShortProfileDiv = styled.div`
    display: flex;
    background: #FFFFFF;
    border: 0.96px solid rgba(154, 159, 191, 0.25);
    box-sizing: border-box;
    border-radius: 3px;
    /* height: 50px; */
    padding: 10px;
    align-items:center;
    justify-content: center;

    h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 14.6154px;
        line-height: 20px;
        color: #000000;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 14.6154px;
        line-height: 20px;
        color: #C4C4C4;
    }

    div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 10px;

    }
`
import styled from 'styled-components/macro'

export const OTPContainer = styled.div`
    background-color: #f0f0f0;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    width:100%;
    margin-bottom: 25px;

    :focus{
        border: 1px solid #274B89;  
    }

    :placeholder{
        color: #c4c4c4;
    }
`
export const OTPInput = styled.input`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16.86px;
    color: #C4C4C4;
    width: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #C4C4C4;
    background: none;
    margin: 0 10px;
`
import styled from 'styled-components/macro';

export const SwitchWrapper = styled.label`
    position: relative;
`
export const SwitchInput = styled.input`
    position:absolute;
    left:-9999px;
    top:-9999px;
    &:checked + span {
        background-color:#E1EFFB;
        &:before {
            left:calc(100%);
            transform: translateX(-100%);
            background:#274B89;
            width:16px;
            height:16px;
            border-radius:60px;
            top:-1px;
        }
    }
`
export const SwitchSlider = styled.span`
    display:flex;
    cursor:pointer;
    width:35px;
    height:15px;
    border-radius:100px;
    background-color:#E7E7E7;
    position:relative;
    transition:background-color 0.2s;

    &:before{
        content:"";
        position:absolute;
        top:0px;
        left:1px;
        width:16px;
        height:16px;
        border-radius:45px;
        transition:0.2s;
        background:#C4C4C4;
        /* box-shadow: */
    }
    &:active:before{
        width:35px;
        background:#39B54A;

    }
`;
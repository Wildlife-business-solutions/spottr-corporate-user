import styled from 'styled-components/macro'

export const SharedDiv = styled.div`
    // height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E7E7E7;
    // margin-top: 10px;
    // width: 450px;
    
    `
    
    export const SharedText = styled.p`
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Nunito;
    padding: 20px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    // line-height: 22px;
    color: ${({color})=>color==='red'?'#FF4B3E':'#274B89'};
    transition: .4s;

    &:hover{
        color: ${({ color }) => color === 'red' ? 'hsla(4, 100%, 62%, 0.7)' : 'hsla(218, 56%, 35%, 0.7)'};
    }
    
`
import styled from 'styled-components/macro';
import media from 'GlobalStyles/utils/media'


export const TransactionpinContainer = styled.div`
    width: 430px;
    height: 540px;
    background: rgba(255, 255, 255, 0.8);
    border: 0.2px solid #BBC4D4;
    box-sizing: border-box;
    border-radius: 8px;
    margin-left:15px;
    padding:35px 30px 10px 35px;
    
    ${media.mobile`
    margin-left:0px;
        width:100%;
    `}
`;
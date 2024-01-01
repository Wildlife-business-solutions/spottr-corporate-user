import styled from 'styled-components/macro';
import media from 'GlobalStyles/utils/media'


export const CurrenciesItemsFiat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:150px;
    background: rgba(174, 213, 129, 0.1);
    border: 1px solid #7FBA56;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 0px 20px 0px 20px;
    ${media.mobile`
    width: 100%;
    `}
`;
export const CurrenciesItemsCliqToken = styled.div`
    display: flex;
    flex-direction: column;
    height:150px;
    justify-content: center;
    background: #FDEFED;
    box-shadow: 0px 4px 7px rgba(245, 73, 59, 0.19);
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 0px 20px 0px 20px;
    ${media.mobile`
    width: 100%;
    `}
`;
export const CurrenciesItemsSUSD = styled.div`
    display: flex;
    flex-direction: column;
    height:150px;
    justify-content: center;
    background: rgba(255, 203, 95, 0.1);
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 0px 20px 0px 20px;
    ${media.mobile`
    width: 100%;
    `}
`;

 export const TransactionBody = styled.div`
 display: flex;

`;
export const CurrencyContainer = styled.div`
    display: flex;
    width: 70%;
    height: 100px;
    background-color:red;
    flex-direction: column;
    ${media.mobile`
    width: 100vw;
    `}
`;
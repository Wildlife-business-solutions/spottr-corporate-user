import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const WalletsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
`
export const WalletTop = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    ${media.mobile`
        flex-direction: column;
    `}
`

export const AmountArea = styled.div`
    width: 54%;
    height: 166px;
    background: rgba(255, 255, 255, 0.8);
    border: 0.2px solid #BBC4D4;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    ${media.mobile`
        width: 100%;
        flex-direction: column;
        height: auto;
        border: none;
    `}
`

export const StatementArea = styled.div`
    width: 44%;
    height: 166px;
    background: #FFFFFF;
    border: 0.2px solid #BBC4D4;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    ${media.mobile`
        display: none;
    `}
`

export const WalletText = styled.p`
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    margin-top: 15px;
    margin-bottom: 5px;
    color: #274B89;
`

export const WalletButtonDiv = styled.div`
    width:100%;
    height: 42px;
    background: #ECF7FF;
    border: 1.07834px solid #f7f7f7;
    box-sizing: border-box;
    border-radius: 4.31336px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
    cursor:pointer;

    img{
        width: 22px;
        height: 22px;
        margin-right: 10px;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 12.9401px;
        line-height: 18px;
        color: rgba(59, 59, 59, 0.7);
    }

    ${media.mobile`
        width: 138px;
    `}
   
`

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    ${media.mobile`
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    `}
`

export const OptionsContainer = styled.div`

`

export const HistoryArea = styled.div`
    display: flex;
    max-width: 100%;
    height: 321px;
    justify-content: space-between;
    margin-top: 15px;
    overflow: scroll;

    ${media.mobile`
        overflow: scroll;
    `}
`


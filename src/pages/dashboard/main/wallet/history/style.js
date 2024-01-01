import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const HistoryDiv = styled.div`
    width: 340px;
    height: 521px;
    background: rgba(255, 255, 255, 0.8);
    border: 0.2px solid #BBC4D4;
    border-radius: 8px;
    padding: 10px 15px;
    margin-right: 10px;
    
    
    

    ${media.mobile`
        /* width: 100vw; */
        flex: 0 0 100%;
        margin-right: 20px;
    `}
`

export const WalletBoxDiv = styled.div`
    width: 100%;
    height: 107px;
    background: rgba(174, 213, 129, 0.1);
    border-radius: 10px;
    display: flex;
    padding: 10px;
    margin: 0 auto;
    justify-content: space-between;

    ${media.mobile`
        /* background: blue; */
        width: 97%;
    `}
`

export const Eye = styled.img`
    margin-top: 25px;
    margin-left: 20px;
    cursor: pointer;
`

export const PriceArea = styled.div`

    div{
        margin-top: 10px;
        align-items: center;
        /* width: 80%; */
    }

    img{
        margin-right: 10px;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #274B89;
    }

    h1{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #274B89;
        margin-top: 10px;
    }
`

export const ViewArea = styled.div`

    div{
        display: flex;
        margin-top: 10px;
        align-items: space-between;

        p{
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            color: #274B89;
            margin-right: 5px;
        }
    }
`

export const HistoryData = styled.div`
    width: 100%;
`
export const HistoryDetailsDiv = styled.div`
    width: 100%;
    height: 49px;
    display: flex;
    align-items: center;

    img{
        margin-right: 10px;
        height: 20px;
        width: 20px;
    }
`

export const DepositText = styled.div`

    h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 150%;
        color: #929AA7;
    }

    h3{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        text-align: right;
        color: #39B54A;
    }
`
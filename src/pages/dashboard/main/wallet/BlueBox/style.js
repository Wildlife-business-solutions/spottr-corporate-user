import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const BlueBoxDiv = styled.div`
    width: 65%;
    height: 127px;
    background: #274B89;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    /* align-self: center; */
    
    ${media.mobile`
        width: 100%;
        height: 127px;
    `}
`

export const BalanceArea = styled.div`
    padding:10px;

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }

    h1{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #FFFFFF;
    }
`

export const FundArea = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 5px;

    img{
        width:14px;
        height: 9px;
        float: right;
        cursor: pointer;
        /* margin-right: 20px; */
    }

`

export const FundButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 6.12121px 10.1217px 29.3226px rgba(39, 75, 137, 0.12);
    border-radius: 22.1894px;
    width:90px;
    /* height: 34px; */
    padding: 8px;
    margin-top: 13px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 11px;
        height: 11px;
        background: #274B89;
        color: white;
        text-align: center;
        border-radius: 50%;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 9.18182px;
        line-height: 13px;
        color: #274B89;
    }
`
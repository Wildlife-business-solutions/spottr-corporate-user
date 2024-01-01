import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const SingleProductContainer = styled.div`
    width: 100%;
    padding: 50px;
    /* background-color: #EBEBEB; */
    ${media.mobile`
        overflow: scroll;
        padding: 0;
    `}
`

export const MainArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    ${media.mobile`
        flex-direction: column;
    `}
`

export const MapContainer = styled.div`
    width: 100%;
    height: 152px;
`

export const ProductDetailsDiv = styled.div`
    /* width: 512px; */
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: -40px;
    height: 120px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);

    ${media.mobile`
        width: 90%;
    `}
    
`

export const ProductData = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    border-radius: 3px;

    img{
        height: 68px;
        width: 109px;
        border: 1px solid #ececec;
        margin-right: 15px;
        border-radius: 3px;
    }

    h1{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 15.7399px;
        line-height: 21px;
        color: #061E48;

        ${media.mobile`
            font-size: 12px;
         `}
    }

    h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 12.2422px;
        line-height: 17px;
        color: #1569FA;
        margin-top: 5px;

        ${media.mobile`
            font-size: 11px;
         `}
    }

    h3{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 10.4933px;
        line-height: 14px;
        color: #061E48;
        margin-top: 5px;
    }
`

export const BottomData = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #AAB4C3;

    }

    button{
        background: #DDE6F7;
        border-radius: 3.48px;
        font-style: normal;
        font-weight: 500;
        font-size: 9.744px;
        line-height: 11px;
        color: #274B89;
        border: none;
        width: 100px;
        height: 24px;
    }
`

export const ProductImagesDiv = styled.div`
    width: 100%;
    height: 325px;
    position: relative;
    padding: 0 10px;
    top: 95px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    margin-top: 20px;
    overflow: scroll;

    ${media.mobile`
        overflow: scroll;
    `}

    img{
        height: 323px;
        width: 188px;
        border-radius: 6px;
        margin-right: 9px;
    }
`

export const ProductArea = styled.div`
    width: 621px;

    ${media.mobile`
        width: 100%;
    `}
    
`

export const BarcodeArea = styled.div`
    margin-left: 80px;

    ${media.mobile`
        margin: 0 auto;
        margin-top: 20px;
        /* display: none; */
    `}
`

export const AdDiv = styled.div`
    background: #FFFFFF;
    box-shadow: 8px 26px 45px rgba(95, 193, 70, 0.25);
    border-radius: 29px;
    height: 44px;
    width: 133px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 0 50px;
    cursor: pointer;

    div{
        background: #39B54A;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 9px;
        line-height: 12px;
        padding: 4px;
        border-radius: 3px;
        margin-right: 5px;


color: #FFFFFF;

    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #39B54A;
    }
`

export const DescriptionArea = styled.div`
    padding: 0 50px;
    span{
        font-weight: 900;
        color: black;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-size: 11px;
        line-height: 158.8%;
        color: rgba(0, 0, 0, 0.7);
    }
`

export const PriceAndButtonDiv = styled.div`
    width: 322px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    h2{
        margin-top: 30px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 49px;
        color: #274B89;
    }

    button{
        width:100%;
        padding: 15px;
        background: #274B89;
        box-shadow: 0px 9px 20px rgba(171, 180, 189, 0.148862);
        border-radius: 4px;
        color: white;
        border: none;
        margin-top: 30px;
    }
`

export const EditDiv = styled.div`
    display: flex;
    margin-top: 20px;
    cursor:pointer;

    img{
        width: 15px;
        margin-right: 5px;
    }

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        color: #274B89;
    }
`
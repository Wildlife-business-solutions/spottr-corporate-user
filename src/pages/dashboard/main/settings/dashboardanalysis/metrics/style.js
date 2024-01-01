import styled from 'styled-components/macro'

export const MetricsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    width: 100px;
    // height: 60px;
    // padding-right: 20px;
    
    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 2px;
        color: rgba(59, 59, 59, 0.7);
        text-align: center;

    }

    h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        color: #274B89;
        text-align: center;
    }

    small{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 2px;
        color: rgba(59, 59, 59, 0.7);
        text-align: center;
    }
`
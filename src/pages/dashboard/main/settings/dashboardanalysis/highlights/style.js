import styled from 'styled-components/macro'

export const HighlightsDiv = styled.div`
    width: 100%;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #E7E7E7;

    h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        // line-height: 27px;
        color: #274B89;
        text-transform: capitalize;
    }
`

export const StatDivision = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 25px;
    // margin-top: 10px;

    p{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        // line-height: 22px;
        color: rgba(59, 59, 59, 0.7);
    }

    h2{

    }

    small{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 158.8%;
        color: rgba(59, 59, 59, 0.7);
    }
`
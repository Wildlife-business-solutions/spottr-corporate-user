import Colors from 'GlobalStyles/utils/appColors'
import media from 'GlobalStyles/utils/media'
import styled from 'styled-components/macro'

export const SearchDiv = styled.div`
    padding: 10px 20px;
    display: flex;
    background-color:${Colors.white};
    width: ${({ width }) => (width ? width : '280px')};
    height: ${({ height }) => (height ? height : '45px')};
    border: 0.68px solid #E1EFFB;
    border-radius: 1.92212px;


    ${media.tablet`
        margin-left: 10px;
        border: none;

        img{
            /* width:40px; */
            height:40px;
            align-self: flex-end;
        }
    `}
`

export const SearchInput = styled.input`
    border:none;
    height:100%;
    flex-grow:1;

    ${media.tablet`
        width: 85%;
    `}

    ::placeholder{
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 9.54545px;
        line-height: 150%;
        color: #929AA7;
    }
`

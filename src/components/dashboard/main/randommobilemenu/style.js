import styled from 'styled-components/macro'

import media from 'GlobalStyles/utils/media';


export const RandomMobileMenuContainer = styled.div`
    display: none;
    ${media.mobile`
        display: flex;
        margin-top:20px;
    `}
    ${media.tablet`
        display: flex;
        width:100%;
        justify-content: space-between;
        margin-top:40px;
    `}

`;
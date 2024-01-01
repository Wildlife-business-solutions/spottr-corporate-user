import styled from 'styled-components/macro';

export const CustomCheckWrapper = styled.label`
    position: relative;
`
export const CustomisedCheckInput = styled.input`
    position:absolute;
    left:-9999px;
    top:-9999px;
    &:checked + img {
        width:${({ cw }) => cw || null};
        height:${({ ch }) => ch || null};
    }
`
export const CheckImg = styled.img`
    width:${({ w }) => w || null};
    height:${({ h }) => h || null};
    position:relative;
    cursor:pointer;
    &:active {
        background:#E7E7E7;
    }
`;
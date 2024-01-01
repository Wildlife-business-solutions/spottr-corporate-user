import styled from 'styled-components/macro'
import BrandColors from "../../../GlobalStyles/utils/colors";

export const SocialButtonContainer = styled.button`
    border: 1px solid #CBCBCB;
    border-radius: 4px;
    padding: 16px 25px;
    cursor: pointer;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: white;
        background-color: ${BrandColors.frenchPass}
    }
`

export const SocialIcon = styled.img`
    /* width: 30px; */
`

export const ButtonText = styled.div`
    margin-left: 10px;
    font-weight: 800;
    font-size: 16px;
    color: ${ ({ type }) => (type === "fb" ? "#4267B2" : "black") };
`
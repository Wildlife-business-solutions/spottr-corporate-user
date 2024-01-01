import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const CategoriesHeadDiv = styled.div`
  width: 100%;

  ${media.tablet`
  /* flex-direction: column; */
    `}
  ${media.mobile`
    flex-direction: column;
        `}
    ${media.smallMobile`
    flex-direction: column;
`}
`;
export const CHeadText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #274b89;
`;

export const CSearch = styled.input`
  background: #f3f3f3;
  border: 0.68px solid #e1effb;
  box-sizing: border-box;
  border-radius: 1.92212px;
  padding: 10px;
  height: 45px;
  width: 100%;
  font-family: Nunito;
  transition: border 0.3s ease-in-out;

  &::placeholder {
    color: #929aa7;
  }

  &:focus {
    border-color: #274b89;
  }
  ${media.tablet`
    min-width: 220px;
    `}
  ${media.mobile`
    min-width: 100%;
    margin-top:15px;
    margin-left: 0px;
    margin-right: 10px;
    
        `}
    ${media.smallMobile`
    min-width: 100%;
    margin-top:15px;
    margin-left: 0px;
    margin-right: 10px;
`}
`;

export const FiltersDiv = styled.div`
  width: ${({ wd }) => wd || "150px"};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 11.0995px;
    line-height: 17px;
    color: #274b89;
    margin-right: 15px;
  }

  select {
    height: ${({ hg }) => hg || ""};
    border: 1px solid ${({ col }) => col || "#BBC4D4"};
    border: ${({ brd }) => (brd ? brd : `1px solid #BBC4D4`)};
    position: ${({ pos }) => pos || "relative"};
    background: ${({ bg }) => bg || "transparent"};
    width: ${({ swd }) => swd || swd};
    border-radius: 4px;
    color: ${({ scol }) => scol || "#C4C4C4"};
    appearance: ${({ show }) => show || ""};
    padding-left: ${({ pl }) => pl || ""};
    padding-right: ${({ pr }) => pr || ""};
    left: 0;
    // background: red;
    font-family: Nunito;
    font-weight: ${({ fw }) => fw || fw};
    z-index: 5;
    cursor: pointer;
  }

  .dropdown_style {
    // position: absolute;
    // left: ${({ lt }) => lt || "210px"};
    z-index: 0;
  }

  ${media.tablet`
    min-width: 100%;
    `}
  ${media.mobile`
    display:flex;
    justify-content:flex-end;
    min-width: 100%;
    margin-top:15px;
    margin-left: 0px;
    margin-right: 10px;
    
        `}
    ${media.smallMobile`
    min-width: 100%;
    display:flex;
    justify-content:flex-end;
    display:flex;
    justify-content:flex-end;
    margin-top:15px;
    margin-left: 0px;
    margin-right: 10px;
`}
`;

export const ObackAreaContent = styled.div`
  display: flex;
  // padding-top: 15px;
  // padding-left: 6%;

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #274b89;
    margin-left: 15px;
    cursor: pointer;
  }

  ${media.tablet`
    width:50%;
    `}
  ${media.mobile`
     width:100%;
        `}
    ${media.smallMobile`
    width:width:100%;
`};
`;

export const CategoryheaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  // width: 100%;

  ${media.tablet`
    flex-wrap: no-wrap;
    `}
  ${media.mobile`
   flex-wrap: wrap;
    
        `}
    ${media.smallMobile`
    flex-wrap: wrap;
    `}
`;

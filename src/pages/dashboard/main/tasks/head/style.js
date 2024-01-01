import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const TasksHeadDiv = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 10px;
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
export const THeadText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #274b89;
`;

export const TSearch = styled.input`
  background: #f3f3f3;
  border: 0.68px solid #e1effb;
  box-sizing: border-box;
  border-radius: 1.92212px;
  min-width: 433px;
  padding: 10px;
  margin-left: 200px;
  margin-right: 150px;

  &::placeholder {
    color: #929aa7;
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

export const TFiltersDiv = styled.div`
  width: 130px;
  display: flex;
  align-items: center;
  margin-right: 15px;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 11.0995px;
    line-height: 17px;
    color: #274b89;
    margin-right: 5px;
  }

  select {
    height: 30px;
    border: 1px solid #bbc4d4;
    box-sizing: border-box;
    border-radius: 3px;
    color: #274b89;
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

export const TbackAreaContent = styled.div`
  display: flex;
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
`}
`;
export const TaskheaderDiv = styled.div`
  display: flex;
  width: 100%;

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

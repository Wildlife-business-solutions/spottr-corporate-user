import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const HomeContainer = styled.div`
  // width: 100%;
  height: auto;
  margin-top: 10px;

  ${media.tablet`
        height: 100%;
        overflow: scroll;
    `}
`;

export const FirstLayout = styled.div`
  /* height: 248px; */
  width: 100%;
  overflow: auto;
  /* border: 1px solid black; */
  ::-webkit-scrollbar {
    width: 100px;
    background-color: #e7eef8;
  }

  ${media.tablet`
        /* overflow: scroll; */
    `}
`;

export const DataDetailsDiv = styled.div`
  display: flex;

  ${media.tablet`
        overflow: scroll;
    `}
`;
export const PerformanceDiv = styled.div`
  display: flex;

  ${media.tablet`
        flex-direction: column;
    `}
`;

export const UserPerformanceDetails = styled.div`
  display: flex;
  width: 100%;

  ${media.tablet`
        flex-direction: column-reverse;
    `}
`;
export const MapArea = styled.div`
  padding-left: 5px;
  iframe {
    border-radius: 10px;

    ${media.tablet`
            width:100%;
        `}
  }
`;

export const BottomLayout = styled.div`
  margin-top: 10px;
  max-height: 406px;
  width: 100%;
  /* background: #FFFFFF; */
  /* border: 1px solid #E1EFFB; */
  box-sizing: border-box;
  border-radius: 10px;
  overflow: auto;
  display: flex;

  ${media.tablet`
        flex-direction: column;
    `}
`;

export const GraphArea = styled.div`
  max-width: 60%;
  /* height: 390px; */
  overflow: auto;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e1effb;
  box-sizing: border-box;
  border-radius: 10px;

  ${media.tablet`
        max-width: 100%;
        margin-top: 10px;
        min-height: 320px;
    `}
`;
export const GraphHeader = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 13.5742px;
    line-height: 20px;
    color: #274b89;
  }

  small {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 11.0995px;
    line-height: 17px;
    color: #274b89;
    margin-left: 5px;
  }

  div {
    display: flex;
  }
`;
export const BlueBox = styled.div`
  width: 13px;
  height: 13px;
  background-color: #0075ff;
  border-radius: 3px;
  margin-left: 15px;
`;
export const GreenBox = styled.div`
  width: 13px;
  height: 13px;
  background-color: #26d49b;
  margin-left: 15px;
  border-radius: 3px;
`;

export const BestPerformances = styled.div`
  min-height: 290px;
  width: 260px;
  background: #ffffff;
  border: 1px solid #e1effb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
  margin: 0 10px;

  ${media.tablet`
        width: 100%;
        margin-top: 15px;
    `}
`;

export const TopicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 13.5742px;
    line-height: 20px;
    color: #274b89;
  }
`;

export const TopSearches = styled.div`
  min-height: 406px;
  width: 341px;
  background: #ffffff;
  border: 1px solid #e1effb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;

  ${media.tablet`
        width: 100%;
        margin-top: 15px;
    `}
`;

export const SearchTags = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  margin-top: 10px;
`;

export const TopSellersDiv = styled.div`
  width: 100%;
  overflow: auto;
`;
export const TopSellersContainer = styled.div`
  /* width:100%;
    overflow: auto; */
`;

export const TopicTitle = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 9.62848px;
  line-height: 13px;
  color: #000000;
`;
export const BestRatings = styled.div`
  display: flex;
`;

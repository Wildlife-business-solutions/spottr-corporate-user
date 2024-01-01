import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const SearchreqBody = styled.div``;

export const TagDiv = styled.div`
  min-width: 72px;
  height: 32px;
  display: flex;
  background: #ffffff;
  border: 0.803509px solid rgba(154, 159, 191, 0.25);
  box-sizing: border-box;
  border-radius: 4.01754px;
  align-items: center;
  justify-content: space-around;
  margin-right: 5px;

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 7.1423px;
    line-height: 10px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #061e48;
  }
`;

export const TopSellersContainer = styled.div`
  height: 80px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  background: #e7eef8;
`;

export const TopsellerImage = styled.img`
  border-radius: 50%;
  /* border: 2px solid #C2E0FF; */
  width: 60px;
`;

export const TotalDiv = styled.div`
  background: rgba(227, 232, 240, 0.51);
  border-radius: 2.50272px;
  padding: 3px;
  display: flex;
  margin-bottom: 5px;
`;

export const DetailsDiv = styled.div`
  padding: 10px 4px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const NameText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 10.0109px;
  line-height: 14px;
  color: #061e48;
`;
export const LocationText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 5.83967px;
  color: #929aa7;
`;

export const TotalText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 6.67391px;
  line-height: 9px;
  text-align: center;
  color: #274b89;
  margin: 0 0 0 4px;
`;
export const BestRatingContainer = styled.div`
  background: #fffadd;
  border: 0.757086px solid rgba(154, 159, 191, 0.25);
  box-sizing: border-box;
  border-radius: 2.36589px;
  // width: 33%;
  /* Height : 136.43px; */
  padding: 10px 10px 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const RatingImage = styled.img`
  width: 45px;
`;

export const RatingPinDiv = styled.div`
  position: relative;
  bottom: 5px;
  left: 3px;

  small {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 5.52042px;
    line-height: 150%;
    color: #929aa7;
  }
`;

export const StarDiv = styled.img`
  position: relative;
  bottom: 5px;
  right: 30px;
`;

export const RatingPin = styled.img`
  position: relative;
  /* bottom: 2px; */
`;

export const RatingText = styled.p`
  position: relative;
  bottom: 20px;
  left: 25px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #ffffff;
`;

export const RatingNumbers = styled.div`
  background: rgba(255, 178, 17, 0.15);
  border-radius: 2.36589px;
  width: 65.46px;
  height: 18.14px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 6.30905px;
    line-height: 9px;
    text-align: center;
    color: #e09b09;
  }
`;

export const TopSellersContainerLg = styled.div`
  width: 100%;
  display: flex;
`;

export const HomeContainer = styled.div`
  width: 97%;
  margin: 0 auto;
  padding-top: 25px;

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
  // padding-left: 5px;
  iframe {
    // border-radius: 10px;

    ${media.tablet`
            width:100%;
        `}
  }
`;

export const BottomLayout = styled.div`
  margin-top: 10px;
  max-height: 406px;
  padding-top: 10px;
  width: 100%;
  background: #ffffff;
  /* border: 1px solid #E1EFFB; */
  box-sizing: border-box;
  border-radius: 10px;
  overflow: auto;
  display: flex;

  .graphperfbody {
    width: 74%;
  }

  .graphperf {
    display: flex;
    justify-content: space-between;
  }

  .topSearch {
    width: 26%;
  }

  ${media.tablet`
        flex-direction: column;
    `}
`;

export const GraphArea = styled.div`
  max-width: 670px;
  height: 280px;
  overflow: auto;
  padding: 10px;
  background: #fff;
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
  justify-content: space-between;

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

  .graphhead {
    display: flex;
    align-items: center;
  }

  select {
    color: #274b89;
    padding: 0 5px;
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
  height: 280px;
  width: 280px;
  background: #ffffff;
  border: 1px solid #e1effb;
  padding: 10px 20px;
  margin-right: 15px;
  border-radius: 10px;

  ${media.tablet`
        width: 100%;
        margin-top: 15px;
    `}
`;

export const BestPerformance = styled.div`
  background: red;
`;

export const BestPerformanceContainer = styled.div`
  height: 200px;
  // background: red;
  // border: 1px solid #E1EFFB;
  box-sizing: border-box;
  // border-radius: 10px;
  // padding: 20px;
  overflow: auto;
  padding-top: 10px;
  // margin: 0 10px;

  ${media.tablet`
        width: 100%;
        margin-top: 15px;
    `}
`;

export const TopicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

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
  margin-right: 55px;
  overflow: auto;

  ${media.tablet`
        width: 100%;
        margin-top: 15px;
    `}
`;

export const SearchTags = styled.div`
  display: flex;
  justify-content: space-between;
  // width:100%;
  // overflow: auto;
  margin-top: 10px;
`;

export const TopSellersDiv = styled.div`
  width: 100%;
  overflow: auto;
  padding: 20px 0 0 0;
`;

export const TopicTitle = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 9.62848px;
  line-height: 13px;
  color: #000000;
  padding-left: 10px;
  padding-bottom: 5px;
`;
export const BestRatings = styled.div`
  width: 100%;
  display: flex;
`;
export const BottomSection = styled.div`
  // position: absolute;
  display: flex;
  justify-content: space-between;
  width: 960px;
  bottom: 0;
  cursor: pointer;
  margin-top: 15px;
`;

export const BottomSecBox = styled.div`
  width: 300px;
  height: 86px;
  background: red;
  display: flex;
`;

export const BottomSecBoxLeft = styled.div`
  width: 260px;
  height: inherit;
  background: #ecf7ff;
  padding: 20px 35px;
`;

export const BottomSecBoxRight = styled.div`
  width: 70px;
  height: inherit;
  background: #c2e0ff;
  font-size: 25px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #274b89;
    color: #fff;
  }
`;

export const Top = styled.div`
  font-size: 17.57px;
  color: #274b89;
  font-family: Nunito;
  font-weight: bold;
`;

export const Bottom = styled.div`
  font-size: 12.57px;
  font-family: Nunito;
  font-weight: bold;
  padding-top: 4px;
  color: #39b54a;
`;

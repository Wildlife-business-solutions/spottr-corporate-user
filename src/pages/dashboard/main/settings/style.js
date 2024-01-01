import styled from "styled-components/macro";
import media from "GlobalStyles/utils/media";

export const SettingsContainer = styled.div`
  width: 50%;
  padding: 0 15px;
  // margin-bottom: 50px;
  // height: 896px;
  background: rgba(255, 255, 255, 0.8);
  // border: 0.2px solid #BBC4D4;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const TransactionpinContainer = styled.div`
  width: 430px;
  height: 540px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.2px solid #bbc4d4;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 15px;
  padding: 35px 30px 10px 35px;
`;

export const SingleMemberDiv = styled.div`
  padding: 10px;
`;

export const BackArea = styled.div`
  display: flex;
  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #274b89;
    // margin-left: 15px;
    cursor: pointer;
  }
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
export const MemberBoxDiv = styled.div`
  display: flex;
`;
export const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  small {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 27px;
    color: #274b89;
  }

  .divider {
    width: 420px;
    border-bottom: 1px solid #c2e0ff;
  }
`;

export const MProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  // background: red;
  height: 700px;
  margin-top: 20px;
  width: 1300px;

  .profilebox {
    // background: green;
    width: 420px;
    height: 100%;
  }

  h4 {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 158.8%;
    color: rgba(59, 59, 59, 0.7);
  }

  h6 {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #274b89;
  }

  .memrating {
    position: relative;
  }

  .memrating span {
    position: absolute;
    color: white;
    left: 50%;
    top: 17%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-family: Nunito;
    font-weight: bold;
  }

  ${media.tablet`
        flex-direction: column;
    `}
`;
export const MProfileDetails = styled.div`
  width: ${({ width }) => (width ? width : null)};
  // padding-left: 80px;
  // height: 130%;
  // background: red;
  position: relative;

  h6 {
    padding-bottom: 15px;
  }

  h4 {
    padding-bottom: 10px;
  }

  .verification {
    position: absolute;
    left: 46px;
    top: 10px;
  }

  .check {
    font-size: 10px;
    text-align: center;
    position: absolute;
    top: 8px;
    left: 8px;
  }

  ${media.tablet`
        width: 100%;
        height: auto;
    }
    `}
`;

export const MemPicture = styled.img`
  height: 70px;
  width: 70px;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 10px;

  ${media.tablet`
            height: 50px;
            width: 50px;
    `}
`;

export const MemberMenu = styled.div`
  display: flex;
  width: ${({ wd }) => wd || null};
  justify-content: space-between;
  // border-bottom: 1px solid #C2E0FF;
  margin-top: ${({ mt }) => mt || null};
  margin-bottom: ${({ mb }) => mb || null};
  .menu-active {
    border-bottom: 2px solid #274b89;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 11.0995px;
    line-height: 28px;
    color: #274b89;
    // margin-right:15px;
    // padding-bottom: 7px;
    cursor: pointer;
  }

  ${media.tablet`
        width: 100%;
        /* overflow: auto; */
    `}
  ${media.mobile`
        width: 100%;
        /* overflow: auto; */
    `}
    ${media.smallMobile`
        width: 100%;
        /* overflow: auto; */
    `}
`;

export const NameArea = styled.div`
  // margin: 0 15px;
  h2 {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #274b89;
  }

  small {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #929aa7;
  }
`;

export const MemDiv = styled.div`
  border-bottom: 1px solid #e7e7e7;
  padding: "10px 0";
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 78px;
    height: auto;
    padding: 10px 0;
    // height: 58px;
    /* height: 24px; */
    // margin-top: -10px;
  }
  small {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    color: rgba(59, 59, 59, 0.7);
  }

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
    color: #274b89;
  }
`;

export const BarchartArea = styled.div`
  // height: 280px;
  width: 100%;
  // overflow: auto;
  margin-left: -30px;
`;

export const BarChartImage = styled.img`
  width: 300px;
  height: 250px;
`;

export const MetricsArea = styled.div`
  h4 {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    // line-height: 158.8%;
    color: rgba(59, 59, 59, 0.7);
  }

  h6 {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    padding-top: 20px;
    // line-height: 27px;
    color: #274b89;
  }
`;

export const StatsArea = styled.div`
  width: 270px;
  height: 180px;
  // background: red;
`;

export const StatDiv = styled.div`
  // width: 100%;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-top: 15px;
`;

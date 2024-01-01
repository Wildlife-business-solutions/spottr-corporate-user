import Colors from "GlobalStyles/utils/appColors";
import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const HeaderContainer = styled.div`
  width: 55vw;
  min-width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  ${media.tablet`
        display:none;
    `}
`;

export const CorporateHeader = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #274b89;
`;

export const CompanyName = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #929aa7;
`;

export const NotificationDiv = styled.div`
  display: flex;
  width: 140px;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationIcon = styled.img`
  margin-right: 7px;
  cursor: pointer;
`;

export const SingleMenuDiv = styled.div`
  margin-right: 20px;
  padding: 5px;
  &.menu-active {
    border-bottom: 2px solid ${Colors.blue};
  }
`;

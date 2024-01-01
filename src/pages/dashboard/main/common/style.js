import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const DashboardContainer = styled.div`
  background-color: #ebebeb;
  height: 100%;
  // display: flex;
  // // flex-wrap: wrap;

  ${media.tablet`
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    `}

  ${media.mobile`
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    `}
    ${media.smallMobile`
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    `}
`;

export const DashboardBody = styled.div`
  margin-left: 18%;
  width: 82%;
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 8px;
  padding: 10px;
  overflow: auto;
  height: 100vh;

  ${media.tablet`
        margin-top: 50px;
        margin-left: 0;
        margin-right:0;
        width: 100%;
    `}
  ${media.mobile`
        width: 100%;
    `}
    ${media.smallMobile`
        width: 100%;
    `}
`;

export const Grid = styled.div`
  width: ${({ width }) => (width ? width : null)};
`;

export const Row = styled.div`
  display: flex;
  gap: 15px;
`;

export const Column = styled.div`
  flex: ${(props) => props.size};
  flex-wrap:${(wrap) => (wrap ? wrap : null)}
  flex-basis:${(basis) => (basis ? basis : null)}
  width: ${({ width }) => (width ? width : null)};
  
`;

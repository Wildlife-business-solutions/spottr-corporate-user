import styled from "styled-components/macro";
import media from "GlobalStyles/utils/media";
export const TaskBoxDiv = styled.div`
  display: flex;
`;

export const TaskMenu = styled.div`
  display: flex;
  width: 400px;
  border-bottom: 1px solid #c2e0ff;
  margin-top: ${({ mt }) => mt || null};

  margin-bottom: ${({ mb }) => mb || null};
  .menu-active {
    border-bottom: 2px solid #274b89;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #274b89;
    margin-right: 30px;
    padding-bottom: 10px;
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

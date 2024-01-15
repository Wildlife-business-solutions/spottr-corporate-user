import styled from "styled-components/macro";

export const ContainerTrendingDiscover = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : null)};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  
  border-radius: 10px;
  border: 0.9px solid #E1EFFB;
  background: #FFF;
  
  // background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  padding: 30px 25px;
  overflow-y: scroll;
`;

export const ItemCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

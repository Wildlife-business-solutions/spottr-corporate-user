import styled from "styled-components/macro";

export const ContainerTrendingDiscover = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : null)};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  background: rgba(255, 255, 255, 0.8);

  box-sizing: border-box;
  padding: 30px 25px;
  border-radius: 8px;
  overflow-y: scroll;
`;

export const ItemCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

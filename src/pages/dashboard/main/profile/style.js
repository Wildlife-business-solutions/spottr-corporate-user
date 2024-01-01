import styled from "styled-components/macro";

export const SettingsContainer = styled.div`
  width: 100%;
`;

export const ProfileBody = styled.div`
  width: 80%;
  padding-bottom: 30px;
`;

export const MapArea = styled.div`
  width: 100%;
  position: relative;
  iframe {
    width: 100%;
  }
`;
export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : null)};
  width: 95px;
  height: 26px;
  font-size: 9px;
  font-weight: 900;
  margin: ${({ mg }) => (mg ? mg : null)};
`;

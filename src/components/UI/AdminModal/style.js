import styled from "styled-components/macro";

export const AdminBackdropContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${ ({ dis }) => (dis ? dis : "flex") };
  justify-content:center;
  align-items: center;
  /* z-index: 100; */
  left: 0;
  top: 0;
  z-index: 25;
  background-color: ${ ({ bg }) => (bg ? bg : "rgba(0, 0, 0, 0.2)") };
`;

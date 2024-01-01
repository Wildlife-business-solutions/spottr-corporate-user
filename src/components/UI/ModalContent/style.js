import styled from "styled-components/macro";

export const CloseAdminModal = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;

  div {
    cursor: pointer;
  }
`;

export const ContentBody = styled.div`
  display: ${({ disp }) => (disp ? disp : null)};
  flex-direction: column;
  max-width: ${({ mwd }) => (mwd ? mwd : null)};
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: ${({ mh }) => (mh ? mh : null)};
  overflow-y: ${({ overflowY }) => (overflowY ? overflowY : null)};
  justify-content: center;
  position: relative;
  width: ${({ wd }) => (wd ? wd : null)};
  margin: ${({ mar }) => (mar ? mar : null)};
  height: ${({ hg }) => (hg ? hg : null)};
  padding: ${({ p }) => (p ? p : null)};
  background: ${({ bg }) => (bg ? bg : "#ffff")};
  border-radius: ${({ br }) => (br ? br : null)};

  .btnBack {
    color: #274b89;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ModalHeader = styled.div`
  padding-left: 20px;
  font-size: 20px;
  color: #274b89;
  text-align: left;
`;

export const ModalBodyMain = styled.div`
  width: ${({ mwd }) => (mwd ? mwd : null)};
  // background: green;
  text-align: center;
  display: ${({ dis }) => (dis ? dis : null)};
`;

export const ModalChildren = styled.div`
  // padding-top: 45px;
`;

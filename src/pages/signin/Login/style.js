import BrandColors from "GlobalStyles/utils/colors";
import media from "GlobalStyles/utils/media";
import styled from "styled-components/macro";

export const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const FormContainer = styled.div`
  width: 50vw;
  margin-left: 50vw;
  padding: 55px 65px;
  // margin-top: 10px;
  /* margin: 60px 80px; */

  ${media.tablet`
        width: 100%;
        padding: 20px;
        margin: 0;
    `}
  ${media.mobile`
        width: 100%;
        height: 100%;
        margin: 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    `}
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  &.activeBtn {
    background-color: ${BrandColors.brandBlue};
    color: white;
  }
  color: ${({ col }) => (col ? col : "white")};
  background-color: ${({ bg }) => (bg ? bg : null)};
  padding: ${({ p }) => p || "20px"};
  border: ${({ brd }) => (brd ? brd : "none")};
  border-radius: ${({ br }) => (br ? br : "4px")};
  cursor: pointer;
  font-size: ${({ fz }) => (fz ? fz : "16px")};
  font-family: Nunito;
  font-weight: ${({ bld }) => (bld ? bld : "bold")};
  width: 100%;
  height: ${({ hg }) => (hg ? hg : null)};
  transition: 0.4s;
  margin: ${({ mg }) => (mg ? mg : null)};

  &:hover {
    transform: translateY(-3px);
  }

  &:disabled {
    background: #c4c4c4;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const UseSocials = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  align-items: center;
`;
export const LoginText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: ${BrandColors.brandBlue};
  margin-bottom: 25px !important;
`;

export const ForgotPasswordText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${BrandColors.brandBlue};
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

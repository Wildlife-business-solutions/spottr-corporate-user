import media from "GlobalStyles/utils/media";
import PhoneInput from "react-phone-input-2";
import styled from "styled-components/macro";
import BrandColors from "../../../GlobalStyles/utils/colors";

export const RegContainer = styled.div`
  width: 50vw;
  margin-left: 50vw;
  padding: 55px 65px;

  &.contactDetail {
    display: flex;
    flex-direction: column;
    margin-left: 45vw !important;
    align-items: center;
    justify-content: center;
  }

  ${media.tablet`
        width: 100%;
        margin-left: 0;
    `}
  ${media.mobile`
        width: 100%;
        margin: 20px 25px;
        padding: 0;
    `}
`;

export const JoinPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
`;

export const BackText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #274b89;
  margin-left: 10px;
  cursor: pointer;
`;

export const RegText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 158.8%;
  text-align: center;
  color: #000000;
  width: 250px;
`;

export const CautionText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  margin-left: 5px;
  line-height: 158.8%;
  text-align: center;
  color: ${BrandColors.brandBlue};
  width: 100%;
  margin-bottom: 10px;
`;

export const AlertImg = styled.img`
  width: 20px;
`;
export const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  &.contactDetail {
    width: 70%;
  }
`;

export const PhoneField = styled(PhoneInput)`
  //   border: 3px solid red;
  width: 100%;
  //   padding: 0.5rem;

  .flag-dropdown {
    border: none !important;
    background-color: rgb(240, 240, 240) !important;
    .selected-flag {
      padding: 0 0 0 14px;
      .arrow {
        display: none !important;
      }
    }
  }
`;

export const GeneralPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
`;

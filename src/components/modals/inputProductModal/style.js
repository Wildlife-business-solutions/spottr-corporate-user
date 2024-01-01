import styled from "styled-components/macro";
import { LoginButton } from "pages/signin/Login/style";
import CurrencyInput from "react-currency-input-field";
import media from "GlobalStyles/utils/media";

export const AddProductDiv = styled.div`
  /* width: 100%;
    height: 100%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
`;
export const CloseModal = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;

  div {
    cursor: pointer;
  }
`;
export const ProductMainArea = styled.div`
  /* width: 100%;
    height: 100%; */
  /* max-height: 550px; */
  /* overflow: auto; */
  padding: 14px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadImagesDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  input {
    position: absolute;
    bottom: -5px;
    /* top:20px; */
    cursor: pointer;
    padding: 70px;
    padding-bottom: 0;
    width: 300px;
    opacity: 0;
  }

  img {
    height: 50px;
    width: 50px;
    margin-top: 100px;
  }

  small {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #274b89;
    margin-top: 20px;
  }

  p {
    width: 70%;
    margin-top: 100px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: rgba(59, 59, 59, 0.7);
  }
`;

export const ShowUploadsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding:'10px 0px'
    height: 100%;
`;

export const ServiceProviderDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: scroll;

  .input-group > .form-select {
    flex: unset !important;
    min-width: auto !important;
  }
  .form-select {
    width: 15% !important;
    color: #c4c4c4;
    font-weight: 700;
    background: #f8f8f8 !important;
    padding: 0.375rem 10px 0.375rem 0.75rem !important;
    border: none;
    background: ;
  }
  .form-control:focus {
    color: #212529;
    background: #f8f8f8 !important;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: unset !important;
  }

  textarea {
    margin-top: 20px;
    background-color: #efeeee;
    height: 150px;
    max-height: 210px;
    border-radius: 5px;
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 5px;
    color: #676161;
  }
`;

export const TitleText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fs }) => (fs ? fs : "20px")}!important;
  line-height: 24px;
  color: ${({ color }) => (color ? color : "#274b89")}!important;
  height: ${({ height }) => (height ? height : "")};
  margin: 0 0 8px 14px;
`;

export const CurrencyProductInput = styled(CurrencyInput)`
  height: ${({ height }) => (height ? height : "50px")};
  background: #f8f8f8;
  color: #c4c4c4;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 15px;
  .form-control:focus {
    color: #212529;
    background: #f8f8f8 !important;
    outline: 0;
    box-shadow: unset !important;
  }
`;
export const ServiceProductInput = styled.input`
  height: ${({ height }) => (height ? height : "50px")};
  background: #f8f8f8;
  color: #c4c4c4;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  padding: 15px;
  .form-control:focus {
    color: #212529;
    background: #f8f8f8 !important;
    outline: 0;
    box-shadow: unset !important;
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin: 13px 0;
  /* padding: 0 15px; */

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: #274b89;
  }
`;

export const ProductButton = styled(LoginButton)`
  color: white;
  background-color: #274b89;
  padding: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  width: 300px;
  margin-top: 20px;

  ${media.mobile`
        max-width: 100%;
    `}
`;

export const RestartDiv = styled.div`
  pointer: cursor;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 6px 0px;

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
  }

  h3 {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    color: #274b89;
    cursor: pointer;
  }
`;
export const UploadDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-width: 100%;
  max-width: 100%;
  div {
    height: 358px;
    margin-right: 14px;
    box-shadow: 6px 6px 12px rgb(0 0 0 / 21%);
    /* width: 250px; */
    width: 220px;
    border-radius: 5px;
  }
  .fileUpload {
    width: 100%;
    height: 100%;
    opacity: 0 !important;
  }

  img {
    height: 358px;
    margin-right: 14px;
    box-shadow: 6px 6px 12px rgb(0 0 0 / 21%);
    /* width: 250px; */
    width: 220px;
    border-radius: 5px;
  }
`;

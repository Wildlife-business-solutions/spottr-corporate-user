import styled from "styled-components";

export const InputFieldContainer = styled.div`
  position: relative;
  margin-bottom: 18px;
`;
export const LabelText = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #274b89;
  margin-bottom: 20px;
  display: ${({ show }) => (show ? show : "none")};
`;
export const Input = styled.input`
  background-color: #f0f0f0;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  height: 60px;
  border-radius: 5px;

  padding: 10px 25px;
  width: 100%;
  :focus {
    border: 1px solid #274b89;
  }
  :placeholder {
    font-weight: 400;
    color: #c4c4c4;
  }
`;

export const EyeIcon = styled.img`
  width: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  display: ${({ display }) => (display === "false" ? "none" : "block")};
`;

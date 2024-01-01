import styled from "styled-components/macro";

export const DropdownDiv = styled.div`
  width: 100%;

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    margin: 10px 5px;
  }

  select {
    width: 100%;
    height: 40px;
    // background: #ECF7FF;
    border-radius: 5px;
    padding: 0 10px;
    border: none;
  }
`;
export const OtherTagDiv = styled.div`
  margin: 15px 0 20px 0;

  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    margin: 10px 5px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 40px;
  background: #ecf7ff;
  border-radius: 5px;
  padding: 5px 10px;
  :active {
    border: 2px solid #c2e0ff;
  }

  input {
    border: none;
    background: transparent;
    height: 30px;
    width: 100%;
  }
`;

export const AddText = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 158.8%;
  color: #000000;
`;

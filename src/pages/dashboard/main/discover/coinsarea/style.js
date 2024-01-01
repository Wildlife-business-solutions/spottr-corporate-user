import styled from "styled-components/macro";

export const Coincontent = styled.div`
  width: 260px;
  /* background-color:red; */
  height: 100px;
  margin-top: -40px;
`;
export const CoinItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // padding-top:7px;
  padding-bottom: 10px;
`;

export const CancelBtn = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #274b89;
    font-weight: 700;
  }
`;

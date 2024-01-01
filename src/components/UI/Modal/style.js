import styled, { keyframes } from "styled-components/macro";
// import Colors from "styles/utils/colors";

export const SlideIn = keyframes`
from {
    opacity: 0
}
to{
    opacity: 1
}
`;

export const Container = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: relative;
  z-index: 500;
  background-color: white;
  width: 85%;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "500px")};
  padding: 16px;
  margin: auto;
  top: ${({ top }) => (top ? top : "16%")};
  box-sizing: border-box;
  transition: all 0.5s ease-out;
  transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-20px)`)};
  animation-name: ${SlideIn};
  animation-duration: 0.5s;
  padding: ${({ padding }) => (padding ? padding : "20px")};
  p {
    color: grey;
  }

  @media (min-width: 600px) {
    width: ${({ width }) => (width ? width : null)}!important;
    height: ${({ height }) => (height ? height : null)};
    min-width: ${({ mwidth }) => (mwidth ? mwidth : null)}!important;
    // left: calc(50% - 250px);
  }
`;

export const OuterContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);
  transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-100%)`)};
  animation-name: ${SlideIn};
  animation-duration: 0.3s;
`;
export const CancelSection = styled.div`
  display: flex;
  justify-content: flex-end;
  color: grey;

  div {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  text-align: center;
  img {
    height: 50px;
    width: 50px;
  }
`;

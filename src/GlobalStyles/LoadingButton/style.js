import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  transition: all 0.5s linear;
  button {
    position: relative;

    /* display: flex; */
  }

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 15px;
    height: 15px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 10px;
      left: 10px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 20px;
      height: 20px;
      opacity: 0;
    }
  }

  /* cursor: */
`;

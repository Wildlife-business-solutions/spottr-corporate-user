import { keyframes } from 'styled-components'

export const SlideDown = () =>
  `
  animation-name: slide-down;
  animation-duration: 0.3s;
  animation-iteration-count: ease-out;
  
  @keyframes slide-down {
        0% {
          opacity: 0;
          transform: translateY(-30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }`;

export const SlideUp = () =>
  `
  animation-name: slide-up;
  animation-duration: 0.3s;
  animation-iteration-count: ease-out;
  
  @keyframes slide-up {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }`;

export const SlideLeft = () =>
  `
  animation-name: slide-up;
  animation-duration: 0.3s;
  animation-iteration-count: ease-out;
  
  @keyframes slide-up {
        0% {
          opacity: 0;
          transform: translateX(-30px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }`;


export const SlideIn = keyframes`
    o%{transform : translateX(-1200px)};
    20%{transform : translateX(-900px)};
    50%{transform: translateX(-500px)};
    75%{transform: translateX(-150px)};
    100%{transform: translateX(0)}
`
export const Shake = keyframes`
    0%{margin-right: -20px};
    100%{margin-right: 0px};
`

export const Bigger = keyframes`
    0%{transform: scale(1)}
    25%{transform: scale(1.2)}
    50%{transform: scale(1.6)}
    100%{transform: scale(1.8)}
`
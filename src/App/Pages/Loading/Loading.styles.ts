import styled, { keyframes } from 'styled-components';
import { ReactComponent as BeltLogoSvg } from 'App/Assets/logo/logo.svg';

 const heartbeat = keyframes`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`


export const Loading = styled.div`
  /* background-color: blue; */
  height: 100vh;
  background: radial-gradient(47.34% 149.63% at 2.66% 95.23%, rgba(78, 95, 255, 0.2) 0%, rgba(177, 78, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(95.6% 95.6% at 51.88% 4.4%, rgba(255, 236, 64, 0.2) 0%, rgba(0, 0, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
linear-gradient(0deg, #6F97B5, #6F97B5);
  display: flex;
  align-items: center;
  justify-content: center;`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const BeltLogo = styled(BeltLogoSvg)`
  width: 7em;
  height: 7em;
  margin-bottom: 1em;
  animation: ${heartbeat} 1.5s ease-in-out infinite both;
`

export const LoadingText = styled.div`
  font-size: 1.3em;
  font-weight: 600;
  text-align: center;
  color: white;
`
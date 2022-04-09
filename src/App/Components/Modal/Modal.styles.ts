import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Modal = styled.div`
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(111, 151, 181, 0.76);
  backdrop-filter: blur(4px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  &:after {
    content: "x";
    position: absolute;
    right: .5em;
    top: .5em;
    font-size: 3em;
    color: #FFFFFF;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  margin: 1em;
  padding: 2em;
  position: relative;
  width: 100em;
  /* height: 100px; */
  max-width: 50em;
  max-height: 60em;
  background-color: #E5E5E5;
`;
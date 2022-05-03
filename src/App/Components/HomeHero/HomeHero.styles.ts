import styled, { keyframes } from "styled-components";
import { ReactComponent as MountainSingleSvg } from "App/Assets/logo/mountainSingle.svg";
import { ReactComponent as MountainRangeSvg } from "App/Assets/logo/mountainRange.svg";
import { Parallax } from "react-scroll-parallax";

const fadeInTop = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeInBottom = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const tiltInRight = keyframes`
  0% {
    -webkit-transform: rotateX(30deg) translateX(300px) skewX(-30deg);
            transform: rotateX(30deg) translateX(300px) skewX(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
            transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
`;

const tiltInLeft = keyframes`
  0% {
    -webkit-transform: rotateX(30deg) translateX(-300px) skewX(30deg);
            transform: rotateX(30deg) translateX(-300px) skewX(30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
            transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
`;

export const HomeHero = styled.div`
  background-color: rgba(239, 239, 239, 1);
`;

export const Wrapper = styled.div`
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100%; */
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  position: relative;
  color: rgba(111, 151, 181, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubHeaderText = styled.div`
  font-size: 1.7em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4em;
  letter-spacing: 0.12em;
  margin-bottom: 1em;
  animation: ${fadeInTop} 1s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
`;

export const HeaderText = styled.div`
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0.12em;
  margin-bottom: 0.3em;
  animation: ${fadeInTop} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1.4s both;
`;

export const Occupation = styled.div`
  font-size: 1.7em;
  font-weight: 400;
  line-height: 1.4em;
  letter-spacing: 0.12em;
  display: flex;
  align-items: center;
  animation: ${fadeInTop} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;

  &:after {
    margin-left: 0.5em;
    border-radius: 40%;
    content: "";
    width: 3em;
    height: 0.14em;
    content: "";
    flex-grow: 1;
    height: $line-height;
    background-color: rgba(111, 151, 181, 1);
    animation: ${tiltInRight} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 2.4s;
  }

  &:before {
    margin-right: 0.5em;
    border-radius: 40%;
    content: "";
    width: 3em;
    height: 0.14em;
    content: "";
    flex-grow: 1;
    height: $line-height;
    background-color: rgba(111, 151, 181, 1);
    animation: ${tiltInLeft} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 2.4s;
  }
`;

export const ParallaxMountainSingle = styled(Parallax)`
  width: 76em;
  position: absolute;
  left: -69em;
  top: -10em;
`;

export const ParallaxMountainRange = styled(Parallax)`
  width: 110em;
  position: absolute;
  right: -65em;
  top: 21em;
`;
export const MountainSingle = styled(MountainSingleSvg)`
  fill: rgba(111, 151, 181, 1);
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.1s both;
`;

export const MountainRange = styled(MountainRangeSvg)`
  fill: rgba(111, 151, 181, 1);
  overflow: visible;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s both;
`;

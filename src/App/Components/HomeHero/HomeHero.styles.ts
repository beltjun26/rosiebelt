import styled, { keyframes } from 'styled-components';
import { ReactComponent as MountainSingleSvg } from 'App/Assets/logo/mountainSingle.svg';
import { ReactComponent as MountainRangeSvg } from 'App/Assets/logo/mountainRange.svg';
import { Parallax } from 'react-scroll-parallax';

const fadeInTop = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`


 const fadeInBottom =  keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`


export const HomeHero = styled.div`
  background-color: rgba(239, 239, 239, 1);
`

export const Wrapper = styled.div`
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100%; */
  height: 100vh;
`

export const HeaderContainer = styled.div`
  position: relative;
  color: rgba(111, 151, 181, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubHeaderText = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.12em;
  margin-bottom: 1em;
  animation: ${fadeInTop} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;

`

export const HeaderText = styled.div`
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0.12em;
  margin-bottom: .3em;
  animation: ${fadeInTop} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 2s both;
`

export const Occupation = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.12em;
  animation: ${fadeInTop} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 2.3s both;
`

export const ParallaxMountainSingle = styled(Parallax)`
  width: 76em;
  position: absolute;
  left: -69em;
  bottom: -30em;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) .1s both;

`

export const ParallaxMountainRange = styled(Parallax)`
  width: 110em;
  position: absolute;
  right: -65em;
  bottom: -45em;
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) .3s both;

`
export const MountainSingle = styled(MountainSingleSvg)`
  fill: rgba(111, 151, 181, 1);
`

export const MountainRange = styled(MountainRangeSvg)`
  fill: rgba(111, 151, 181, 1);
  overflow: visible;
`


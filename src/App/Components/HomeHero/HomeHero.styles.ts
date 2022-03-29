import styled from 'styled-components';
import { ReactComponent as MountainSingleSvg } from 'App/Assets/logo/mountainSingle.svg';
import { ReactComponent as MountainRangeSvg } from 'App/Assets/logo/mountainRange.svg';
import { Parallax } from 'react-scroll-parallax';


export const HomeHero = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(239, 239, 239, 1);
`

export const HeaderContainer = styled.div`
  position: relative;
  color: rgba(111, 151, 181, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-style: preserve-3d;
`

export const SubHeaderText = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.12em;
  margin-bottom: 1em;
`

export const HeaderText = styled.div`
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0.12em;
  margin-bottom: .3em;
`

export const Occupation = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.12em;
`
export const MountainSingle = styled(MountainSingleSvg)`
  position: absolute;
  left: -50em;
  bottom: -30em;
  overflow: visible;
`

export const MountainRange = styled(MountainRangeSvg)`
  position: absolute;
  right: -70em;
  bottom: -30em;
  overflow: visible;
`

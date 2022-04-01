import styled from 'styled-components';
import { ReactComponent as CloudsSvg } from 'App/Assets/logo/cloudMultiple.svg';
import { ReactComponent as WindyCloudSvg } from 'App/Assets/logo/cloudWind.svg';
import { Parallax } from 'react-scroll-parallax';

export const HomeTech = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #6F97B5 0%, rgba(118, 155, 182, 0.916667) 24.48%, rgba(141, 167, 186, 0.644828) 67.19%, rgba(196, 196, 196, 0) 100%);
`

export const Sky = styled.div`
  /* height 100em; */
  height: 12em;
  width: 2000px;
  margin: 0 auto;
  position: relative;
`

export interface CloudContainerProps {
  top?: number,
  left?: number,
  bottom?: number,
  right?: number,
}

export const CloudContainer = styled(Parallax)<CloudContainerProps>`
  position: absolute;
  top: ${props => props.top}em;
  left: ${props => props.left}em;
  bottom: ${props => props.bottom}em;
  right: ${props => props.right}em;
`

export const WindyCloud = styled(WindyCloudSvg).attrs(props => ({
  width: props.width ?? 50,
}))`
  width: ${props => props.width}em;
`

export const Clouds = styled(CloudsSvg).attrs(props => ({
  width: props.width ?? 50,
}))`
  width: ${props => props.width}em;
`
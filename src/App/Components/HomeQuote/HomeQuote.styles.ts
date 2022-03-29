import styled from 'styled-components';
import { ReactComponent as OceanBirdSvg } from 'App/Assets/logo/oceanBird.svg';

export const HomeQuote = styled.div`
  z-index: -1; // Using position relative on this elements seems to modify the z index and puts everything on top and we don't want that
  position: relative;
  height: 140vh;
  background: linear-gradient(180deg, #EFEFEF 15.1%, rgba(111, 151, 181, 0.6) 59.37%, #6F97B5 100%);
`
export const OceanBird = styled(OceanBirdSvg)`
  position: absolute;
  bottom: 5em;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  transform: translateX(-50%);
`
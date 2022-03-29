import styled from 'styled-components';
import { ReactComponent as BeltLogoSvg } from 'App/Assets/logo/logo.svg';

export const Loading = styled.div`
  /* background-color: blue; */
  height 100vh;
  background: radial-gradient(47.34% 149.63% at 2.66% 95.23%, rgba(78, 95, 255, 0.2) 0%, rgba(177, 78, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(95.6% 95.6% at 51.88% 4.4%, rgba(255, 236, 64, 0.2) 0%, rgba(0, 0, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
linear-gradient(0deg, #6F97B5, #6F97B5);
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const BeltLogo = styled(BeltLogoSvg)`
  width: 7em;
  height: 7em;
  margin-bottom: 1em;
`

export const LoadingText = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: white;
`
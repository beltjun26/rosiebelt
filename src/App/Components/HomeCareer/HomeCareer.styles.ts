import styled, { keyframes } from 'styled-components';
import { ReactComponent as WaveSvg } from 'App/Assets/logo/oceanWave.svg';
import { Parallax } from 'react-scroll-parallax';

export interface TimelineBlockProps {
  side?: 'right' | 'left';
}

export const HomeCareer = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  color: white;
  /* height: 100vh; */
  background-color: rgba(111, 151, 181, 1);
  padding-bottom: 10em;
`;

export const Title = styled.div`
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0.12em;
  text-align: center;
  margin-bottom: 1em;
`;

export const TimelineBlock = styled.div<TimelineBlockProps>`
  position: relative;
  width: 100%;
  display: flex;
  text-align: ${props => props.side === 'right' ? 'left' : 'right'};
  flex-direction: ${props => props.side === 'right' ? 'row-reverse' : 'row'};
`;

export const TimelineContainer = styled.div`
  padding-top: 3em;
  width: 90%;
  max-width: 110em;
  height: 100%;
  position: relative;
  margin: 0 auto;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: white;
    left: 50%;
    margin-left: -2px;
  }
`;

export const TimelineContent = styled.div`
  /* width: 45%; */
  /* flex-direction: column; */
  /* display: flex; */
  width: 45%;
  margin-bottom: 8em ;
`;

export const ContentDate = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.12em;
  margin-bottom: 1em;
`;

export const ContentTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.12em;
  margin-bottom: .3em;

`;

export const ContentSubTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.12em;
  margin-bottom: 1.3em;
`;


export const ContentText = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.12em;
`;


export const TimelineImg = styled.img`
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 64px;
  /* height: 64px; */
  box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
`

export const Ocean = styled.div`
  max-width: 2000px;
  height: 20em;
  position: relative;
  margin-bottom: 5em;
  margin-left: auto;
  margin-right: auto;
`

const waveAnimation = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
`;

// const randomStart = Math.floor(Math.random() * 10);

export interface WaveContainerProps {
  top?: number,
  left?: number,
  bottom?: number,
  right?: number,
}
export const WaveContainer = styled(Parallax)<WaveContainerProps>`
  position: absolute;
  top: ${props => props.top}em;
  left: ${props => props.left}em;
  bottom: ${props => props.bottom}em;
  right: ${props => props.right}em;
  /* animation: ${waveAnimation} 1s linear infinite alternate; */
  /* animation-delay: {$randomStart}; */
`

export interface WaveProps {
  width: number;
}
export const Wave = styled(WaveSvg).attrs(props => ({
  width: props.width ?? 50,
}))`
  width: ${props => props.width}em;
`
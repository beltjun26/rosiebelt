import styled, { keyframes } from 'styled-components';
import { ReactComponent as WaveSvg } from 'App/Assets/logo/oceanWave.svg';
import { ReactComponent as BubbleSvg } from 'App/Assets/logo/bubble.svg';
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
  font-size: 2.3em;
  line-height: 2.3;
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

  @media (max-width: 768px) {
    text-align: left;
    flex-direction: row;
  }
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
  
    @media (max-width: 768px) {
      left: 2.1em;
      width: 2.4px;

    }
  }
`;

export const TimelineContent = styled.div`
  /* width: 45%; */
  /* flex-direction: column; */
  /* display: flex; */
  width: 45%;
  margin-bottom: 8em ;

  @media (max-width: 768px) {
    margin-top: 1em;
    margin-left: 7em;
    width: 100%;
  }
`;

export const ContentDate = styled.div`
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 0.12em;
  margin-bottom: 1em;
`;

export const ContentTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: .3em;

`;

export const ContentSubTitle = styled.div`
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 0.12em;
  margin-bottom: 1.3em;
`;


export const ContentText = styled.div`
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 0.12em;
`;


export const TimelineImg = styled.img`
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 4em;
  /* height: 64px; */
  box-shadow: 0 0 0 .3em #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    /* right: none; */
    margin: 0;
  }
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
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

`;

export const Bubble = styled(BubbleSvg).attrs(props => ({
  width: props.width ?? 50,
}))`
  width: ${props => props.width}em;
`;
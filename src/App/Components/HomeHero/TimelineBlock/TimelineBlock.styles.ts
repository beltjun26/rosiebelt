import styled, { keyframes } from 'styled-components';

export interface TimelineBlockProps {
  side?: 'right' | 'left';
}

const textFocusIn = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`

const scaleIn = keyframes`
 0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`


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

export const TimelineImg = styled.img`
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 4em;
  visibility: hidden;
  /* height: 64px; */
  box-shadow: 0 0 0 .3em #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    /* right: none; */
    margin: 0;
  }

  .animate > & {
    visibility: visible;
    animation: ${scaleIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) .2s both;
  }
`;

export const TimelineContent = styled.div`
  /* width: 45%; */
  /* flex-direction: column; */
  /* display: flex; */
  width: 45%;
  margin-bottom: 8em ;

  .animate > & {
    animation: ${textFocusIn} 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) .4s both;
  }

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

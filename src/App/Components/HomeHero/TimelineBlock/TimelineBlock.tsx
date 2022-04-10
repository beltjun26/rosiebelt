import React from 'react';
import handleViewport from 'react-in-viewport';
import * as S from './TimelineBlock.styles';

export interface TimelineBlockProps{
  date: string;
  title:  string;
  subTitle: string;
  img: string;
  forwardedRef: React.RefObject<HTMLDivElement>;
  inViewport: boolean;
  enterCount: number;
  side?: 'right' | 'left';
}

export const TimelineBlockViewPort: React.FC<TimelineBlockProps> = ({
  date,
  title,
  subTitle,
  img,
  children,
  forwardedRef,
  enterCount,
  inViewport,
  side
}) => {  
  const animate = enterCount > 0 || inViewport;

  return (
    <S.TimelineBlock ref={forwardedRef} className={animate ? 'animate' : ''} side={side}>
      <S.TimelineImg src={img} alt="up"/>
      <S.TimelineContent>
        <S.ContentDate>
          {date}
        </S.ContentDate>
        <S.ContentTitle>
          {title}
        </S.ContentTitle>
        <S.ContentSubTitle>
          {subTitle}
        </S.ContentSubTitle>
        <S.ContentText>
          {children}
        </S.ContentText>
      </S.TimelineContent>
    </S.TimelineBlock>
  )
}

// if 50% of the component is visible the animation will trigger
export const TimelineBlock = handleViewport(TimelineBlockViewPort, {threshold: .5});

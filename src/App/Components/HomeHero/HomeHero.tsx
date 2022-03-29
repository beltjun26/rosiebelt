import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import * as S from './HomeHero.styles';

export const HomeHero: React.FC = () => {
  return (
    <S.HomeHero>
      <S.HeaderContainer>
        <S.SubHeaderText>
          HI I AM
        </S.SubHeaderText>
        <S.HeaderText>
          ROSIEBELT JUN ABISADO
        </S.HeaderText>
        <S.Occupation>
          SOFTWARE ENGINEER
        </S.Occupation>
        <Parallax speed={-20}>
          <S.MountainSingle />
        </Parallax>
        <Parallax speed={-22}>
          <S.MountainRange />
        </Parallax>
      </S.HeaderContainer>
  </S.HomeHero>    
  )
}
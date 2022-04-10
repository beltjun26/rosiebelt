import React from 'react';
import * as S from './HomeHero.styles';

export const HomeHero: React.FC = () => {
  return (
    <S.HomeHero>
      <S.Wrapper>
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
          <S.ParallaxMountainSingle speed={-20}>
            <S.MountainSingle />
          </S.ParallaxMountainSingle>
          <S.ParallaxMountainRange speed={-20}>
            <S.MountainRange />
          </S.ParallaxMountainRange>
        </S.HeaderContainer>
      </S.Wrapper>
  </S.HomeHero>    
  )
}
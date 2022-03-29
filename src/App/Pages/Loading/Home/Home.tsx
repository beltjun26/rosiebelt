import { HomeHero } from 'App/Components/HomeHero/HomeHero';
import { HomeQuote } from 'App/Components/HomeQuote/HomeQuote';
import React from 'react';
import * as S from './Home.styles';

export const Home: React.FC = () => {
  return (
    <S.Home>
      <HomeHero />
      <HomeQuote />
    </S.Home>
  )
} 
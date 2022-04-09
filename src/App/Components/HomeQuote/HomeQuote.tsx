import React from 'react';
import * as S from './HomeQuote.styles';

export const HomeQuote: React.FC = () => {
  return (
    <S.HomeQuote>
      <S.Wrapper>
        <S.QuoteText>
          Let me code where the mountain meets the sea
        </S.QuoteText>
        <S.OceanBird />
      </S.Wrapper>
    </S.HomeQuote>

  )
}
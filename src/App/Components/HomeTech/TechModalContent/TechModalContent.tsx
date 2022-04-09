import React from 'react';
import * as S from './TechModalContent.styles';

export interface TechModalContentProps {
  logo: React.ReactNode;
  title?: string;
  content?: string;
}

export const TechModalContent: React.FC<TechModalContentProps> = ({
  logo,
  title,
  content,
}) => {
  return (
    <S.TechModalContent>
      <S.Header>
        {logo}
        <S.HeaderText>
          {title}
        </S.HeaderText>  
      </S.Header>
      <S.Body>
        {content}
      </S.Body>
    </S.TechModalContent>
  )
}
import React from 'react';
import * as S from './HomeTech.styles';

export const HomeTech: React.FC = () => {
  return (
    <S.HomeTech>
      <S.Sky>
        <S.CloudContainer bottom={0} speed={5}>
          <S.Clouds width={25} />
        </S.CloudContainer>
        <S.CloudContainer left={27} bottom={5} speed={5}>
          <S.Clouds width={25} />
        </S.CloudContainer>
        <S.CloudContainer left={30} speed={23}>
          <S.Clouds width={40}/>
        </S.CloudContainer>
        <S.CloudContainer left={77} bottom={-13} speed={15}>
          <S.Clouds width={33}/>
        </S.CloudContainer>
        <S.CloudContainer left={10} bottom={-12} speed={5}>
          <S.WindyCloud width={25}/>
        </S.CloudContainer>
        <S.CloudContainer left={67} bottom={-1} speed={23}>
          <S.WindyCloud width={37}/>
        </S.CloudContainer>
        <S.CloudContainer left={105} bottom={-3} speed={5}>
          <S.Clouds width={25} />
        </S.CloudContainer>
      </S.Sky>
    </S.HomeTech>
  )
}
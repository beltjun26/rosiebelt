import React from "react";
import * as S from "./Loading.styles";
import "./Loading.css";

export const Loading: React.FC = () => {
  return (
    <S.Loading>
      <S.Container>
        <S.BeltLogo />
        <S.LoadingText>LOADING</S.LoadingText>
      </S.Container>
    </S.Loading>
  );
};

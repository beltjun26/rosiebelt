import { HomeAboutMe } from "App/Components/HomeAboutMe/HomeAboutMe";
import { HomeCareer } from "App/Components/HomeCareer/HomeCareer";
import { HomeContact } from "App/Components/HomeContact/HomeContact";
import { HomeHero } from "App/Components/HomeHero/HomeHero";
import { HomeQuote } from "App/Components/HomeQuote/HomeQuote";
import { HomeTech } from "App/Components/HomeTech/HomeTech";
import React from "react";
import * as S from "./Home.styles";

export const Home: React.FC = () => {
  return (
    <S.Home>
      <HomeHero />
      <HomeQuote />
      <HomeCareer />
      <HomeTech />
      <HomeAboutMe />
      <HomeContact />
    </S.Home>
  );
};

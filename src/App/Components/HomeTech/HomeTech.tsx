import React from 'react';
import * as S from './HomeTech.styles';

// Img imports
import LogoApollo from 'App/Assets/techLogo/apolloGraphql.png';
import LogoGit from 'App/Assets/techLogo/git.png';
import LogoGithub from 'App/Assets/techLogo/github.png';
import LogoGtm from 'App/Assets/techLogo/GTM.png';
import LogoPhabricator from 'App/Assets/techLogo/phabricator.png';
import LogoPhp from 'App/Assets/techLogo/php.png';
import LogoTwilio from 'App/Assets/techLogo/twilio.png';

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
      <S.Header>
        THINGS I KNOW
      </S.Header>
      <S.BalloonsContainer>
        <S.HouseWithString />
        <S.Balloon left={0} top={0}>
          <S.LogoAngular />
        </S.Balloon>
        <S.Balloon left={7} top={-6}>
          <S.LogoReact />
        </S.Balloon>
        <S.Balloon left={16} top={-2}>
          <S.BalloonImg src={LogoGtm}/>
        </S.Balloon>
        <S.Balloon left={24} top={-9}>
          <S.LogoMysql />
        </S.Balloon>
        <S.Balloon left={8.4} top={4}>
          <S.BalloonImg src={LogoApollo}/>
        </S.Balloon>
        <S.Balloon left={28} top={1}>
          <S.BalloonImg src={LogoGit}/>
        </S.Balloon>
        <S.Balloon left={19} top={6}>
          <S.BalloonImg src={LogoGithub}/>
        </S.Balloon>
        <S.Balloon left={2} top={12.3}>
          <S.LogoGoogleAnalytics/>
        </S.Balloon>
        <S.Balloon left={27} top={11.3}>
          <S.LogoGraphQl />
        </S.Balloon>
        <S.Balloon left={12.4} top={11.3}>
          <S.BalloonImg src={LogoPhabricator} />
        </S.Balloon>
        <S.Balloon left={7.4} top={20.3}>
          <S.BalloonImg src={LogoPhp} />
        </S.Balloon>
        <S.Balloon left={20} top={16.3}>
          <S.BalloonImg src={LogoTwilio} />
        </S.Balloon>
      </S.BalloonsContainer>
    </S.HomeTech>
  )
}
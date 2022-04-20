import React from "react";
import * as S from "./HomeContact.styles";

import { ReactComponent as GithubLogo } from "App/Assets/socials/github.svg";
import { ReactComponent as InstagramLogo } from "App/Assets/socials/instagram.svg";
import { ReactComponent as LinkedInLogo } from "App/Assets/socials/linkedin.svg";
import { ReactComponent as ContactLogo } from "App/Assets/socials/phone.svg";
import { ReactComponent as EmailLogo } from "App/Assets/socials/email.svg";

export const HomeContact: React.FC = () => {
  return (
    <S.HomeContact>
      <S.Header>CONTACT ME</S.Header>
      <S.SocialsContainer>
        <S.Social href="https://github.com/beltjun26" target="_blank">
          <S.SocialLogo>
            <GithubLogo />
          </S.SocialLogo>
          <S.Text>github.com/beltjun26</S.Text>
        </S.Social>
        <S.Social href="https://www.instagram.com/beltjun/" target="_blank">
          <S.SocialLogo>
            <InstagramLogo />
          </S.SocialLogo>
          <S.Text>instagram.com/beltjun</S.Text>
        </S.Social>
        <S.Social href="https://www.linkedin.com/in/rjabisado/" target="_blank">
          <S.SocialLogo>
            <LinkedInLogo />
          </S.SocialLogo>
          <S.Text>linkedin.com/in/rjabisado</S.Text>
        </S.Social>
        <S.Social href="tel:+639100672885">
          <S.SocialLogo>
            <ContactLogo />
          </S.SocialLogo>
          <S.Text>+639100672885</S.Text>
        </S.Social>
        <S.Social href="mailto:beltjunabisado@gmail.com">
          <S.SocialLogo>
            <EmailLogo />
          </S.SocialLogo>
          <S.Text>beltjunabisado@gmail.com</S.Text>
        </S.Social>
      </S.SocialsContainer>
    </S.HomeContact>
  );
};

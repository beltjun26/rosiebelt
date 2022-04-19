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
        <S.Social>
          <S.SocialLogo>
            <GithubLogo />
          </S.SocialLogo>
          <S.Link href="https://github.com/beltjun26" target="_blank">
            github.com/beltjun26
          </S.Link>
        </S.Social>
        <S.Social>
          <S.SocialLogo>
            <InstagramLogo />
          </S.SocialLogo>
          <S.Link href="https://www.instagram.com/beltjun/" target="_blank">
            instagram.com/beltjun
          </S.Link>
        </S.Social>
        <S.Social>
          <S.SocialLogo>
            <LinkedInLogo />
          </S.SocialLogo>
          <S.Link href="https://www.linkedin.com/in/rjabisado/" target="_blank">
            linkedin.com/in/rjabisado
          </S.Link>
        </S.Social>
        <S.Social>
          <S.SocialLogo>
            <ContactLogo />
          </S.SocialLogo>
          <S.Link href="tel:+639100672885">+639100672885</S.Link>
        </S.Social>
        <S.Social>
          <S.SocialLogo>
            <EmailLogo />
          </S.SocialLogo>
          <S.Link href="mailto:beltjunabisado@gmail.com">
            beltjunabisado@gmail.com
          </S.Link>
        </S.Social>
      </S.SocialsContainer>
    </S.HomeContact>
  );
};

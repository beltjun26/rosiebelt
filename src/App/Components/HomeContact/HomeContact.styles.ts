import styled from "styled-components";

export const HomeContact = styled.div`
  min-height: 100vh;
  background-color: rgba(239, 239, 239, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: rgba(111, 151, 181, 1);
  margin: 0;
  margin-bottom: 4em;
  text-align: center;
  font-size: 2.3em;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.12em;
`;

export const SocialsContainer = styled.div`
  margin: 0 auto;
  max-width: 40em;
`;

export const Social = styled.div`
  display: flex;
  margin-bottom: 2em;
`;

export const SocialLogo = styled.div`
  width: 5em;
  margin-right: 3em;
`;

export const Link = styled.a`
  font-size: 1.9em;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.12em;
  text-align: left;
  color: rgba(111, 151, 181, 1);
`;

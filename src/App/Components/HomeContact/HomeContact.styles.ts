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

export const Social = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2em;

  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(111, 151, 181, 1);
  }
`;

export const SocialLogo = styled.div`
  width: 5em;
  margin-right: 3em;
`;

export const Text = styled.p`
  font-size: 1.9em;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-align: center;
  color: rgba(111, 151, 181, 1);
`;

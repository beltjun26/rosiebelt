import styled from "styled-components";
import { ReactComponent as OceanBirdSvg } from "App/Assets/logo/oceanBird.svg";

export const HomeQuote = styled.div`
  z-index: -1; // Using position relative on this elements seems to modify the z index and puts everything on top and we don't want that
  height: 140vh;
  background: linear-gradient(
    180deg,
    #efefef 15.1%,
    rgba(111, 151, 181, 0.6) 59.37%,
    #6f97b5 100%
  );
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
`;

export const OceanBird = styled(OceanBirdSvg)`
  width: 32em;
`;

export const QuoteText = styled.h3`
  color: white;
  font-size: 2.3em;
  font-weight: 400;
  line-height: 1.4em;
  letter-spacing: 0.12em;
  text-align: center;
  margin: 0 2em;
`;

import styled, { css } from "styled-components";

export const HomeAboutMe = styled.div`
  background-color: rgba(239, 239, 239, 1);
  min-height: 100vh;
  padding-bottom: 9em;
`;

export const HeaderContainer = styled.div`
  color: rgba(111, 151, 181, 1);
  max-width: 80em;
  margin: 0 auto;
  margin-bottom: 7em;
`;

export const Header = styled.h1`
  color: rgba(111, 151, 181, 1);
  margin: 0;
  margin-bottom: 2em;
  text-align: center;
  font-size: 2.3em;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.12em;
`;

export const HeaderText = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: 0.12em;
  text-align: center;
  margin: 0 1em;
`;

export const Carousel = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;

  min-width: 600px;
  max-width: 1000px;
  width: calc(100% - 100px);

  height: 500px;
  transition: 0.25s;
`;

export interface CarouselItemProps {
  active?: boolean;
  backgroundImg: string;
}

export const CarouselItem = styled.div<CarouselItemProps>`
  position: relative;
  overflow: hidden;
  width: 90px;
  margin: 10px;
  border-radius: 30px;

  background-size: auto 120%;
  background-position: center;
  background: url(${(props) => props.backgroundImg});
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  cursor: pointer;

  ${(props) => {
    if (props.active) {
      return css`
        flex-grow: 10000;
        transform: scale(1);

        max-width: 100%;
        margin: 0px;
        border-radius: 40px;

        background-size: auto 100%;
        .shadow {
          box-shadow: inset 0 -120px 120px -120px black,
            inset 0 -120px 120px -100px black;
        }
      `;
    }
  }}
`;

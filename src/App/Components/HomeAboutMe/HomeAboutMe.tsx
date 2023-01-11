import React, { useState } from "react";
import * as S from "./HomeAboutMe.styles";
import "./HomeAboutMe.css";
import MountainImg from "App/Assets/img/mountain.png";
import BikingImg from "App/Assets/img/biking.png";
import SunsetImg from "App/Assets/img/sunset.png";

type CarouselItem = "img1" | "img2" | "img3";

export const HomeAboutMe: React.FC = () => {
  const [carouselItem, setCarouselItem] = useState<CarouselItem>("img1");

  return (
    <S.HomeAboutMe>
      <S.HeaderContainer>
        <S.Header>ABOUT ME</S.Header>
        <S.HeaderText>
          Hi, I&apos;m Belt. I&apos;m passionate about programming and I love
          the challenge of problem-solving and creating new things. When
          I&apos;m not coding, I love going out and exploring the world around
          me. I enjoy hiking in the mountains and visiting other beautiful
          natural places. I believe that every experience is a chance to learn
          and grow, whether it&apos;s through technology or by getting out of my
          comfort zone and trying new things. I&apos;m always on the go, seeking
          new adventures and challenges. I believe that life is about the and
          and I&apos;m excited to see where my passions will take me.
        </S.HeaderText>
      </S.HeaderContainer>
      <S.Carousel>
        <S.CarouselItem
          onClick={() => setCarouselItem("img1")}
          active={carouselItem === "img1"}
          backgroundImg={MountainImg}
        ></S.CarouselItem>
        <S.CarouselItem
          onClick={() => setCarouselItem("img2")}
          active={carouselItem === "img2"}
          backgroundImg={BikingImg}
        ></S.CarouselItem>
        <S.CarouselItem
          onClick={() => setCarouselItem("img3")}
          active={carouselItem === "img3"}
          backgroundImg={SunsetImg}
        ></S.CarouselItem>
      </S.Carousel>
    </S.HomeAboutMe>
  );
};

import React, { useState } from 'react';
import * as S from './HomeAboutMe.styles';
import './HomeAboutMe.css';
import MountainImg from 'App/Assets/img/mountain.png';
import BikingImg from 'App/Assets/img/biking.png';
import SunsetImg from 'App/Assets/img/sunset.png';

type CarouselItem = 'img1' | 'img2' | 'img3';

export const HomeAboutMe: React.FC = () => {
  const [carouselItem, setCarouselItem] = useState<CarouselItem>('img1');

  return (
    <S.HomeAboutMe>
      <S.HeaderContainer>
        <S.Header>
          ABOUT ME
        </S.Header>
        <S.HeaderText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
        </S.HeaderText>
      </S.HeaderContainer>
      <S.Carousel>
        <S.CarouselItem onClick={() => setCarouselItem('img1')} active={carouselItem === 'img1'} backgroundImg={MountainImg}>
        </S.CarouselItem>
        <S.CarouselItem onClick={() => setCarouselItem('img2')} active={carouselItem === 'img2'} backgroundImg={BikingImg} >
        </S.CarouselItem>
        <S.CarouselItem onClick={() => setCarouselItem('img3')} active={carouselItem === 'img3'} backgroundImg={SunsetImg}>
         {/* <S.CarouselImg src={BikingImg} /> */}
        </S.CarouselItem>
      </S.Carousel>
    </S.HomeAboutMe>
  )
}
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
          I really love traveling. As a software engineer I always face my monitory almost 10 hours a day. To keep my sanity make sure to do hiking, biking and spending the
          afternoon watching the sunset.
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
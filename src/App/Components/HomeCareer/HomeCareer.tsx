import React from 'react'
import * as S from './HomeCareer.styles';
import upLogo from 'App/Assets/img/UPLogo.png';
import tuariaLogo from 'App/Assets/img/tauriaLogo.png';
import freelancerLogo from 'App/Assets/img/freelancerLogo.png';

export const HomeCareer: React.FC = () => {
  return (
    <S.HomeCareer>
      <S.Ocean>
      <S.WaveContainer bottom={-3} left={40} speed={2}>
          <S.Bubble width={4}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={-18} left={80} speed={2}>
          <S.Bubble width={4}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={-22} left={105} speed={2}>
          <S.Bubble width={4}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={-12} left={100} speed={8}>
          <S.Bubble width={10}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={-7} left={20} speed={8}>
          <S.Bubble width={10}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={14} speed={6}>
          <S.Wave width={24}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={9} left={33} speed={4}>
          <S.Wave width={20}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={6} left={59} speed={4}>
          <S.Wave width={22}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={55} speed={4}>
          <S.Wave width={19}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={74} speed={2}>
          <S.Wave width={18}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={105} speed={2}>
          <S.Wave width={18}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={-5} speed={2}>
          <S.Wave width={18}/>
        </S.WaveContainer>

        <S.WaveContainer bottom={4} left={85} speed={10}>
          <S.Wave width={45}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={3} speed={10}>
          <S.Wave width={45}/>
        </S.WaveContainer>
        <S.WaveContainer bottom={0} left={37} speed={12}>
          <S.Wave width={55}/>
        </S.WaveContainer>
      </S.Ocean>
      <S.Title>
        CAREER
      </S.Title>
			<S.TimelineContainer>
        <S.TimelineBlock>
          <S.TimelineImg src={upLogo} alt="up"/>
          <S.TimelineContent>
            <S.ContentDate>
              2014
            </S.ContentDate>
            <S.ContentTitle>
              UNIVERSITY OF THE PHILIPPINES
            </S.ContentTitle>
            <S.ContentSubTitle>
              BS IN COMPUTER SCIENCE
            </S.ContentSubTitle>
            <S.ContentText>
              Studied computer science, the basic of software engineering, machine learning and web development. I get to enjoy my uni life while hiking, playing volleyball and staying in beach the whole school year!
            </S.ContentText>
          </S.TimelineContent>
        </S.TimelineBlock>
        <S.TimelineBlock side="right">
          <S.TimelineImg src={upLogo} alt="up"/>
          <S.TimelineContent>
            <S.ContentDate>
              2017
            </S.ContentDate>
            <S.ContentTitle>
              PHILIPPINE GENOME CENTER
            </S.ContentTitle>
            <S.ContentSubTitle>
              BIOINFORMATICS
            </S.ContentSubTitle>
            <S.ContentText>
              Worked on creating a pipeline to integrate tools and have a good end to end experience for scientist with little to no experience with metagenomic tools built in linux system.
            </S.ContentText>
          </S.TimelineContent>
        </S.TimelineBlock>
        <S.TimelineBlock>
          <S.TimelineImg src={freelancerLogo} alt="up"/>
          <S.TimelineContent>
            <S.ContentDate>
              2018
            </S.ContentDate>
            <S.ContentTitle>
              FREELANCER.COM
            </S.ContentTitle>
            <S.ContentSubTitle>
              SOFTWARE ENGINEER
            </S.ContentSubTitle>
            <S.ContentText>
              Mainly worked on two main Products. Freelancer.com and Freightlancer.com.
              <p>
                * Changed the whole payment calculation for the commission model of Freightlancer.com.
              </p>
              <p>
                * Rebranded Channel40 to Freightlancer.com
              </p>
              <p>
                * Migrated the old stack of Freelancer.com to Angular
              </p>
              <p>
                * Optimized the location tracking and implemented the logic to use Google service in looking for the road shortest path.
              </p>
              <p>
                * Developed dynamic Custom fields implementation for Enterprise Clients
              </p>
              <p>
                * Integrated 3rd party payment service (Assembly Payments, now called Zai)
              </p>
              <p>
              * Integrated SMS feature (TWILIO) to our services
              </p>
            
            </S.ContentText>
          </S.TimelineContent>
        </S.TimelineBlock>
        <S.TimelineBlock side='right'>
          <S.TimelineImg src={tuariaLogo} alt="up"/>
          <S.TimelineContent>
            <S.ContentDate>
              2021
            </S.ContentDate>
            <S.ContentTitle>
              TAURIA
            </S.ContentTitle>
            <S.ContentSubTitle>
              SOFTWARE ENGINEER
            </S.ContentSubTitle>
            <S.ContentText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
            </S.ContentText>
          </S.TimelineContent>
        </S.TimelineBlock>
			</S.TimelineContainer>
    </S.HomeCareer>
  )
}
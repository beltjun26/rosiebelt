import React from "react";
import * as S from "./HomeCareer.styles";
import upLogo from "App/Assets/img/UPLogo.png";
import tuariaLogo from "App/Assets/img/tauriaLogo.png";
import coverio from "App/Assets/img/coverio.png";
import freelancerLogo from "App/Assets/img/freelancerLogo.png";
import { TimelineBlock } from "../HomeHero/TimelineBlock/TimelineBlock";

export const HomeCareer: React.FC = () => {
  return (
    <S.HomeCareer>
      {/* Extract aesthetic related component */}
      <S.Ocean>
        <S.WaveContainer bottom={-3} left={40} speed={2}>
          <S.Bubble width={4} />
        </S.WaveContainer>
        <S.WaveContainer bottom={-18} left={80} speed={2}>
          <S.Bubble width={4} />
        </S.WaveContainer>
        <S.WaveContainer bottom={-22} left={105} speed={2}>
          <S.Bubble width={4} />
        </S.WaveContainer>
        <S.WaveContainer bottom={-12} left={100} speed={8}>
          <S.Bubble width={10} />
        </S.WaveContainer>
        <S.WaveContainer bottom={-7} left={20} speed={8}>
          <S.Bubble width={10} />
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={14} speed={6}>
          <S.Wave width={24} />
        </S.WaveContainer>
        <S.WaveContainer bottom={9} left={33} speed={4}>
          <S.Wave width={20} />
        </S.WaveContainer>
        <S.WaveContainer bottom={6} left={59} speed={4}>
          <S.Wave width={22} />
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={55} speed={4}>
          <S.Wave width={19} />
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={74} speed={2}>
          <S.Wave width={18} />
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={105} speed={2}>
          <S.Wave width={18} />
        </S.WaveContainer>
        <S.WaveContainer bottom={10} left={-5} speed={2}>
          <S.Wave width={18} />
        </S.WaveContainer>

        <S.WaveContainer bottom={4} left={85} speed={10}>
          <S.Wave width={45} />
        </S.WaveContainer>
        <S.WaveContainer bottom={3} speed={10}>
          <S.Wave width={45} />
        </S.WaveContainer>
        <S.WaveContainer bottom={0} left={37} speed={12}>
          <S.Wave width={55} />
        </S.WaveContainer>
      </S.Ocean>
      <S.Title>CAREER</S.Title>
      <S.TimelineContainer>
        <TimelineBlock
          side="right"
          date="2022"
          title="COVERIO"
          subTitle="SOFTWARE ENGINEER"
          img={coverio}
        >
          <p>
            I am currently working on building a payroll application using React
            and integrating it with web3 technology.
          </p>
          <p>
            My responsibilities include designing and implementing new features,
            troubleshooting and debugging issues, and collaborating with the
            rest of the development team.
          </p>
          <p>
            I have also gained experience in backend development, including
            using Express to build APIs, integrating Google Analytics to track
            performance, and using TypeORM to manage database interactions.
          </p>
        </TimelineBlock>
        <TimelineBlock
          date="2021"
          title="TAURIA"
          subTitle="SOFTWARE ENGINEER"
          img={tuariaLogo}
        >
          <p>
            Developed communication tools that focus on security and privacy
          </p>
          <p>
            Built the analytic system from scratch using Google Tag Manager and
            Google Analytics
          </p>
          <p>
            Implemented and developed React Components and the integration with
            the backend which runs in Apollo GraphQL
          </p>
        </TimelineBlock>
        <TimelineBlock
          date="2018"
          title="FREELANCER.COM"
          subTitle="SOFTWARE ENGINEER"
          img={freelancerLogo}
          side="right"
        >
          Mainly worked on two main Products. Freelancer.com and
          Freightlancer.com.
          <p>
            Changed the whole payment calculation for the commission model of
            Freightlancer.com.
          </p>
          <p>Rebranded Channel40 to Freightlancer.com</p>
          <p>Migrated the old stack of Freelancer.com to Angular</p>
          <p>
            Optimized the location tracking and implemented the logic to use
            Google service in looking for the road shortest path.
          </p>
          <p>
            Developed dynamic Custom fields implementation for Enterprise
            Clients
          </p>
          <p>
            Integrated 3rd party payment service (Assembly Payments, now called
            Zai)
          </p>
          <p>Integrated SMS feature (TWILIO) to our services</p>
        </TimelineBlock>
        <TimelineBlock
          date="2017"
          title="PHILIPPINE GENOME CENTER"
          subTitle="BIOINFORMATICS"
          img={upLogo}
        >
          Worked on creating a pipeline to integrate tools and have a good end
          to end experience for scientist with little to no experience with
          metagenomic tools built in linux system.
        </TimelineBlock>
        <TimelineBlock
          date="2014"
          title="UNIVERSITY OF THE PHILIPPINES"
          subTitle="BS IN COMPUTER SCIENCE"
          img={upLogo}
          side="right"
        >
          Studied computer science, the basic of software engineering, machine
          learning and web development. I get to enjoy my uni life while hiking,
          playing volleyball and staying in beach the whole school year!
        </TimelineBlock>
      </S.TimelineContainer>
    </S.HomeCareer>
  );
};

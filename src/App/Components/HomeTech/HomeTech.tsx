import React, { useState } from "react";
import * as S from "./HomeTech.styles";

// Img imports
import LogoApollo from "App/Assets/techLogo/apolloGraphql.png";
import LogoGit from "App/Assets/techLogo/git.png";
import LogoGithub from "App/Assets/techLogo/github.png";
import LogoGtm from "App/Assets/techLogo/GTM.png";
import LogoPhabricator from "App/Assets/techLogo/phabricator.png";
import LogoPhp from "App/Assets/techLogo/php.png";
import LogoTwilio from "App/Assets/techLogo/twilio.png";
import { Modal } from "../Modal/Modal";
import { TechModalContent } from "./TechModalContent/TechModalContent";

import data from "./techModalContent.json";

// const ModalContents = {
//   angular:
// }

type TECHNOLOGY =
  | "angular"
  | "react"
  | "mysql"
  | "gtm"
  | "apollo"
  | "git"
  | "github"
  | "ga"
  | "graphql"
  | "phab"
  | "php"
  | "twilio";

interface TechData {
  name: string;
  content: string;
}

export const HomeTech: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  /**
   * function to open modal
   * @param {TECHNOLOGY} tech tech used for modal
   * @param {React.ReactNode} logo Logo to be used for modal
   */
  function openModal(tech: TECHNOLOGY, logo: React.ReactNode): void {
    const techData: TechData = data.techs[tech];

    setModalContent(
      <TechModalContent
        title={techData.name}
        content={techData.content}
        logo={logo}
      />
    );

    setIsModalOpen(true);
  }

  return (
    <S.HomeTech>
      <S.HomeTechContainer>
        <S.Sky>
          <S.CloudContainer bottom={0} speed={5}>
            <S.Clouds width={25} />
          </S.CloudContainer>
          <S.CloudContainer left={27} bottom={5} speed={5}>
            <S.Clouds width={25} />
          </S.CloudContainer>
          <S.CloudContainer left={30} speed={23}>
            <S.Clouds width={40} />
          </S.CloudContainer>
          <S.CloudContainer left={77} bottom={-13} speed={15}>
            <S.Clouds width={33} />
          </S.CloudContainer>
          <S.CloudContainer left={10} bottom={-12} speed={5}>
            <S.WindyCloud width={25} />
          </S.CloudContainer>
          <S.CloudContainer left={67} bottom={-1} speed={23}>
            <S.WindyCloud width={37} />
          </S.CloudContainer>
          <S.CloudContainer left={105} bottom={-3} speed={5}>
            <S.Clouds width={25} />
          </S.CloudContainer>
        </S.Sky>
        <S.Header>THINGS I KNOW</S.Header>
        <S.BalloonsContainer>
          <S.HouseWithString />
          {/* Figure out how to save these data to JSON with the image asset needed */}
          <S.Balloon
            left={0}
            top={0}
            onClick={() => openModal("angular", <S.LogoAngular />)}
          >
            <S.LogoAngular />
          </S.Balloon>
          <S.Balloon
            left={7}
            top={-6}
            onClick={() => openModal("react", <S.LogoReact />)}
          >
            <S.LogoReact />
          </S.Balloon>
          <S.Balloon
            left={16}
            top={-2}
            onClick={() => openModal("gtm", <S.BalloonImg src={LogoGtm} />)}
          >
            <S.BalloonImg src={LogoGtm} />
          </S.Balloon>
          <S.Balloon
            left={24}
            top={-9}
            onClick={() => openModal("mysql", <S.LogoMysql />)}
          >
            <S.LogoMysql />
          </S.Balloon>
          <S.Balloon
            left={8.4}
            top={4}
            onClick={() =>
              openModal("apollo", <S.BalloonImg src={LogoApollo} />)
            }
          >
            <S.BalloonImg src={LogoApollo} />
          </S.Balloon>
          <S.Balloon
            left={28}
            top={1}
            onClick={() => openModal("git", <S.BalloonImg src={LogoGit} />)}
          >
            <S.BalloonImg src={LogoGit} />
          </S.Balloon>
          <S.Balloon
            left={19}
            top={6}
            onClick={() =>
              openModal("github", <S.BalloonImg src={LogoGithub} />)
            }
          >
            <S.BalloonImg src={LogoGithub} />
          </S.Balloon>
          <S.Balloon
            left={2}
            top={12.3}
            onClick={() => openModal("ga", <S.LogoGoogleAnalytics />)}
          >
            <S.LogoGoogleAnalytics />
          </S.Balloon>
          <S.Balloon
            left={27}
            top={11.3}
            onClick={() => openModal("graphql", <S.LogoGraphQl />)}
          >
            <S.LogoGraphQl />
          </S.Balloon>
          <S.Balloon
            left={12.4}
            top={11.3}
            onClick={() =>
              openModal("phab", <S.BalloonImg src={LogoPhabricator} />)
            }
          >
            <S.BalloonImg src={LogoPhabricator} />
          </S.Balloon>
          <S.Balloon
            left={7.4}
            top={20.3}
            onClick={() => openModal("php", <S.BalloonImg src={LogoPhp} />)}
          >
            <S.BalloonImg src={LogoPhp} />
          </S.Balloon>
          <S.Balloon
            left={20}
            top={16.3}
            onClick={() =>
              openModal("twilio", <S.BalloonImg src={LogoTwilio} />)
            }
          >
            <S.BalloonImg src={LogoTwilio} />
          </S.Balloon>
        </S.BalloonsContainer>
      </S.HomeTechContainer>
      {isModalOpen && (
        <Modal close={() => setIsModalOpen(false)}>{modalContent}</Modal>
      )}
    </S.HomeTech>
  );
};

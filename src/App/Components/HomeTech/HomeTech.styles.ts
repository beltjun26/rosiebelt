import styled from "styled-components";
import { ReactComponent as CloudsSvg } from "App/Assets/logo/cloudMultiple.svg";
import { ReactComponent as WindyCloudSvg } from "App/Assets/logo/cloudWind.svg";
import { ReactComponent as HouseWithLine } from "App/Assets/logo/houseWithLine.svg";
import { Parallax } from "react-scroll-parallax";

import { ReactComponent as AngularSvg } from "App/Assets/techLogo/angular.svg";
import { ReactComponent as ReactSvg } from "App/Assets/techLogo/react.svg";
import { ReactComponent as PythonSvg } from "App/Assets/techLogo/python.svg";
import { ReactComponent as MysqlLogo } from "App/Assets/techLogo/mysql.svg";
import { ReactComponent as GoogleAnalyticsSvg } from "App/Assets/techLogo/googleAnalytics.svg";
import { ReactComponent as GraphQlSvg } from "App/Assets/techLogo/graphQl.svg";

export const HomeTech = styled.div`
  padding-bottom: 14em;
  background-color: rgba(239, 239, 239, 1);
`;

export const HomeTechContainer = styled.div`
  background: linear-gradient(
    180deg,
    #6f97b5 0%,
    rgba(118, 155, 182, 0.916667) 24.48%,
    rgba(141, 167, 186, 0.644828) 67.19%,
    rgba(196, 196, 196, 0) 100%
  );
`;

export const Header = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 5em;
  font-size: 2.3em;
  font-weight: 400;
  letter-spacing: 0.12em;
`;

export const Sky = styled.div`
  /* height 100em; */
  height: 14em;
  width: 120em;
  margin: 0 auto;
  position: relative;
  margin-bottom: 15em;
`;

export interface CloudContainerProps {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export const CloudContainer = styled(Parallax)<CloudContainerProps>`
  position: absolute;
  perspective: 1000;

  top: ${(props) => (props.top ? `${props.top}em` : "")};
  left: ${(props) => (props.left ? `${props.left}em` : "")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "")};
  right: ${(props) => (props.right ? `${props.right}em` : "")};
`;

export const BalloonsContainer = styled.div`
  width: 34em;
  height: 50em;
  position: relative;
  font-size: 1em;
  margin: 0 auto;
`;

export interface BalloonProps {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export const Balloon = styled.div<BalloonProps>`
  height: 8em;
  width: 8em;
  position: absolute;
  border-radius: 50%;
  background-color: white;
  transform: scale(1);
  transition: all 0.5s;
  cursor: pointer;

  top: ${(props) => (props.top ? `${props.top}em` : "")};
  left: ${(props) => (props.left ? `${props.left}em` : "")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}em` : "")};
  right: ${(props) => (props.right ? `${props.right}em` : "")};

  &:hover {
    transform: scale(1.2);
  }
`;

export const LogoAngular = styled(AngularSvg)`
  width: 8em;
`;

export const LogoReact = styled(ReactSvg)`
  width: 7.5em;
  height: 7.5em;
  transform: translate(0.25em, 0.25em);
`;

// Not working yet
export const LogoPython = styled(PythonSvg)`
  width: 7em;
  height: 7em;
`;

export const LogoMysql = styled(MysqlLogo)`
  width: 6em;
  height: 6em;
  transform: translate(1em, 1em);
`;
export const LogoGoogleAnalytics = styled(GoogleAnalyticsSvg)`
  width: 5em;
  height: 5em;
  transform: translate(1em, 1em);
`;

export const LogoGraphQl = styled(GraphQlSvg)`
  width: 7em;
  height: 7em;
  transform: translate(0.5em, 0.5em);
`;

export const HouseWithString = styled(HouseWithLine)`
  width: 20em;
  position: absolute;
  left: 8em;
  bottom: 3em;
`;
export const BalloonImg = styled.img`
  width: 7em;
  height: 7em;
  transform: translate(0.5em, 0.5em);
`;

export const WindyCloud = styled(WindyCloudSvg).attrs((props) => ({
  width: props.width ?? 50,
}))`
  width: ${(props) => props.width}em;
`;

export const Clouds = styled(CloudsSvg).attrs((props) => ({
  width: props.width ?? 50,
}))`
  width: ${(props) => props.width}em;
`;

import styled, { css } from "styled-components";

import { FiYoutube, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

const icon = css`
  width: 100%;
  height: 100%;
  max-width: 30px;
  max-height: 20px;
  margin-right: 5px;
`;

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 300ms ease-out;

  ul {
    width: 100%;
    margin-top: 40px;
    list-style: none;

    li {
      width: 100%;
    }
  }

  footer {
    margin-top: 30px;
    color: ${(props) => props.theme.colors.description};

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.description};
    }
  }
`;

export const ProfileImage = styled.img`
  width: auto;
  height: auto;
  max-width: 93px;
  max-height: 93px;
  border-radius: 50%;
  position: relative;
  border: 4px solid ${(props) => props.theme.colors.firstBorder};
  box-shadow: 0 0 0 4px ${(props) => props.theme.colors.secondBorder};
  position: relative;
`;

export const ProfileName = styled.h1`
  margin-top: 24px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: 500;
`;

export const ProfileSocial = styled.a`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.description};
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
`;

export const Link = styled.a`
  width: 100%;
  height: 55px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 18px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.button};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.button_hover};
  }
`;

export const YoutubeLogo = styled(FiYoutube)`
  ${icon}
`;

export const InstagramLogo = styled(FiInstagram)`
  ${icon}
`;

export const TwitterLogo = styled(FiTwitter)`
  ${icon}
`;

export const GithubLogo = styled(FiGithub)`
  ${icon}
`;

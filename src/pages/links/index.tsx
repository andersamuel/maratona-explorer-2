import React from "react";

import {
  Container,
  ProfileImage,
  ProfileName,
  ProfileSocial,
  Link,
  YoutubeLogo,
  InstagramLogo,
  TwitterLogo,
  GithubLogo,
} from "./styles";

export const Links: React.FC = () => {
  return (
    <Container>
      <ProfileImage
        src="https://avatars.githubusercontent.com/u/105863409?v=4"
        alt=""
      />
      <ProfileName>Anderson Oliveira</ProfileName>
      <ProfileSocial
        href="https://www.instagram.com/oanderoliveira/"
        target="_blank"
      >
        @oanderoliveira
      </ProfileSocial>

      <ul>
        <li>
          <Link href="/">
            <YoutubeLogo />
            YouTube
          </Link>
        </li>
        <li>
          <Link href="/">
            <InstagramLogo />
            Instagram
          </Link>
        </li>
        <li>
          <Link href="/">
            <TwitterLogo />
            Twitter
          </Link>
        </li>
        <li>
          <Link href="/">
            <GithubLogo />
            GitHub
          </Link>
        </li>
      </ul>

      <footer>
        Feito com um ⚡ pelo{" "}
        <a href="https://github.com/andersamuel" target="_blank">
          Anderson Oliveira
        </a>
      </footer>
    </Container>
  );
};

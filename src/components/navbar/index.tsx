import React from "react";

import { Container, MoreIcon, ProfileIcon } from "./styles";

export const Navbar: React.FC = () => {
  return (
    <Container>
      <h1>Linktree</h1>
      <div>
        <MoreIcon />
        <ProfileIcon />
      </div>
    </Container>
  );
};

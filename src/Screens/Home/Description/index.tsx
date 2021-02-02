import React from 'react';

import { Container, WelcomeText, ChooseText } from './styles';

const Description: React.FC = () => {
  return(
    <Container>
      <WelcomeText>Bem vindo ao Marvel Heroes</WelcomeText>
      <ChooseText>Escolha o seu personagem</ChooseText>
    </Container>
  );
}

export default Description;
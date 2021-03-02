import React from 'react';

import { Container, TextHistory } from './styles';

interface PropsTypes {
  textHistory: string;
}

const History: React.FC<PropsTypes> = ({ textHistory }) => {
  return(
    <Container>
      <TextHistory>
        Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos. Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.
      </TextHistory>
    </Container>
  );
}

export default History;
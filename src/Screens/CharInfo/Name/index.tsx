import React from 'react';

import { Container, NameChar, NameFantasy } from './styles';

interface PropsTypes {
  nameChar: string;
  nameFantasy: string;
}

const Name: React.FC<PropsTypes> = ({ nameChar, nameFantasy }) => {
  return(
    <Container>
      <NameChar>{nameChar}</NameChar>
      <NameFantasy>{nameFantasy}</NameFantasy>
    </Container>
  );
}

export default Name;
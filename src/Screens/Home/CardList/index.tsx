import React from 'react';

import Card from '../../../Components/Card';
import { Container } from './styles';

import spiderMan from '../../../assets/chars/spider-man.png';

const CardList: React.FC = () => {
  return(
    <Container horizontal>
      <Card imageBackgrond={spiderMan} nameChar='Peter Parker' nameFantasy='Homem Aranha'/>
      <Card imageBackgrond={spiderMan} nameChar='Peter Parker' nameFantasy='Homem Aranha'/>
      <Card imageBackgrond={spiderMan} nameChar='Peter Parker' nameFantasy='Homem Aranha'/>
      <Card imageBackgrond={spiderMan} nameChar='Peter Parker' nameFantasy='Homem Aranha'/>
    </Container>
  );
}

export default CardList;
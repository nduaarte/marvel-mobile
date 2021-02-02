import React from 'react';

import Category from '../../../Components/Category';
import { Container } from './styles';
import { Styles } from '../../../Styles';

import heroIcon from '../../../assets/icons/hero.png';
import villainIcon from '../../../assets/icons/villain.png';
import antiheroIcon from '../../../assets/icons/antihero.png';
import alienIcon from '../../../assets/icons/alien.png';
import humanIcon from '../../../assets/icons/human.png';

const CharacterChoice: React.FC = () => {
  const { gradientBlue, gradientRed, gradientPurple, gradientGreen, gradientPink } = Styles;

  return (
    <Container>
      <Category iconFile={heroIcon} primaryColor={gradientBlue[0]} secondaryColor={gradientBlue[1]}/>
      <Category iconFile={villainIcon} primaryColor={gradientRed[0]} secondaryColor={gradientRed[1]}/>
      <Category iconFile={antiheroIcon} primaryColor={gradientPurple[0]} secondaryColor={gradientPurple[1]}/>
      <Category iconFile={alienIcon} primaryColor={gradientGreen[0]} secondaryColor={gradientGreen[1]}/>
      <Category iconFile={humanIcon} primaryColor={gradientPink[0]} secondaryColor={gradientPink[1]}/>
    </Container>
  );
}

export default CharacterChoice;
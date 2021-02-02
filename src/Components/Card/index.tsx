import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from 'styled-components';

import { BackgroundImage, TextContainer, NameChar, NameFantasy } from './styles';

interface TypesProps {
  imageBackgrond: any;
  nameChar: string;
  nameFantasy: string;
}

const Card: React.FC<TypesProps> = ({ imageBackgrond, nameChar, nameFantasy }) => {
  const { gradientDark } = useContext(ThemeContext);

  return (
    <BackgroundImage source={imageBackgrond} imageStyle={{ borderRadius: 16 }}>
      <LinearGradient colors={[gradientDark[0], gradientDark[1]]} style={{ flex: 1, borderRadius: 16 }}>
        <TextContainer>
          <NameChar>{nameChar}</NameChar>
          <NameFantasy>{nameFantasy}</NameFantasy>
        </TextContainer>
      </LinearGradient>
    </BackgroundImage>
  );
}

export default Card;
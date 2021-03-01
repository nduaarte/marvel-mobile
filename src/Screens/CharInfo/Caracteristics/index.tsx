import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, SubContainer, Icon, Description } from './styles';


interface TypesProps {
  age: number;
  wheight: number;
  height: number;
  universe: string;
}

const Caracteristics: React.FC<TypesProps> = ({ age, wheight, height, universe }) => {
  return(
    <Container>
      <SubContainer>
      <Ionicons name='information' size={20} />
        <Description>{`${age} anos`}</Description>
      </SubContainer>

      <SubContainer>
        <MaterialCommunityIcons name='weight' size={20} />
        <Description>{`${wheight}kg`}</Description>
      </SubContainer>

      <SubContainer>
        <MaterialCommunityIcons name='human-male-height' size={20} />
        <Description>{`${height}m`}</Description>
      </SubContainer>

      <SubContainer>
        <Ionicons name='planet' size={20} />
        <Description>{universe}</Description>
      </SubContainer>

    </Container>
  );
}

export default Caracteristics;
import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, SubContainer, Icon, Description } from './styles';


interface TypesProps {
  age: number;
  weight: number;
  height: number;
  universe: string;
}

const Caracteristics: React.FC<TypesProps> = ({ age, weight, height, universe }) => {
  return(
    <Container>

      <SubContainer>
        <Ionicons name='information' size={26} color='#fff' />
        <Description>{`${age} anos`}</Description>
      </SubContainer>

      <SubContainer>
        <MaterialCommunityIcons name='weight' size={22} color='#fff' />
        <Description>{`${weight}kg`}</Description>
      </SubContainer>

      <SubContainer>
        <MaterialCommunityIcons name='human-male-height' size={22} color='#fff' />
        <Description>{`${height}m`}</Description>
      </SubContainer>

      <SubContainer>
        <Ionicons name='planet' size={22} color='#fff' />
        <Description>{universe}</Description>
      </SubContainer>

    </Container>
  );
}

export default Caracteristics;
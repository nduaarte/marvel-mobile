import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Icon } from './styles';

interface PropsTypes {
  iconFile: File;
  primaryColor: string;
  secondaryColor: string;
}

const Category: React.FC<PropsTypes> = ({ iconFile, primaryColor, secondaryColor }) => {
  return (
    <LinearGradient
      colors={[primaryColor, secondaryColor]}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 28
      }}>
      <Icon source={iconFile} />
    </LinearGradient>
  );
}

export default Category;
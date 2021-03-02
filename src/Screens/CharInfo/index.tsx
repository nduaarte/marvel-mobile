import React from 'react';
import { ScrollView } from 'react-native';

import Name from './Name';
import Caracteristics from './Caracteristics';
import History from './History';
import Movies from './Movies';

const CharInfo: React.FC = () => {
  return(
    <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
      <Name nameChar='Tony Stark' nameFantasy='Homem de ferro' />
      <Caracteristics age={30} height={1.80} weight={78} universe='Terra' />
      <History />
      <Movies />
    </ScrollView>
  );
}

export default CharInfo;
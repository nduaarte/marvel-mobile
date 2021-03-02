import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import CharInfo from './Screens/CharInfo';

const MyStack: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        {/* <Screen name="Home" component={Home} /> */}
        <Screen name="CharInfo" component={CharInfo} />
      </Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
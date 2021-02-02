import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts, Khula_400Regular, Khula_800ExtraBold, Khula_600SemiBold, Khula_300Light, Khula_700Bold} from '@expo-google-fonts/khula';

import Routes from './src/Routes';
import { Styles } from './src/Styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Khula-heavy': Khula_800ExtraBold,
    'Khula-bold': Khula_700Bold,
    'Khula-semibold': Khula_600SemiBold,
    'Khula-regular': Khula_400Regular,
    'Khula-light': Khula_300Light
  })

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={Styles}>
        <Routes />
      </ThemeProvider>
    );
  }
}


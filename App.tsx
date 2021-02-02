import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/khula';

import Gilroy_heavy from './src/assets/fonts/gilroy-heavy.ttf';
import Gilroy_bold from './src/assets/fonts/gilroy-bold.ttf';
import Gilroy_semibold from './src/assets/fonts/gilroy-semibold.ttf';
import Gilroy_medium from './src/assets/fonts/gilroy-medium.ttf';
import Gilroy_regular from './src/assets/fonts/gilroy-regular.ttf';

import Routes from './src/Routes';
import { Styles } from './src/Styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    Gilroy_heavy,
    Gilroy_bold,
    Gilroy_semibold,
    Gilroy_medium,
    Gilroy_regular
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


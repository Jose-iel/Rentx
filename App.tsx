import React from 'react';
// import { CardDetails } from './src/screens/CardDetails';
// import { Home } from './src/screens/Home';
import { SchedulingDetails } from './src/screens/SchedulingDetails';
import { SplashScreen } from './src/screens/SplashScreen';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  }); 

  if(!fontsLoaded) {
    return <SplashScreen/>
  }

  return (
    <ThemeProvider theme={theme}>
      <SchedulingDetails />
    </ThemeProvider>
  );
}
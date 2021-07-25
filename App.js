import React, { useState, useEffect } from 'react';

// Library
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import * as firebase from 'firebase';

// utils
import { theme } from './src/infrastructure/theme';

//Provider
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

// Navigation
import Navigation from './src/infrastructure/navigation';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD7D-W5TEohpnCVLdgEsuKLs465Qzes27g',
  authDomain: 'mealstogo-a8693.firebaseapp.com',
  projectId: 'mealstogo-a8693',
  storageBucket: 'mealstogo-a8693.appspot.com',
  messagingSenderId: '1062585920583',
  appId: '1:1062585920583:web:123be3bdd883f0b94f1562',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

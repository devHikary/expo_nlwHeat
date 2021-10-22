import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }
  return <Home />;
}
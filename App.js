import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as ScreenOrientation from 'expo-screen-orientation'
import PrimeiroAcesso from './pages/PrimeiroAcesso';
import Home from './pages/Home';
import Perguntas from './pages/Perguntas';
import Perguntas2 from './pages/Perguntas/page2';
import Perguntas3 from './pages/Perguntas/page3';
import Perguntas4 from './pages/Perguntas/page4';
import Perguntas45 from './pages/Perguntas/page4-5.js';
import Perguntas5 from './pages/Perguntas/page5';
import Obrigado from './pages/Obrigado';
import Dados from './pages/Dados';
import page1 from './pages/Dados/page1';
import Final from './pages/Final';
import Processos from './pages/Processos';
import api from './src/Services/Api';


import {
  useFonts
} from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {

  
  const [loaded] = useFonts({
    Oswald:require('./assets/fonts/Oswald_400Regular.ttf'),
    Crimson:require('./assets/fonts/CrimsonPro.ttf'),
    Arial:require('./assets/fonts/ARIAL.ttf'),
    Times:require('./assets/fonts/TimesRegular.ttf'),
  });
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='PrimeiroAcesso' screenOptions={{headerShown: false}}>
        <Stack.Screen name="PrimeiroAcesso" component={ PrimeiroAcesso } />
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Perguntas" component={ Perguntas } />
        <Stack.Screen name="Perguntas2" component={ Perguntas2 } />
        <Stack.Screen name="Perguntas3" component={ Perguntas3 } />
        <Stack.Screen name="Perguntas4" component={ Perguntas4 } />
        <Stack.Screen name="Perguntas4-5" component={ Perguntas45 } />
        <Stack.Screen name="Perguntas5" component={ Perguntas5 } />
        <Stack.Screen name="Dados" component={ Dados } />
        <Stack.Screen name="Dadospage1" component={ page1 } />
        <Stack.Screen name="Processos" component={ Processos } />
        <Stack.Screen name="Final" component={ Final } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


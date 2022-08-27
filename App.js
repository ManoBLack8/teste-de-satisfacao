import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as ScreenOrientation from 'expo-screen-orientation'
import Home from './pages/Home';
import Perguntas from './pages/Perguntas';
import Obrigado from './pages/Obrigado';
import Dados from './pages/Dados';
import page1 from './pages/Dados/page1';
import Final from './pages/Final';


import {
  useFonts
} from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Oswald:require('./assets/fonts/Oswald_700Bold.ttf'),
  });
  const [orientationIsLandscape,setOrientation]=useState(true)
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Perguntas" component={ Perguntas } />
        <Stack.Screen name="Obrigado" component={ Obrigado } />
        <Stack.Screen name="Dados" component={ Dados } />
        <Stack.Screen name="Dadospage1" component={ page1 } />
        <Stack.Screen name="Final" component={ Final } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


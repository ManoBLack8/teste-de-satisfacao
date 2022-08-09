import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as ScreenOrientation from 'expo-screen-orientation'
import Home from './pages/Home';
import Adm from './pages/Adm';


const Stack = createNativeStackNavigator();

export default function App() {
  const [orientationIsLandscape,setOrientation]=useState(true)
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Adm" component={ Adm } />
        <Stack.Screen name="Home" component={ Home } />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {
  useFonts
} from 'expo-font';


export default function Home({ navigation }) {
  const [loaded] = useFonts({
    Oswald:require('./Oswald_700Bold.ttf'),
  });
    return (
<View style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('./logoOt.jpg')}></Image>
      <Text style={styles.text}>Por favor responda algumas perguntas</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Perguntas')}>
      <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#302D2D",
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'100%',
      height:'100%',
    },
    text:{
      color:"#fff",
      fontSize:60,
      fontFamily: 'Oswald',
    },
    button:{
      backgroundColor: "#F4EFF4",
      
      width:200,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#302D2D",
      fontFamily:'Oswald',
      fontSize:60,
    },
    logo:{
      width:200,
      height:200,
      backgroundColor:"#fff",
      borderRadius:10,
    }
    
  });
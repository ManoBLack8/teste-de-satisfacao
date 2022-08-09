import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
    return (
<View style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('./logoOt.jpg')}></Image>
      <Text style={styles.text}>Por favor responda algumas perguntas</Text>
      <TouchableOpacity style={styles.button} delayLongPress={5000} onLongPress={() => navigation.navigate ('Adm')}>
      <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#43878D",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    text:{
      color:"#fff",
      marginVertical:50,
      fontSize:60,
      fontWeight:'900',
    },
    button:{
      backgroundColor: "#F4EFF4",
      paddingHorizontal:35,
      paddingVertical:5,
      borderRadius:10,
    },
    buttonText:{
      color:"#302D2D",
      fontWeight:'900',
      fontSize:60,
    },
    logo:{
      width:200,
      height:200,
      marginVertical:50,
      backgroundColor:"#fff",
      borderRadius:10,
    }
  });
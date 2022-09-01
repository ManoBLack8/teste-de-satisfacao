import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Home({ navigation }) {
    return (
<View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Obrigado, agora preencha os seus dados: </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Dados')}>
      <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'100%',
      height:'100%',
    },
    text:{
      color:"#302D2D",
      fontSize:60,
      fontFamily: 'Oswald',
      width:600,
    },
    button:{
      backgroundColor: "#302D2D",
      paddingHorizontal:50,
      width:200,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#fff",
      fontFamily:'Oswald',
      fontSize:60,
    },
    
  });
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
      width:600,
    },
    button:{
      backgroundColor: "#F4EFF4",
      paddingHorizontal:50,
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
    
  });
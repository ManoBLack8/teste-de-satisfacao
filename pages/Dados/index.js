import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';


export default function Home({ navigation }) {
    return (
<View style={styles.container}>
      <Text style={styles.text}>lorem ipsum</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Dadospage1')}>
      <Text style={styles.buttonText}>Proximo</Text>
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
      justifyContent: "flex-start",
    },
    text:{
      color:"#fff",
      marginVertical:50,
      fontSize:70,
      fontFamily: 'Oswald',
    },

    button:{
      backgroundColor: "#F4EFF4",
      paddingHorizontal:50,
      width:350,
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
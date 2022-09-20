import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ route, navigation }) {

  const { loja } = route.params;
    return (
<View style={styles.container}>
      <View style={styles.contentContainer}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Olá! Conte pra nós como foi sua experiência ao visitar nossa loja!</Text>
      </View>
      <Image 
      style={styles.logo}
      source={require('./logoOt.jpg')}></Image>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Dadospage1',{
        master: {
          loja: loja
        }
      })}>
      <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
      </View>
      </View>
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
    contentContainer:{
      borderWidth:5,
      margin:10,
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    textContainer:{
      alignItems: "center",
      justifyContent:'center',
      width:800,
      marginTop:30,
    },
    text:{
      color:"#302D2D",
      fontSize:60,
      fontFamily: 'Crimson',
      marginBottom:10,
    },
    buttonContainer:{
      width:'100%',
      alignItems: "flex-end",
      marginRight:60,
      marginBottom:20,
    },
    button:{
      backgroundColor: "#fff",
      width:200,
      borderWidth:5,
      borderColor:"#302D2D",
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#302D2D",
      fontFamily:'Oswald',
      fontSize:50,
      marginBottom:10,
    },
    logo:{
      width:250,
      height:250,
      backgroundColor:"#fff",
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    }
    
  });
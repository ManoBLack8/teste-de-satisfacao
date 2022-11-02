import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
  
  
  const [nom_loja, setLoja] = useState();
  const [Logo, setLogo] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null ) {
        setLoja(value);
        const baseUrl = 'http://teste-de-satisfacao.herokuapp.com/lojas/?logo='+value;
          axios
            .get(baseUrl)
            .then((response) =>{ setLogo(response.data)})
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });
        
      }
    } catch(e) {
      // error reading value
    }
  }
  getData();
  
  console.log(Logo);
  const loja = nom_loja;
  
    return (
<View style={styles.container}>
      <View style={styles.contentContainer}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Olá! Conte pra nós como foi sua experiência ao visitar nossa loja!</Text>
      </View>
      <Image 
      style={styles.logo}
      source={Logo}></Image>
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
      margin:10,
      borderWidth:3,
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
      fontSize:50,
      fontFamily: 'Arial',
      marginBottom:10,
    },
    buttonContainer:{
      width:'100%',
      alignItems: "flex-end",
      marginRight:60,
      marginBottom:20,
    },
    button:{
      backgroundColor: "#302D2D",
      width:200,
      borderColor:"#302D2D",
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#fff",
      fontFamily:'Arial',
      fontSize:50,
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
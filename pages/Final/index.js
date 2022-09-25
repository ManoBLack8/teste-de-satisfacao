import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Home({ route, navigation }) {
  const headers = {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
};
  const { master } = route.params;
  const baseUrl = 'http://teste-de-satisfacao.herokuapp.com/respostas';
    axios.post(`${baseUrl}?send=add`, {
      headers,
      item: {master: master},
      type: 'products'
  })
      .then(response => {
          const {data} = response;
          setTimeout(() => {
            navigation.navigate ('Home')
        }, 10000);
  
          console.log(response);
      })
      .catch(err => {
          console.error(err);
          setTimeout(() => {
            navigation.navigate ('Home')
        }, 10000);
      });
    return (
<View style={styles.container}>
  <View style={styles.contentContainer}>
    <Image 
      style={styles.logo}
      source={require('./logoOt.jpg')}></Image>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Prontinho! Tenha um ótimo dia!</Text>
      
      </View>
      <StatusBar style="auto" />
    </View>
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
      marginTop:20,
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    textContainer:{
      justifyContent:"center",
      alignItems:'center',
    },
    text:{
      color:"#302D2D",
      justifyContent:"center",
      alignItems:'center',
      fontSize:60,
      fontFamily: 'Crimson',
    },
    button:{
      backgroundColor: "#F4EFF4",
      paddingHorizontal:50,
      width:200,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    logo:{
      width:250,
      height:250,
      backgroundColor:"#fff",
      borderRadius:10,
    }
    
  });
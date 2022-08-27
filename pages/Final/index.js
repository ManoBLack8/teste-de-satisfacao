import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Home({ navigation }) {
    setTimeout(() => {
        navigation.navigate ('Home')
    }, 10000);
    return (
<View style={styles.container}>
    <Image 
      style={styles.logo}
      source={require('./logoOt.jpg')}></Image>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Obrigado pela preferencia, volte sempre</Text>
      </View>
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
    logo:{
      width:200,
      height:200,
      backgroundColor:"#fff",
      borderRadius:10,
    }
    
  });
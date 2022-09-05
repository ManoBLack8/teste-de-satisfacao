import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';


export default function Home({ navigation }) {
    return (
<View style={styles.container}>
<Text style={styles.titulo}>Obrigado, agora preencha os seus dados:</Text>

  <View style={styles.inputContainer}>
      <TextInput placeholder='Digite seu nome' placeholderTextColor="#888888" style={styles.input}/>
      
  </View>
  <View style={styles.inputContainer}>
      <TextInput placeholder='Digite seu email' placeholderTextColor="#888888" style={styles.input}/>
      
  </View>
  <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Seu telefone" keyboardType="numeric" placeholderTextColor="#888888"/>
  </View>
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
      backgroundColor: "#fff",
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
    inputContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    input: {
      height: 70,
      width:'80%',
      fontSize:50,
      borderBottomWidth:2,
      marginTop:15,
      fontFamily: 'Oswald',
      color:"#302D2D",
    },
    button:{
      backgroundColor: "#302D2D",
      paddingHorizontal:50,
      width:350,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#fff",
      fontFamily:'Oswald',
      fontSize:60,
    },titulo:{
      color:"#302D2D",
      fontSize:60,
      fontFamily: 'Oswald',
    }
    
  });
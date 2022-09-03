import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';


export default function PrimeiroAcesso({ navigation }) {
    return (
<View style={styles.container}>
<View style={styles.inputContainer}>
      <TextInput placeholder='Digite o nome da loja' placeholderTextColor="#888888" style={styles.input}/>
      
  </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Home')}>
      <Text style={styles.buttonText}>Entrar</Text>
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
      fontSize:70,
      fontFamily: 'Oswald',
    },
    inputContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    input: {
      height: 70,
      width:'50%',
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
    },
    
  });
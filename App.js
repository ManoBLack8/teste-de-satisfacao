import React from "react";
import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
=======
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
>>>>>>> Stashed changes

export default function App() {
  
  
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
=======
      <Image 
      style={styles.logo}
      source={require('@images/logoOt.jpg')}></Image>
      <Text style={styles.text}>Por favor responda algumas perguntas</Text>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
>>>>>>> Stashed changes
      <StatusBar style="auto" />
      <Text style={styles.textprincipal}>Digite a senha</Text>
      <TextInput
      style={styles.input}
      secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
      >
        <Text>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43878D",
    alignItems: "center",
    justifyContent: "flex-start",
  },
<<<<<<< Updated upstream
  textprincipal: {
    color: '#000',
    fontSize: 30,
  },
  input: {
  borderWidth: 2,
  borderColor: '#000',
  borderRadius:10,
  width: 200,
  height: 50,
  margin:10,
  },
  button:{
    borderWidth: 1,
    borderColor:'#000',
    borderRadius:5,
    width:100,
    height:35,
    justifyContent: 'center',
    alignItems: 'center',
  },
=======
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
>>>>>>> Stashed changes
});

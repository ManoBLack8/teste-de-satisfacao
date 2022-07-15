import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  
  
  return (
    <View style={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});

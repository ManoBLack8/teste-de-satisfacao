import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';


//() => navigation.navigate ('Home')
export default function PrimeiroAcesso({ navigation }) {

  const [nom_loja, setLoja] = useState();
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null ) {
        navigation.navigate ('Home')
      }
    } catch(e) {
      // error reading value
    }
  }
  getData();
  const Enviar = (value) => {
    storeData(value);
    navigation.navigate ('Home')
  }
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput placeholder='Digite o nome da loja' 
            name="username"
            onChangeText={setLoja}
            placeholderTextColor="#888888" style={styles.input}/>
            
        </View>
      <TouchableOpacity style={styles.button} onPress={() => Enviar(nom_loja)}>
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
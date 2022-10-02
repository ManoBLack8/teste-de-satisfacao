import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';


//() => navigation.navigate ('Home')
export default function PrimeiroAcesso({ navigation }) {
  const [selectedLoja, setSelectedLoja] = useState();

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
        navigation.navigate ('Home', {
          loja: value
        })
      }
    } catch(e) {
      // error reading value
    }
  }
  getData();
  const Enviar = (value) => {
    storeData(value);
  
      navigation.navigate ('Home', {
        loja: nom_loja
      })
  }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Selecione a loja: </Text>
        <View style={styles.inputContainer}>
        <Picker
        style={styles.pickerContainer}
        selectedValue={selectedLoja}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLoja(itemValue)
  }>
  <Picker.Item style={styles.pickerItem} label="Loja X" value="X" />
  <Picker.Item style={styles.pickerItem} label="Loja Y" value="Y" />
</Picker>
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
      color:"#302D2D",
      fontSize:70,
      fontFamily: 'Arial',
    },
    inputContainer:{
      width:300,
      height:200,
    },
    pickerItem:{
      fontSize:40,
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


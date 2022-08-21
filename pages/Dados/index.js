import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';


export default function Home({ navigation }) {
    return (
<View style={styles.container}>
  <View style={styles.inputContainer}>
      <Text style={styles.text}>Nome: </Text>
      <TextInput style={styles.input}/>
  </View>
  <View style={styles.inputContainer}>
      <Text style={styles.text}>Telefone: </Text>
      <TextInput style={styles.input} placeholder="(99) 99999-9999" keyboardType="numeric" placeholderTextColor="#D0D0D0"/>
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
      backgroundColor: "#302D2D",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    text:{
      color:"#fff",
      marginVertical:50,
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
      width:500,
      fontSize:50,
      borderBottomWidth:2,
      marginTop:15,
      fontFamily: 'Oswald',
      color:"#fff",
    },
    button:{
      backgroundColor: "#F4EFF4",
      paddingHorizontal:50,
      width:350,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#302D2D",
      fontFamily:'Oswald',
      fontSize:60,
    },
    
  });
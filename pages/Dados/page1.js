import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";



export default function Home({ navigation }) {
  const [current, setCurrent] = useState("sexo");

    return (
<View style={styles.container}>
    <View style={styles.SexoContainer}>
        <Text style={styles.text}>Sexo:</Text>
        <View style={styles.textButtonContainer}>
            <RadioButtonGroup style={styles.RadioButtonGroup}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="green"
          >
            <RadioButtonItem style={styles.buttonSexo} value="M" label={<Text style={styles.text}>M</Text>} />
            <RadioButtonItem style={styles.buttonSexo} value="F" label={<Text style={styles.text}>F</Text>} />
          </RadioButtonGroup>
        </View>
    </View>
      <View style={styles.inputContainer}>
      <Text style={styles.text}>Idade: </Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="  99" placeholderTextColor="#D0D0D0"/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Final')}>
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
      justifyContent: "space-evenly",
      width:'100%',
      height:'100%',
    },
    text:{
      color:"#fff",
      marginHorizontal:50,
      fontSize:60,
      fontFamily: 'Oswald',
    },
    SexoContainer:{
        flexDirection:'row',
        
    },
    buttonSexo:{
        backgroundColor:"#F4EFF4",
        width:70,
        height:70,
        borderRadius: 50,
    },
    btnPress: {
      opacity:0.1,
      backgroundColor:"#F4EFF4",
      borderRadius: 50,
      width:70,
      height:70,
    },
    btnNormal: {
      borderRadius: 50,
      width:70,
      height:70,
    },
    textButtonContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    inputContainer:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      
    },
    input: {
      height: 70,
      width:100,
      fontSize:50,
      borderBottomWidth:3,
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
    RadioButtonGroup:{
      flexDirection: 'row',
    
    },
    
  });
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";



export default function Home({ navigation }) {
  const [current, setCurrent] = useState("sexo");

    return (
<View style={styles.container}>
  <View style={styles.contentContainer}>
    <View style={styles.SexoContainer}>
        <Text style={styles.text}>Sexo:</Text>
        <View style={styles.textButtonContainer}>
            <RadioButtonGroup style={styles.RadioButtonGroup}
            containerStyle={{flexDirection: 'row'}}
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
      <TextInput style={styles.input} keyboardType="numeric" placeholder="  99" placeholderTextColor="#888888"/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Dados')}>
      <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
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
      borderWidth:5,
      margin:10,
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    text:{
      color:"#302D2D",
      marginHorizontal:50,
      fontSize:60,
      fontFamily: 'Crimson',
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
    textButtonContainer:{
     
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
      fontFamily: 'Crimson',
      color:"#302D2D",
    },
    button:{
      backgroundColor: "#fff",
      width:200,
      height:100,
      borderWidth:5,
      borderColor:"#302D2D",
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#302D2D",
      fontFamily:'Oswald',
      fontSize:50,
      marginBottom:10,
    },
    RadioButtonGroup:{
      flex:1,
      flexDirection: 'row',
    
    },
    
    
  });
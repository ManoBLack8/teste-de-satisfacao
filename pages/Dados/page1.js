import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { PrimeiroAcesso } from "../PrimeiroAcesso";


export default function Home({ route, navigation }) {
  const [current, setCurrent] = useState("sexo");
  const [Idade, setText] = useState("");
  const { master } = route.params;

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
      <TextInput style={styles.input} keyboardType="numeric" placeholder="  99" placeholderTextColor="#888888" onChangeText={newText => setText(newText)}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Dados',{
        master: {
          loja: master.loja,
          sexo: current,
          idade: Idade
        }
      })}>
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
      margin:10,
      alignItems: "center",
      borderWidth:3,
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    text:{
      color:"#302D2D",
      marginHorizontal:50,
      fontSize:60,
      fontFamily: 'Arial',
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
      fontFamily: 'Times',
      color:"#302D2D",
    },
    button:{
      backgroundColor: "#302D2D",
      width:220,
      height:100,
      borderColor:"#302D2D",
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#fff",
      fontFamily:'Arial',
      fontSize:50,
    },
    RadioButtonGroup:{
      flex:1,
      flexDirection: 'row',
    
    },
    
    
  });
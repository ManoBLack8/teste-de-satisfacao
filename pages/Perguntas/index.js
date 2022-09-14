import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { array } from 'prop-types';


export default function Home({ navigation }) {
  const [current, setCurrent] = useState("satisfacao");
  const baseUrl = 'http://localhost/apimanoblack/perguntas/';
  const [pergunta, setPergunta] = useState();
  const [idPergunta, setId] = useState();
  const [totalPergunta, setTotal] = useState();
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  // Utilização mais simples de busca axios
  let i = 0;
  while (totalPergunta > i) {
    useEffect(() => {
      axios
        .get(baseUrl)
        .then((response) =>{ setPergunta(response.data[i].enunciado_pergunta), setId(response.data[i].id_perguta), setTotal(response.data.length)})
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []); 
  }

  const Enviar = (current) => {
    const resposta = current;
    var respostaArray = {};
      respostaArray = {
        idPergunta,
        resposta
      }
      i++;
      console.log(respostaArray);
      console.log(i);
  }
  //() => navigation.navigate ('Obrigado') 
  return (
      
    <View style={styles.container}>
      <Text style={styles.text}>{pergunta}</Text>
      <View style={styles.qButtonContainer}>
      <View style={styles.textButtonContainer}>
            <RadioButtonGroup style={styles.RadioButtonGroup}
            containerStyle={{flexDirection: 'row', alignItems: "center",
            justifyContent: "space-evenly" }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioStyle={{ opacity: 0 }}
            
          >
            <RadioButtonItem style={{ with: 100}} value="1" label={<Image style={styles.questionImg} source={require('./happyIcon.png')} ></Image>} />
            <RadioButtonItem style={{ with: 100}} value="2" label={<Image style={styles.questionImg} source={require('./neutralIcon.png')} ></Image>} />
            <RadioButtonItem style={{ with: 100}} value="3" label={<Image style={styles.questionImg} source={require('./sadIcon.png')} ></Image>} />
          </RadioButtonGroup>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
      Enviar(current);}}>
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
      color:"#302D2D",
      fontSize:70,
      fontFamily: 'Oswald',
    },
    questionImg:{
        width:125,
        height:125,
    },
    qButtonContainer:{
        flexDirection:'row',
    },
    btnPress: {
      opacity:0.2,
      backgroundColor:'white',
      borderRadius: 25,
      width:125,
      height:125,
      marginHorizontal:50,
    },
    btnNormal: {
      borderRadius: 25,
      width:125,
      height:125,
      marginHorizontal:50,
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
    RadioButtonGroup:{
      flex:1,
      flexDirection: 'row',
    
    },
    unselected: {
      backgroundColor: 'red',
      margin: 5,
    },
    selected: {
      backgroundColor: 'blue',
      margin: 6,
      padding: 10,
      borderRadius: 10,
    },
    
  });
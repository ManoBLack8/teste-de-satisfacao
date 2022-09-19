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
      <View style={styles.contentContainer}>
      <Text style={styles.textSmall}>Página: 1 de 5</Text>
      <Text style={styles.text}>Como foi seu atendimento ?</Text>
      <View style={styles.qButtonContainer}>
      <View style={styles.textButtonContainer}>
            <RadioButtonGroup style={styles.RadioButtonGroup}
            containerStyle={{flexDirection: 'row', alignItems: "center",
            justifyContent: "space-between", width:600,}}
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Perguntas2')}>
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
      justifyContent: "space-between",
      width:'100%',
      height:'100%',
    },
    contentContainer:{
      borderWidth:5,
      margin:10,
      marginTop:20,
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    textSmall:{
      color:"#302D2D",
      fontSize:30,
      fontFamily: 'Crimson',
    },
    text:{
      color:"#302D2D",
      fontSize:70,
      fontFamily: 'Crimson',
    },
    questionImg:{
        width:125,
        height:125,
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
    unselected: {
      backgroundColor: 'red',
      margin: 5,
    },
    selected: {
      backgroundColor: 'blue',
      margin: 5,
      padding: 10,
      borderRadius: 10,
    },
    
  });
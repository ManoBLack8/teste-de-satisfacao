import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";


export default function Home({ route, navigation }) {
  const { master } = route.params;
  const [current, setCurrent] = useState("satisfacao");
  const baseUrl = 'http://teste-de-satisfacao-app.herokuapp.com/perguntas/';
  const [perguntas, setPerguntas] = useState();
  const [totalPergunta, setTotal] = useState();
  const [Idp, setPerId] = useState();
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  const i = 1;
  // Utilização mais simples de busca axios
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) =>{ setPerguntas(response.data[i]['enunciado_pergunta']), setTotal(response.data.length),  setPerId(response.data[i]['id_perguta'])})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const Enviar = () => {
    navigation.navigate ('Perguntas3', {
      master: {
        cliente: master.cliente,
        resposta:{
          idp1: master.resposta.idp1,
          rp1: master.resposta.rp1,
          idp2: Idp,
          rp2: current
        }
        
      }
    })
  }

  if(current != "satisfacao"){
    Enviar()
  }
  //() => navigation.navigate ('Obrigado')  

  return (
      
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <Text style={styles.textSmall}>Página: 2 de {totalPergunta}</Text>
      <Text style={styles.text}>{perguntas}</Text>
      <View style={styles.qButtonContainer}>
      <View style={styles.textButtonContainer}>
            <RadioButtonGroup style={styles.RadioButtonGroup}
            containerStyle={{flexDirection: 'row', alignItems: "center",
            justifyContent: "space-between", width:600,}}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioStyle={{ opacity: 0 }}
            
          >
            <RadioButtonItem style={{ with: 100}} value="1" label={<Image style={current == 1 ? styles.selected : styles.questionImg} source={require('./happyIcon.png')} ></Image>} />
            <RadioButtonItem style={{ with: 100}} value="2" label={<Image style={current == 2 ? styles.selected : styles.questionImg} source={require('./neutralIcon.png')} ></Image>} />
            <RadioButtonItem style={{ with: 100}} value="3" label={<Image style={current == 3 ? styles.selected : styles.questionImg} source={require('./sadIcon.png')} ></Image>} />
          </RadioButtonGroup>
        </View>
      </View>
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
      margin:10,
      marginTop:20,
      borderWidth:3,
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    textSmall:{
      color:"#302D2D",
      fontSize:30,
      fontFamily: 'Arial',
    },
    text:{
      color:"#302D2D",
      fontSize:65,
      fontFamily: 'Arial',
    },
    questionImg:{
        width:125,
        height:125,
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
    unselected: {
      backgroundColor: 'red',
      margin: 5,
    },
    selected: {
      width:125,
      height:125,
      borderColor:"#302D2D",
      borderWidth: 4,
      borderRadius: 10
    },
    
  });
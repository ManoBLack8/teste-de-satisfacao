import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";


export default function Home({ navigation }) {
  const [current, setCurrent] = useState("satisfacao");
  const baseUrl = 'http://localhost/apimanoblack/perguntas/';
  const [perguntas, setPerguntas] = useState();
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  const Perguntas = (resposta) => {
    const countPerguntas = perguntas.length;
    for (let i = 0; i < countPerguntas; i++) {
      const enunciado = perguntas[i]['enunciado_pergunta'];
      const id_perguta = perguntas[i]['id_perguta'];
      var arrayresultado = [];
      arrayresultado['id_pergunta'] = id_perguta;
      arrayresultado['id_resposta'] = resposta;
      console.log(arrayresultado);
    }
  }
  // Utilização mais simples de busca axios
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => setPerguntas(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  //() => navigation.navigate ('Obrigado')  

  return (
      
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <Text style={styles.textSmall}>Página: 3 de 5</Text>
      <Text style={styles.text}>lorem ipsum</Text>
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Perguntas4')}>
      <Text style={styles.buttonText}>Proximo</Text>
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
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity,  TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Home({ route, navigation }) {
  const { master } = route.params;
  const baseUrl = 'http://teste-de-satisfacao.herokuapp.com/funcionarios/?id='+master.cliente.loja ;
  const [selectedFuncionario, setSelectedFuncionario] = useState();
  const [Funcionario, setFuncionario] = useState();
  const [fu, setComprimento] = useState();
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) =>{
        
            axios.get(baseUrl).then(response => {
              // do something with response
              let users = []
              for (let i = 0; i < response.data.length; i++) {
                users.push(<Picker.Item key={i} style={styles.pickerItem} label={response.data[i]["nome_funcionario"]} value={response.data[i]["id_funcionario"]} />);
              
              }
              setFuncionario(users);
            })

      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  let users = [];

  let promises = [];
  console.log(master);
  console.log(Funcionario);
  return (
      
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>Fui atendido por: </Text>
        </View>
      <View style={styles.inputContainer}>
      <Picker
        style={styles.pickerContainer}
        selectedValue={selectedFuncionario}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedFuncionario(itemValue)
  }>
    <Picker.Item style={styles.pickerItem} label="Selecine:" value=" " />
  {Funcionario}
  <Picker.Item style={styles.pickerItem} label="Outra" value="0" />
  <Picker.Item style={styles.pickerItem} label="Não Lembro" value="lembra" />
</Picker>
    </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Perguntas5',{
        master:{
          cliente: master.cliente,
          resposta:{
            idp1: master.resposta.idp1,
            rp1: master.resposta.rp1,
            idp2: master.resposta.idp2,
            rp2: master.resposta.rp2,
            idp3: master.resposta.idp3,
            rp3: master.resposta.rp3,
            idp4: master.resposta.idp4,
            rp4: master.resposta.rp4,
            funcionario: selectedFuncionario
        }
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
      justifyContent: "space-between",
      width:'100%',
      height:'100%',
    },
    contentContainer:{
      borderWidth:3,
      margin:10,
      marginTop:20,
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    textContainer:{
        alignItems: "center",
        justifyContent:'center',
        width:870,
        marginTop:30,
      },
    textSmall:{
      color:"#302D2D",
      fontSize:30,
      fontFamily: 'Crimson',
    },
    text:{
        color:"#302D2D",
        fontSize:50,
        fontFamily: 'Arial',
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
    pickerContainer:{
    },
    pickerItem:{
        fontSize:40,
        fontFamily:'Arial',
    },
    inputContainer:{
        width:300,
        height:200,
      },
    input: {
        height: 70,
        width:'90%',
        fontSize:50,
        borderBottomWidth:2,
        marginTop:15,
        fontFamily: 'Times',
        color:"#302D2D",
      },
    
  });
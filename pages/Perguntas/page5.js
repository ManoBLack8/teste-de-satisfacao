import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  TextInput } from 'react-native';

export default function Home({ route, navigation }) {
  const { master } = route.params;
  const [comentario, setcoment] = useState("");
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
      
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Já estamos finalizando! Caso queira, escreva abaixo seu comentário ou observação: </Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChangeText={newEmail => setcoment(newEmail)}/>
    </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Final',{
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
            funcionario: master.resposta.funcionario,
            comentario: comentario
        }
      }})}>
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
    inputContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
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
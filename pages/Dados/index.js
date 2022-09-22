import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';


export default function Home({ route, navigation }) {
  const { master } = route.params;
  const [nome, setText] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTel] = useState("");
    return (
<View style={styles.container}>
  <View style={styles.contentContainer}>
      <Text style={styles.text}>Caso queira, pode inserir abaixo seu contato:</Text>
  <View style={styles.inputContainer}>
      <TextInput placeholder='Digite seu nome' placeholderTextColor="#888888" style={styles.input} onChangeText={newText => setText(newText)}/>
      
  </View>
  <View style={styles.inputContainer}>
      <TextInput placeholder='Digite seu email' placeholderTextColor="#888888" style={styles.input} onChangeText={newEmail => setEmail(newEmail)}/>
      
  </View>
  <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Seu telefone" keyboardType="numeric" placeholderTextColor="#888888" onChangeText={newTel => setTel(newTel)}/>
  </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Perguntas', {
        master: {
          loja: master.loja,
          sexo: master.sexo,
          idade: master.idade,
          nome: nome,
          email: email,
          telefone: telefone
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
      justifyContent: "space-evenly",
      width:'95%',
      height:'92%',
    },
    text:{
      color:"#302D2D",
      fontSize:50,
      fontFamily: 'Crimson',
    },
    inputContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    input: {
      height: 70,
      width:'80%',
      fontSize:50,
      borderBottomWidth:2,
      marginTop:15,
      fontFamily: 'Crimson',
      color:"#302D2D",
    },
    button:{
      backgroundColor: "#fff",
      width:200,
      height:100,
      
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
    titulo:{
      color:"#302D2D",
      fontSize:60,
      fontFamily: 'Crimson',
    }
    
  });
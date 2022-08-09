import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Adm({ navigation }) {
    return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate ('Home')}>
            <Image 
            style={styles.icon}
            source={require('./Homeicon.png')}></Image>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Geral</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Funcionarios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Perguntas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Loja</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F4EFF4",
    },
    text:{
        
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        width:550,
        height:100,
        backgroundColor: "#302D2D",
        borderRadius:10,
        margin:15,

    },
    buttonText:{
        color:"#FFFFFF",
        fontWeight:'900',
        fontSize:70,
    },
    icon:{
        height:70,
        width:70,
        backgroundColor:'#ADADAD',
        borderRadius:10,
        margin:10,
    },
    
  });
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Home({ navigation }) {
    return (
<View style={styles.container}>
      <Text style={styles.text}>lorem ipsum</Text>
      <View style={styles.qButtonContainer}>
      <TouchableOpacity style={styles.questionButton}>
      <Image style={styles.questionImg} source={require('./happyIcon.png')} ></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.questionButton}>
      <Image style={styles.questionImg} source={require('./neutralIcon.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.questionButton}>
      <Image style={styles.questionImg} source={require('./sadIcon.png')}></Image>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Perguntas')}>
      <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#302D2D",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    text:{
      color:"#fff",
      marginVertical:50,
      fontSize:70,
      fontFamily: 'Oswald',
    },
    questionImg:{
        width:125,
        height:125,
    },
    qButtonContainer:{
        flexDirection:'row',
        marginVertical:50,
    },
    questionButton:{
        backgroundColor:'#302D2D',
        width:125,
        height:125,
        marginHorizontal:60,
        borderRadius:15,
        
    },
    button:{
      backgroundColor: "#F4EFF4",
      paddingHorizontal:50,
      width:200,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    buttonText:{
      color:"#302D2D",
      fontFamily:'Oswald',
      fontSize:60,
    },
    
  });
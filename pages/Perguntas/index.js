import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';


export default function Home({ navigation }) {
  const [isPressHappy, setIsPressHappy] = useState(false);
  const [isPressNeutral, setIsPressNeutral] = useState(false);
  const [isPressSad, setIsPressSad] = useState(false);
  const touchPropsHappy = {
    activeOpacity: 1,
    underlayColor: 'black',
    style: isPressHappy ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPressHappy(true),
    onShowUnderlay: () => setIsPressHappy(true),
    onPress: () => {setIsPressSad(false);setIsPressNeutral(false)},
  };
  const touchPropsNeutral = {
    activeOpacity: 1,
    underlayColor: 'black',
    style: isPressNeutral ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPressNeutral(true),
    onShowUnderlay: () => setIsPressNeutral(true),
    onPress: () => {setIsPressSad(false);setIsPressHappy(false)},
  };
  const touchPropsSad = {
    activeOpacity: 1,
    underlayColor: 'black',
    style: isPressSad ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPressSad(true),
    onShowUnderlay: () => setIsPressSad(true),
    onPress: () => {setIsPressHappy(false);setIsPressNeutral(false)},
  };
    return (
<View style={styles.container}>
      <Text style={styles.text}>lorem ipsum</Text>
      <View style={styles.qButtonContainer}>
      <TouchableHighlight {...touchPropsHappy}>
      <Image style={styles.questionImg} source={require('./happyIcon.png')} ></Image>
      </TouchableHighlight>
      <TouchableHighlight {...touchPropsNeutral}>
      <Image style={styles.questionImg} source={require('./neutralIcon.png')}></Image>
      </TouchableHighlight>
      <TouchableHighlight {...touchPropsSad}>
      <Image style={styles.questionImg} source={require('./sadIcon.png')}></Image>
      </TouchableHighlight>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Obrigado')}>
      <Text style={styles.buttonText}>Proximo</Text>
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
      justifyContent: "space-evenly",
      width:'100%',
      height:'100%',
    },
    text:{
      color:"#fff",
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
      backgroundColor: "#F4EFF4",
      paddingHorizontal:50,
      width:350,
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
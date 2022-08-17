import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';


export default function Home({ navigation }) {
    return (
<View style={styles.container}>
      <Text style={styles.text}>Sexo:</Text>
    <View style={styles.SexoContainer}>
        <View style={styles.textButtonContainer}>
        <Text style={styles.text}>F</Text>
        <TouchableOpacity style={styles.buttonSexo}>
        </TouchableOpacity>
        </View>

        <View tyle={styles.textButtonContainer}>
        <Text style={styles.text}>M</Text>
        <TouchableOpacity style={styles.buttonSexo}>
        
        </TouchableOpacity>
        </View>

        <View tyle={styles.textButtonContainer}>
        <TouchableOpacity style={styles.buttonSexo}>
        
        </TouchableOpacity>
        </View>
    </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('Final')}>
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
      justifyContent: "flex-start",
    },
    text:{
      color:"#fff",
      marginHorizontal:60,
      fontSize:70,
      fontFamily: 'Oswald',
    },
    SexoContainer:{
        flexDirection:'row',
    },
    buttonSexo:{
        backgroundColor:"#F4EFF4",
        width:40,
        height:40,
    },
    textButtonContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
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
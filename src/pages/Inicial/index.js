import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function Inicial(){
  return (
    <View style={styles.container}>

      <View style={styles.containerPerfil}>
        <Image
        source={require('../../assets/fotoperfil.jpg')}
        style={ styles.fotoPerfil }
      />

      <Text style={styles.textPerfil}>Pablo Escobar</Text>  
      </View>

      <TouchableOpacity style={styles.button1}>
        <Text style={styles.textButton}>Gasto Diário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.textButton}>Gasto Semanal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3}>
        <Text style={styles.textButton}>Gasto Mensal</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#38a69d",
    borderTopLeftRadius: 30
  },
  containerPerfil:{
    flexDirection: 'row',
    
  },
  fotoPerfil:{
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 20,
    marginStart: 20,
    marginBottom: 15,
  },
  textPerfil:{
    alignSelf: 'center',
    marginStart: 35,
    color: '#121212',
    fontSize: 35
  },
  button1:{
    backgroundColor: '#FFF',
    marginTop: 70,
    marginBottom: 90,
    height: 80,
    width: 390,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button2:{
    backgroundColor: '#FFF',
    marginBottom: 90,
    height: 80,
    width: 390,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button3:{
    backgroundColor: '#FFF',
    height: 80,
    width: 390,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    color: '#121212',
    fontSize: 25,
    
  }
});
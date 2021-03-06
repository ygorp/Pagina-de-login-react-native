import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Bem Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite seu email'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={ () =>navigation.navigate('Inicial')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegistre}>
          <Text style={styles.registreText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
   );
 }

 const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: '#38a69d',
   },
   containerHeader:{
     marginTop: '14%',
     marginBottom: '8%',
     paddingStart: '5%'
   },
   message:{
     fontSize: 28,
     fontWeight: 'bold',
     color: '#FFFFFF'
   },
   containerForm:{
     backgroundColor: "#FFF",
     flex: 1,
     borderTopLeftRadius: 25,
     borderTopRightRadius: 25,
     paddingStart: '5%',
     paddingEnd: '5%'
   },
   title:{
     fontSize: 20,
     marginTop: 28,
   },
   input:{
     borderBottomWidth: 1,
     height: 40,
     marginBottom: 12,
     fontSize: 16,
   },
   button:{
     backgroundColor: '#38a69d',
     width: '100%',
     borderRadius: 5,
     paddingVertical: 8,
     marginTop: 14,
     justifyContent: 'center',
     alignItems: 'center'
   },
   buttonText:{
     color: '#FFF',
     fontSize: 18,
     fontWeight: 'bold'
   },
   buttonRegistre:{
     marginTop: 15,
     alignSelf: 'center'
   },
   registreText:{
     color: '#121212'
   }
 })
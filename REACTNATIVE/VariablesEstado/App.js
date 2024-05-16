import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';//import para variable de estado 

export default function App() {
  /*const arreglo=useState(0);//un arreglo que contiene 2 apartados para la variable y para poder modificarla 
  const contadorEstado=arreglo[0]; //variable de estado
  const setContadorEstado=arreglo[1];//para repintar la pagina*/

 const [contadorEstado,setContadorEstado]=useState(0);//simplificamos codigo con la desestructuracion 


  
  const incrementar=()=>{

    setContadorEstado(contadorEstado+1);

  }
  const decrementar=()=>{
    setContadorEstado(contadorEstado-1);
  }


  //RETO 21 VIDAS
  const [vidas,setVidas]=useState(5);
  const restarVida=()=>{
    setVidas(vidas-1);
    if(vidas==0){
    Alert.alert("ADVERTENCIA","GAME OVER");
    setVidas(vidas);
    }
  }

  const sumarVida=()=>{
    setVidas(vidas+3);
  }
  return (
    <View style={styles.container}>
      <Text>Variable de Estado </Text>
      <Text>CONTADOR ESTADO: {contadorEstado} </Text>
      <Text>VIDAS: {vidas} </Text>
      <Button
      title="PREMIAR"
      onPress={sumarVida}
      />

<Button
      title="PERDER VIDA"
      onPress={restarVida}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

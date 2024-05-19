import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [estatura,setEstatura]=useState();
  const [peso,setPeso]=useState();
  const [mensaje,setMensaje]=useState();
 

  return (
    <View style={styles.container}>
      <Text>CALCULADORA IMC</Text>
      <Text>{mensaje}</Text>
      <Text style={styles.texto}>ESTATURA</Text>
       <TextInput
        style={styles.caja}
       value={estatura}
       onChangeText={setEstatura}
       placeholder="ingrese su estatura en centimetros"
       />
      
      <Text style={styles.texto}>PESO</Text>
      <TextInput
        style={styles.caja}
       value={peso}
       onChangeText={setPeso}
       placeholder="ingrese su peso en Kilogramos"
       />

       <Button
       title="CALCULAR"
       onPress={()=>{
        let estaturaMetros=parseFloat(estatura)/100;
        let imc=parseFloat(peso)/(estaturaMetros*estaturaMetros)

        if(imc<18.5){
          setMensaje("Su imc es "+imc.toFixed(2)+" Y su peso es inferior al normal");
        }else if(imc>=18.5 && imc<25.0){
          setMensaje("Su imc es "+imc.toFixed(2)+" Y su peso es normal");
        }else if(imc>=25.0 && imc<30.0){
          setMensaje("Su imc es "+imc.toFixed(2)+" Y su peso es superior al normal");
        }else{
          setMensaje("Su imc es "+imc.toFixed(2)+" Y tiene Obesidad");
        }


       }}
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
  texto:{
    fontSize:14,
    marginBottom:10,
    fontWeight:"bold",
   
    marginTop:70
  },

  caja:{
    borderColor:'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:5,
    marginBottom:10,
    
  },
});

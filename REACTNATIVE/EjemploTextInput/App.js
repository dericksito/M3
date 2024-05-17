import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';
import { useState } from 'react';
export default function App() {

   const [nombre,setNombre]=useState("ingrese su nombre");
   const [apellido,setApellido]=useState("ingrese su apellido");
   const[nombreCompleto,setNombreCompleto]=useState("");
  return (
    <View style={styles.container}>
      <Text>Ejemplo TextInput</Text>
      <Text>HOLA {nombreCompleto}</Text>
      
      <TextInput
      style={styles.cajaTexto}
      value={nombre}
      onChangeText={(txt)=>{
        setNombre(txt);//le pasamos el valor de lo que nosotros mandamos a la caja que es txt y eso ahora va a ser nombre
      }}
      />

      <TextInput
      style={styles.cajaTexto}
      value={apellido}
      onChangeText={(txt)=>{
        setApellido(txt);
      }}
      />

      <Button
      title="Saludar"
      onPress={()=>{
     let completo=nombre+" "+apellido;
     setNombreCompleto(completo);
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

  cajaTexto:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
  }
});

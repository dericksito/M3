import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nombre,setNombre]=useState();
  const [apellido,setApellido]=useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejemplo Margin</Text>
      <TextInput
      style={styles.caja}
      value={nombre}
      onChangeText={setNombre}
      placeholder="ingrese su nombre"
      />
      <TextInput
       style={styles.caja}
      value={apellido}
      onChangeText={setApellido}
      placeholder="ingrese su apellido"
      />

      <Button
      title="OK"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   justifyContent: 'center',
   alignItems:'stretch',
   paddingHorizontal:10
  },

  caja:{
    borderColor:'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:5,
    marginBottom:10
  },

  titulo:{
    fontSize:14,
    marginBottom:10,
    fontWeight:"bold",
    
  }
});


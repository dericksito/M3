import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';


export default function App() {
  const despedirse=()=>{
    Alert.alert("MENSAJE","Adios Mundo");
  }
  return (
    <View style={styles.container}>
      <Text>Bienvenido al curso de RN --Derick Cedeño--</Text>
      <StatusBar style="auto" />
     <Button
     title="HOLA"
     onPress={()=>{
     Alert.alert("Hola Mundo","Desde el boton");
     }}
     
     />

<Button
     title="ADIOS"
    onPress={despedirse}
     />
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

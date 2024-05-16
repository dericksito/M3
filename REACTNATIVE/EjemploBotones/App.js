import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default function App() {
  const finalizar=()=>{
    Alert.alert("SU SESION HA FINALIZADO");
  }
  return (
    <View style={styles.container}>
      <Text>INICIO SESION</Text>
      <StatusBar style="auto" />
      
      <Button
      title="INICIAR"
      onPress={()=>{
        Alert.alert("SU SESION HA INICIADO");
      }}
      />

      <Button
      title="FINALIZAR"
      onPress={finalizar}
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

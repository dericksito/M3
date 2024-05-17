import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ESTILOS</Text>
      <Button
      title="COMP 1"
      />
      <Button
      title="COM 2" color="green"
      />
      <Button
      title="COM 3"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   flexDirection:'row',
   justifyContent:'center',//eje principal 
  alignItems:'center'//eje secundario 
   
  },
});

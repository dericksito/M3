import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.contenedor2}></View>
    <View style={styles.contenedor3}>
    <View style={styles.contenedor4}></View>
    <View style={styles.contenedor5}>
    <View style={styles.contenedor6}></View>
    <View style={styles.contenedor7}>
     <Button title="BOTON 1"/>
     <Button title="BOTON 2"/>
     <Button title="BOTON 3"/>
    </View>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
   flexDirection:'column'
  },
  contenedor2: {
    flex:1,
    backgroundColor:'blue'
  },
  contenedor3: {
    flex:1,
    backgroundColor:'green'
  },
  contenedor4: {
    flex:1,
    backgroundColor:'yellow'
  },
  contenedor5: {
    flex:1,
    backgroundColor:'black',
    flexDirection:'row',
  },
  contenedor6: {
    flex:1,
    backgroundColor:'white'
  },
  contenedor7: {
    flex:2,
    backgroundColor:'orange',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'stretch'
  }
  
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Button title="X"/>
        <Button title="Y"/>
        <Button title="Z"/>
      </View>
      <View style={styles.container3}>
      <View style={styles.container5}>
      <View style={styles.container7}>
      <Button title="BOTON 1"/>
      <Button title="BOTON 2"/>
      </View>
      <View style={styles.container8}>
      <Button title="OPERACION1"/>
      <Button title="OPERACION2"/>
      <Button title="OPERACION3"/>
      </View>
      </View>
      <View style={styles.container6}>
      <Button title="ACCION1"/>
      <Button title="ACCION2"/>
      </View>
      </View>
      <View style={styles.container4}>
      <Button title="BOTON FINAL"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
   
  },
  container2: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems: 'center'
   
  },
  container3: {
    flex: 4,
    backgroundColor: 'green',
   
  },
  container4: {
    flex: 1,
    backgroundColor: 'orange',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'flex-start'
  },
  container5: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection:'row'
   
  },
  container6: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end'
   
  },
  container7: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems: 'center'
   
  },
  container8: {
    flex: 1,
    backgroundColor: 'white',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'flex-start'
  }
});

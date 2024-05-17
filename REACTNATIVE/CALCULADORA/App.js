import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
export default function App() {

  const [valor1, setValor1] = useState("ingrese el valor 1");
  const [valor2, setValor2] = useState("ingrese el valor 2");
  const [resultado, setResultado] = useState(" ");

  return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>
      <Text>{resultado}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valor1}
        onChangeText={(txt) => {
          setValor1(txt);
        }}
      />

      <TextInput
        style={styles.cajaTexto}
        value={valor2}
        onChangeText={(txt) => {
          setValor2(txt);
        }}
      />

      <Button
        title="SUMAR"
        onPress={() => {
          let resultadoSuma = parseFloat(valor1) + parseFloat(valor2);
          setResultado(resultadoSuma);
        }}
      />

      <Button
        title="RESTAR"
        onPress={() => {
          let resultadoResta = parseFloat(valor1) - parseFloat(valor2);
          setResultado(resultadoResta);
        }}
      />

      <Button
        title="MULTIPLICAR"
        onPress={() => {
          let resultadoMulti = parseFloat(valor1) * parseFloat(valor2);
          setResultado(resultadoMulti);
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

  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  }
});

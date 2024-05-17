import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [dolar, setDolar] = useState("Ingresa tu valor en dolares");
  const [resultado, setResultado] = useState("");
  return (
    <View style={styles.container}>
      <Text>CONVERTIDOR</Text>

      <TextInput
        style={styles.cajaTexto}
        value={dolar}
        onChangeText={(txt) => {
          setDolar(txt);
        }}
      />

      <Text>{resultado}</Text>

      <Button
        title="PESOS MEXICANOS"
        onPress={() => {
          let pesosMexicanos = parseFloat(dolar) * 16.70;
          setResultado("Pesos Mexicanos: " + pesosMexicanos.toFixed(2));
        }}
      />

      <Button
        title="PESOS COLOMBIANOS"
        onPress={() => {
          let pesosColombianos = parseFloat(dolar) * 3828.13;
          setResultado("Pesos Colombianos: " + pesosColombianos.toFixed(2));
        }}
      />

      <Button
        title="EUROS"
        onPress={() => {
          let euros = parseFloat(dolar) * 0.92;
          setResultado("Euros: " + euros.toFixed(2));
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

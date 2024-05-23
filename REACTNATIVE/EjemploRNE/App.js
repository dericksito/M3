import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import { Button, Icon, Input } from '@rneui/base';
import { useState } from 'react';


export default function App() {

  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Ingrese su nombre"
      />

      <Text>{name}</Text>
      <Button
        title="OK"
        icon={{
          name: 'home',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        onPress={()=>{
          Alert.alert("INFO","Su nombre es :"+name)
        }}
      />
      <Button
        title="CANCEL"
        icon={<Icon
          name='home'
          type='font-awesome'

          color='white'
        />}
      />

      <Icon
        name='cloud'
        type='ionicon'

        color='black'
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
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './app/screens/HomeScreens';
import{Contacts} from './app/screens/ContactsScreens';
import { Productos } from './app/screens/ProductosScreens';


const Stack=createNativeStackNavigator();//sirve para configurar la navegacion

export default function App() {
  return (
  <NavigationContainer>

   <Stack.Navigator>
  <Stack.Screen name='HomeNav' component={Home}/> 
  <Stack.Screen name='ContactsNav' component={Contacts}/>
  
  <Stack.Screen name='ProductosNav' component={Productos}/>

   </Stack.Navigator>


  </NavigationContainer>
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

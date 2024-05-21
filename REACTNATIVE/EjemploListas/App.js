import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList,TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

let personas = [
  { nombre: 'Thor', apellido: 'thillas', cedula: '0850983420' },
  { nombre: 'Derick', apellido: 'Cedeno', cedula: '0850983412' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '0850983220' },
];

let esNuevo=true;//nos ayuda a saber si se esta creando una nueva poersona o si hay que modificarla
//inicia el programa en true 
let indiceSeleccionado=-1;// alamacena la variable de la persona que se va a modificar

export default function App() {
  let ItemPersona = (props) => {
    return (
  
      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}>
          <Text> {props.producto.codigo}</Text>
        </View>
  
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {props.persona.nombre} {props.persona.apellido}
          </Text>
          <Text style={styles.textoSecundario}>
            {props.persona.cedula}
          </Text>
        </View>
  
        <View style={styles.itemBotones}>
          <Button
          title=" E "
         onPress={()=>{
          setTxtNombre(props.persona.nombre);
          setTxtApellido(props.persona.apellido);
          setTxtCedula(props.persona.cedula);
          esNuevo=false;//le imdicamos que es falso pq no es nuevco y ya existe entonces hay que modificar
          indiceSeleccionado=props.producto.codigo
         }}
          />
          <Button
          title=" X "
          color='red'
          onPress={()=>{
            indiceSeleccionado=props.producto.codigo;
            personas.splice(indiceSeleccionado,1);//un atribruto del arreglo que nos permite borrar a uno y le tenemos uqe pasar el indice en este caso y cuantos queremos borrars
            setNumElementos(productos.length)
          }}
          />
        </View>
  
  
      </View>
    );
  }

  let limpiar=()=>{
    setTxtNombre(null);
    setTxtApellido(null);
    setTxtCedula(null);
    esNuevo=true;//cada que limpie pondra la variable en true para poner uno nuevo 
  }

  let existePersona=()=>{
    for(let i=0;i<personas.length;i++){
      if(personas[i].cedula == txtCedula){
      return true;
      }
    }
    return false;
  }

  let guardarPersona=()=>{
    if(esNuevo){
      if(existePersona()){
     Alert.alert("YA EXISTE UNA PERSONA CON LA CEDULA "+txtCedula)
      }else{
        let personaNueva={ nombre: txtNombre, apellido: txtApellido, cedula: txtCedula};
  personas.push(personaNueva);
      }
      
    }else{
      personas[indiceSeleccionado].nombre=txtNombre;
      personas[indiceSeleccionado].apellido=txtApellido;
    
    }
    limpiar();
    setNumElementos(personas.length);

 

 limpiar();//repintar con set para que aparezca la info en pantalla 
  }

  const [txtCedula,setTxtCedula]=useState();
  const [txtNombre,setTxtNombre]=useState();
  const [txtApellido,setTxtApellido]=useState();
  const [numElementos,setNumElementos]=useState(personas.length);
  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>

        <TextInput
        style={styles.txt}
        value={txtCedula}
        placeholder="ïngrese su cedula"
        placeholderTextColor="gray"
        onChangeText={setTxtCedula}
        keyboardType="numeric"//para restrignir cosas del teclado  se usa el teclado segun el tipo de dato a ingresar
        editable={esNuevo}//nos deja editar o no la caja dependiendo de si es nueva la persona o no 
        />
        <TextInput
        style={styles.txt}
        value={txtNombre}
        placeholder="ïngrese su nombre"
        placeholderTextColor="gray"
        onChangeText={setTxtNombre}
        />
        <TextInput
        style={styles.txt}
        value={txtApellido}
        placeholder="ingrese su apellido"
        placeholderTextColor="gray"

        onChangeText={setTxtApellido}
        />

        <View style={styles.areaBotones}>
        <Button
        title="GUARDAR"
        onPress={()=>{
        guardarPersona();
        }}
        />
        <Button
        title="NUEVO"
        onPress={()=>{
          limpiar();
        }}
        />
    
        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>
      <View style={styles.areaContenido}>

        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={(obj) => {

            return <ItemPersona
              indice={obj.index}
              persona={obj.item}
            />

          }}
          keyExtractor={(item) => {
            return item.cedula;
          }}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor:Derick Cedeño</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },

  lista: {
    //backgroundColor:'lightpink'
  },

  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row'
  },

  textoPrincipal: {
    fontSize: 16,
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16
  },

  areaCabecera: {
    flex: 4,
   // backgroundColor: 'chartreuse',
    justifyContent:'center'
  },

  areaContenido: {
    flex: 10,
    //backgroundColor: 'coral'
  },
  areaPie: {
    flex: 1,
   // backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemIndice: {
    flex: 1,
    //backgroundColor:'darkgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {

    flex: 9,
    paddingLeft: 5
    // backgroundColor:'darkorange'
  },
  itemBotones: {
    flex: 2,
   // backgroundColor:'darkorange',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },

  txt:{
    borderWidth:1,
    borderColor:'gray',
    paddingTop:3,
    paddingHorizontal:5,
    marginBottom:5
  },

  areaBotones:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },

  
});

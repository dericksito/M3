import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Alert, Button,ScrollView,KeyboardAvoidingView,Platform } from 'react-native';
import { useState } from 'react';

let productos = [
  { nombre: 'Coca-Cola', categoria: 'Bebidas', precioCompra: 1.00, precioVenta: 1.50, codigo: 100 },
  { nombre: 'Rufles', categoria: 'Snacks', precioCompra: 0.30, precioVenta: 0.50, codigo: 101 },
  { nombre: 'Pepsi', categoria: 'Bebidas', precioCompra: 1.00, precioVenta: 1.50, codigo: 102 },
  { nombre: 'Doritos', categoria: 'Snacks', precioCompra: 0.35, precioVenta: 0.55, codigo: 103 },
  { nombre: 'Manzana', categoria: 'Frutas', precioCompra: 0.20, precioVenta: 0.40, codigo: 104 },
]
let esNuevo=true;
let indiceSeleccionado=-1;
export default function App() {

  const [txtcodigo, setCodigo] = useState();
  const [txtnombre, setNombre] = useState();
  const [txtcategoria, setCategoria] = useState();
  const [txtprecioCompra, setPrecioCompra] = useState();
  const [txtprecioVenta, setPrecioVenta] = useState();
  const [numElementos,setNumElementos]=useState(productos.length);
  

  let ItemProducto = (props) => {
    return (


      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}>
          <Text> {props.producto.codigo}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>{props.producto.nombre}</Text>
          <Text>{" (" + props.producto.categoria + ")"}</Text>
        </View>

        <View  style={styles.itemBotones}>
          <Text style={styles.textoSecundario}>{"USD " + props.producto.precioVenta}</Text>

        </View>
        <View style={styles.itemBotones}>
          <Button
          title="E"
          onPress={()=>{
            setCodigo(props.producto.codigo.toString());
            setNombre(props.producto.nombre);
            setCategoria(props.producto.categoria);
            setPrecioCompra(props.producto.precioCompra.toString());
            calcularPrecioVenta(props.producto.precioCompra.toString());

            esNuevo=false;
            indiceSeleccionado=props.indice;


          }}
          />
          <Button
          title="X"
          onPress={()=>{
            indiceSeleccionado=props.indice;
            productos.splice(indiceSeleccionado,1);
            setNumElementos(productos.length)
          }}
          />
        </View>

      </View>


    );
  }

  let guardarProducto=()=>{
     if(esNuevo){
        if(existePersona()){
          Alert.alert("INFO","EL PRODUCTO CON EL ID INGRESADO YA EXISTE");
        }else{
          let productoNuevo={codigo: txtcodigo, nombre: txtnombre, categoria: txtcategoria, precioCompra:txtprecioCompra, precioVenta: txtprecioVenta};
          productos.push(productoNuevo);
          limpiar();
        }
       
       
       
     }else{
      productos[indiceSeleccionado].nombre=txtnombre;
      productos[indiceSeleccionado].categoria=txtcategoria;
      productos[indiceSeleccionado].precioCompra=txtprecioCompra;
      productos[indiceSeleccionado].precioVenta=txtprecioVenta;
    }
    limpiar();
     setNumElementos(productos.length);
    
   
     limpiar();
  }

  let existePersona=()=>{
    for(let i=0;i<productos.length;i++){
      if (productos[i].codigo==txtcodigo) {
        return true
      }
    }
    return false 
  }

  let limpiar=()=>{
    setCodigo(null);
    setNombre(null);
    setCategoria(null);
    setPrecioCompra(null);
    setPrecioVenta(null);
    esNuevo=true;//cada que limpie pondra la variable en true para poner uno nuevo 
  }

  let calcularPrecioVenta = (precioCompra) => {
    if (precioCompra=="") {
      setPrecioVenta("")
    }else{
      let prc = parseFloat(precioCompra.replace(',', '.'));
      let calculo = prc+(prc*0.2)
      setPrecioVenta(calculo.toFixed(2))
    }
  };
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <View style={styles.container}>
       <ScrollView >
      <View style={styles.areaCabecera}><Text style={styles.TextoProducto}>PRODUCTOS</Text>
        <TextInput
          style={styles.txt}
          value={txtcodigo}
          placeholder="CODIGO"
          placeholderTextColor="gray"
          onChangeText={setCodigo}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtnombre}
          placeholder="NOMBRE"
          placeholderTextColor="gray"
          onChangeText={setNombre}

        />
        <TextInput
          style={styles.txt}
          value={txtcategoria}
          placeholder="CATEGORIA"
          placeholderTextColor="gray"
          onChangeText={setCategoria}

        />
        <TextInput
          style={styles.txt}
          placeholder="PRECIO DE COMPRA"
         
          placeholderTextColor="gray"
          value={txtprecioCompra}
          onChangeText={(txt)=>{
            setPrecioCompra(txt)
            calcularPrecioVenta(txt)
          }}
          keyboardType='numeric'

        />
        <TextInput
          style={styles.txt}
          value={txtprecioVenta}
          placeholder="PRECIO DE VENTA"
          placeholderTextColor="gray"
         
          editable={false}

        />

        <View style={styles.areaBotones}>
          <Button
            title="NUEVO"
            onPress={() => {
             limpiar();
            }}
          />
          <Button
            title="GUARDAR"
            onPress={() => {
              
              if(txtcodigo==null || txtnombre==null || txtcategoria==null || txtprecioCompra==null){
                Alert.alert("INFO","Debe llenar todos los campos")
               }else{
                
                 guardarProducto();
               }
            }}
          />

          

        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>
      </ScrollView>
        
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={productos}
          renderItem={(obj) => {
            return <ItemProducto
              indice={obj.index}
              producto={obj.item}
            />

          }}
          keyExtractor={(item) => {
            return item.codigo;
          }}

        />

      </View>

      <View style={styles.areaPie}>
        <Text>Autor:Derick Cedeño</Text>
      </View>

      <StatusBar style="auto" />
    </View>
    </KeyboardAvoidingView>
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
    // backgroundColor:'lightpink',

  },

  itemPrincipal: {
    backgroundColor: 'lightcyan',
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'mediumpurple',
    borderRadius: 15

  },
  textoPrincipal: {
    fontSize: 16,
  },
  

  textoSecundario: {
    fontWeight: 'bold',

  },

  TextoP: {
    alignItems: 'center',

  },
  TextoProducto: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  areaCabecera: {
    flex: 5,
   // backgroundColor: 'chartreuse',
    justifyContent: 'center'
  },
  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 8,
    paddingHorizontal: 5,
    marginBottom: 8,
    borderRadius: 15,
    padding: 15,



  },
  areaContenido: {
    flex: 8,
  //  backgroundColor: 'coral'
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 130

  },
  areaPie: {
    flex: 1,
   // backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemPersona: {
   // backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'mediumpurple',
    borderRadius: 15
  },
  itemIndice: {
    flex: 1,
   // backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {

    flex: 4,
    paddingLeft: 10,
  //  backgroundColor: 'darkorange',
    
  },
  itemBotones: {
    flex: 2,
   // backgroundColor: 'darkorange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

});

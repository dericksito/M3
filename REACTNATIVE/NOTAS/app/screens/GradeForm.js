import { View,Text,StyleSheet } from "react-native"
import{Input,Button} from '@rneui/base'
import { useState } from "react"
import{saveGrade} from '../services/GredeServices'

export const GradeForms=({navigation,route})=>{//con route recuperamos los datos q nos traemos con el boton con la plabra notita
    const [subject,setSubject]=useState();
    const [grade,setGrade]=useState();
    const [errorSubject,setErrorSubject]=useState();
    const [errorGrade,setErrorGrade]=useState();
    let hasErrors=false;

    console.log("devukve>>>"+route.params.notita)
    const save=()=>{
        setErrorGrade("");
        setErrorSubject("");
        validate();
        if(!hasErrors){

            saveGrade({subject:subject,grade:grade});
            navigation.goBack();//nos permite regresar donde estabamos sin tener que poner la ruta otra vez 

        }
       
    }
    const validate=()=>{
        if(subject=="" || subject==null){
            setErrorSubject("Debe ingresar una Materia");
            hasErrors=true;
        }
         let gradeFloat=parseFloat(grade);

        if(gradeFloat=="" || gradeFloat==null || isNaN(gradeFloat) || (gradeFloat<0 || gradeFloat>10)){
        setErrorGrade("Debe ingresar una nota entre 0 y 10");
        hasErrors=true;
        }
    }
return <View style={styles.container}>
    <Input
    value={subject}
    onChangeText={setSubject}
    placeholder="Ejempplo:Matematicas"
    label="Materia"//sirve para darle un titulo al input
    errorMessage={errorSubject}// para mostrar errores abajo de los textos para validaciones
    />
    <Input
    value={grade}
    onChangeText={setGrade}
    placeholder="0-10"
    label="Nota"
    errorMessage={errorGrade}
   // keyboardType="numeric"
    />

    <Button
    title="GURDAR"
    icon={{
        name:'save',
        type:'entypo',
        color:'white',
    }}
    buttonStyle={styles.saveButon}//para darle estilos al boton 
    
    onPress={()=>{
        save();
    }}
    />

</View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    saveButon:{
        backgroundColor:'green'
    }
  });
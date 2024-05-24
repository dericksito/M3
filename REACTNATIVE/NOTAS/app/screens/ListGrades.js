import { View,Text,StyleSheet,FlatList,TouchableHighlight } from "react-native"
import {getGrades} from '../services/GredeServices';
import {FAB,ListItem,Avatar} from '@rneui/base'
import { useState } from "react";


export const ListGrades=({navigation})=>{
    const [time,setTime]=useState();

    const refreshList=()=>{
        setTime(new Date().getTime());//funcion truco para resfrescar pantalla
    }
    const ItemGrade=({nota})=>{
        return  <TouchableHighlight onPress={()=>{
            navigation.navigate('GradeFormNav',{notita:nota,fnRefresh:refreshList});//para cuando nos lleve  a la poagina nos recuepere los datos con ese nombre notita
                                                            //para actualizar la lsita
        }}> 
            <ListItem bottomDivider>

        <Avatar
            title={nota.subject.substring(0, 1)}//asi estoy tomando la primera letra para que aparezca
            containerStyle={{ backgroundColor: 'red' }}
        />
            <ListItem.Content>

            <ListItem.Title>{nota.subject}</ListItem.Title>
            <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
            </ListItem.Content>
     
       


    </ListItem>
    </TouchableHighlight>
    }

return <View style={styles.container}>
 <FlatList
 data={getGrades()}
 renderItem={({item})=>{
return <ItemGrade 
    nota={item}
/>
 }}

 keyExtractor={(item)=>{
    return item.subject;
 }}

 extraData={time}//aqui se ata la funcion para refrescar pantalla
 />

 <FAB
 title="+"//boton q aparece blotando simplemente y que puedo modificar
 placement="right"//para ubicarlo a derecha , izquierda

 onPress={()=>{
    navigation.navigate('GradeFormNav',{notita:null,fnRefresh:refreshList})
 }} 
 />
</View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
  });
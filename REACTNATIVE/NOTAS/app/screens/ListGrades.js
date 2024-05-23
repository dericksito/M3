import { View,Text,StyleSheet,FlatList,TouchableHighlight } from "react-native"
import {getGrades} from '../services/GredeServices';
import {FAB,ListItem,Avatar} from '@rneui/base'


export const ListGrades=({navigation})=>{
    const ItemGrade=({nota})=>{
        return  <TouchableHighlight onPress={()=>{
            navigation.navigate('GradeFormNav',{notita:nota});//para cuando nos lleve  a la poagina nos recuepere los datos con ese nombre notita

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
 />

 <FAB
 title="<-"//boton q aparece blotando simplemente y que puedo modificar
 placement="right"//para ubicarlo a derecha , izquierda

 onPress={()=>{
    navigation.navigate('GradeFormNav')
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
  });
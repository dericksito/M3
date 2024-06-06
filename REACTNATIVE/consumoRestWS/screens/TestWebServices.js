import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import{getAllPostsService,createPostService,updatePostService,getByUserIdService,getProductsService,createProductService,updateProductsService,getDocumentTypes} from '../services/TestServices'


export const TestWebServices = () => {

   const getAllPosts=()=>{
    getAllPostsService();
   }

   const createPost=()=>{
    createPostService();
   }
   const updatePost=()=>{
    updatePostService();
   }
   const getByUserId=()=>{
    getByUserIdService();
   }
   const getProducts=()=>{
    getProductsService();
   }
   const createProduct=()=>{
    createProductService();
   }
   const updateProduct=()=>{
    updateProductsService();
   }
   const tipoDoc=()=>{
    getDocumentTypes();
   }

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
        <Button
        title="Actualizar Post"
        onPress={updatePost}
      />
        <Button
        title="Filtrar"
        onPress={getByUserId}
      />
          <Button
        title="XXX"
        onPress={getProducts}
      />

      <Button
        title="YYY"
        onPress={createProduct}
      />

      <Button
        title="ZZZ"
        onPress={updateProduct}
      />
      <Button
        title="TIPO DE DOCUMENTOS "
        onPress={tipoDoc}
      />
      
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});
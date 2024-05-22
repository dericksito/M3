import { View, Text, StyleSheet, Button } from 'react-native'


export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>HOME</Text>
        <View style={styles.botones}>
            <Button

                title="CONTACTOS"
                onPress={() => {
                    navigation.navigate('ContactsNav')
                }}
            />
            <Button
                title="PRODUCTOS"
                onPress={() => {
                    navigation.navigate('ProductosNav')
                }}
            />

        </View>

    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    botones: {
        flexDirection: 'row'
    }
});
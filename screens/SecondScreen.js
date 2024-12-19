import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const DetailsScreen = ({ navigation }) => {
    const [text, setText] = useState(''); 

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Nouveau Poste</Text>
        <TextInput
        style={styles.input}
        placeholder='Entrez votre texte'
        value={text}
        onChangeText={(newText) => setText(newText)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 30,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
    },
});

export default DetailsScreen;

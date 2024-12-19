import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Entrez votre texte :</Text>

      <TextInput
        style={styles.input}
        placeholder="Tapez ici..."
        multiline={true}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Texte posté')}>
        <Text style={styles.buttonText}>Poster</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 100,
    width: 380,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    width: 380,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

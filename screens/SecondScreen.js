import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SecondScreen = ({ navigation, addPost }) => {
  const [text, setText] = useState(''); 

  const handlePost = () => {
    if (text.trim()) {
      addPost(text); 
      setText(''); 
      navigation.goBack(); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Créer un post</Text>

      <TextInput
        style={styles.input}
        placeholder="Tape ton message ici"
        multiline={true}
        value={text}
        onChangeText={(newText) => setText(newText)}
      />

      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>Poster</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondScreen;

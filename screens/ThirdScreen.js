import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ThirdScreen = ({ route, navigation }) => {
  const { post, index, updatePost } = route.params; 
  const [text, setText] = useState(post); 
  const handleUpdate = () => {
    if (text.trim()) {
      updatePost(index, text); 
      navigation.goBack(); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modifier le post :</Text>

      <TextInput
        style={styles.input}
        placeholder="Modifier votre post..."
        multiline={true}
        value={text} 
        onChangeText={(newText) => setText(newText)}
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Enregistrer</Text>
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
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThirdScreen;

import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const HomeScreen = () => {
  const handlePress = () => {
    Alert.alert('Bouton cliqué');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acceuil</Text>

      <Button title="Cliquez ici" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20, 
  },
});

export default HomeScreen;

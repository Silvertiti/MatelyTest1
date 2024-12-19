import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const HomeScreen = ({ posts, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fil d'actualité</Text>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postText}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucun post</Text>
        }
      />

      <Button title="Créer un post" onPress={() => navigation.navigate('SecondScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  post: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: 20,
  },
});

export default HomeScreen;

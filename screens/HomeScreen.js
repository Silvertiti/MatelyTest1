import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ posts, setPosts, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fil d'actualité</Text>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.post}>
            <Text style={styles.postText}>{item}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                const updatedPosts = posts.filter((_, i) => i !== index); 
                setPosts(updatedPosts); 
              }}
            >
              <Text style={styles.deleteButtonText}>Supprimer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.extraButton}
              onPress={() => {
                console.log(`Action pour le post : ${item}`);
              }}
            >
              <Text style={styles.extraButtonText}>Modifier</Text>
            </TouchableOpacity>
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
    marginBottom: 10, 
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10, 
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  extraButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  extraButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: 20,
  },
});

export default HomeScreen;

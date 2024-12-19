import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ posts, setPosts, updatePost, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fil d'actualité</Text>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.post}>
            <Text style={styles.postText}>{item}</Text>

            <View style={styles.buttonContainer}>
              {/* Bouton Supprimer */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  const updatedPosts = posts.filter((_, i) => i !== index); // Supprime le post
                  setPosts(updatedPosts); // Met à jour la liste
                }}
              >
                <Text style={styles.deleteButtonText}>Supprimer</Text>
              </TouchableOpacity>

              {/* Bouton Modifier */}
              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  navigation.navigate('ThirdScreen', {
                    post: item,         // Contenu du post
                    index,              // Index du post
                    updatePost,         // Fonction pour mettre à jour
                  })
                }
              >
                <Text style={styles.editButtonText}>Modifier</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Aucun post</Text>}
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
  buttonContainer: {
    flexDirection: 'row', // Place les boutons côte à côte
    justifyContent: 'space-between', // Espacement entre les boutons
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  editButtonText: {
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

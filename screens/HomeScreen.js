import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image } from 'react-native';

const HomeScreen = ({ posts, setPosts, updatePost, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fil d'actualité</Text>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.post}>
            <Text style={styles.postText}>{item.text}</Text>

            {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}

            <View style={styles.buttonContainer}>
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
                style={styles.editButton}
                onPress={() =>
                  navigation.navigate('ThirdScreen', {
                    post: item,
                    index,
                    updatePost, 
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default HomeScreen;

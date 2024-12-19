import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

const Stack = createStackNavigator();

export default function App() {
  const [posts, setPosts] = useState([]); 
  const addPost = (postData) => {
    setPosts([postData, ...posts]); 
  };
  const updatePost = (index, postData) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = postData;
    setPosts(updatedPosts);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen">
          {(props) => (
            <HomeScreen
              {...props}
              posts={posts}
              setPosts={setPosts}
              updatePost={updatePost}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="SecondScreen">
          {(props) => <SecondScreen {...props} addPost={addPost} />}
        </Stack.Screen>
        <Stack.Screen name="ThirdScreen">
          {(props) => <ThirdScreen {...props} updatePost={updatePost} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

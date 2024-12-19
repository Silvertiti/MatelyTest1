import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();

export default function App() {
  const [posts, setPosts] = useState([]); 

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); 
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen">
          {(props) => <HomeScreen {...props} posts={posts} />}
        </Stack.Screen>
        <Stack.Screen name="SecondScreen">
          {(props) => <SecondScreen {...props} addPost={addPost} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

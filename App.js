import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();

export default function App() {
  const [posts, setPosts] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen">
          {(props) => <HomeScreen {...props} posts={posts} setPosts={setPosts} />}
        </Stack.Screen>
        <Stack.Screen name="SecondScreen">
          {(props) => <SecondScreen {...props} addPost={(newPost) => setPosts([newPost, ...posts])} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

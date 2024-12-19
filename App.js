import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page Principale" component={HomeScreen} />
        <Stack.Screen name="Page 2" component={SecondScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

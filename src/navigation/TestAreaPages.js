import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TestAreaScreen} from 'screens';
const Stack = createStackNavigator();

const TestAreaPages = () => (
  <Stack.Navigator
    initialRouteName="test-area-index"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="test-area-index" component={TestAreaScreen} />
  </Stack.Navigator>
);

export default TestAreaPages;

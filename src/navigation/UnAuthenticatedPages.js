import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LandingScreen} from 'screens';
import TestAreaPages from 'navigation/TestAreaPages';
const Stack = createStackNavigator();

const UnAuthenticatedPages = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="landing">
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="testing-hall" component={TestAreaPages} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedPages;

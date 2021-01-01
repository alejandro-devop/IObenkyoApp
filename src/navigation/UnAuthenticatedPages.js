import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LandingScreen} from 'screens';
const Stack = createStackNavigator();

const UnAuthenticatedPages = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="landing">
      <Stack.Screen name="landing" component={LandingScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedPages;

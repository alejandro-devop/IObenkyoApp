import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AlertsScreen} from 'screens';
const Stack = createStackNavigator();

const AlertPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="alerts-index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="alerts-index" component={AlertsScreen} />
    </Stack.Navigator>
  );
};

export default AlertPages;

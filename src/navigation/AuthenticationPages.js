import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardPages from './DashboardPages';
const Stack = createStackNavigator();

const AuthenticationPages = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'dashboard-pages'}>
      <Stack.Screen name="dashboard-pages" component={DashboardPages} />
    </Stack.Navigator>
  );
};

export default AuthenticationPages;

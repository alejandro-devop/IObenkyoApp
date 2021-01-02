import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardPages from './DashboardPages';
import {HabitsAddScreen} from 'screens';
const Stack = createStackNavigator();

const AuthenticationPages = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'dashboard-pages'}>
      <Stack.Screen name="dashboard-pages" component={DashboardPages} />
      <Stack.Screen name="add-habit" component={HabitsAddScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationPages;
